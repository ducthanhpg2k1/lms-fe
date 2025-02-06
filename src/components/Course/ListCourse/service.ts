/* eslint-disable require-await */
import { API_PATH } from '@/api/constant';
import { IOptions } from '@/api/interface';
import { privateRequest, request } from '@/api/request';
import { useInfiniteScroll, useRequest } from 'ahooks';
import { useMemo } from 'react';

const getListCourse = async (params: any) => {
  return await privateRequest(request.get, API_PATH.LIST_COURSE, { params });
};

export const useGetListCourse = (initialParams: any) => {
  const memoizedParams = useMemo(() => initialParams, [initialParams]);
  const { data, loading, loadMore, loadingMore, noMore, reload, mutate } =
    useInfiniteScroll(
      async (lastData) => {
        const currentPage = lastData?.page || 0; // Default to page 1 if no data yet
        const nextPage = currentPage + 1;
        // console.log('lastData', lastData);

        const response = await getListCourse({
          ...memoizedParams,
          page: nextPage,
        });
        // console.log('lastData', lastData, response);

        return {
          list: [...(response.data || [])],
          page: nextPage,
          total: response?.meta?.totalRecord,
          totalPage: response?.meta?.totalPage,
        };
      },
      {
        isNoMore: (d) => {
          return d ? d.page >= d.totalPage : false;
        },
      }
    );

  return {
    reload,
    mutate,
    dataCourses: data?.list || [],
    loadMore,
    loading,
    loadingMore,
    noMore,
  };
};

const getListMyCourse = async (params: any) => {
  return await privateRequest(request.get, API_PATH.MY_COURSE, { params });
};

export const useGetListMyCourse = (initialParams: any) => {
  const memoizedParams = useMemo(() => initialParams, [initialParams]);
  const { data, loading, loadMore, loadingMore, noMore, reload } =
    useInfiniteScroll(
      async (lastData) => {
        const currentPage = lastData?.page || 0; // Default to page 1 if no data yet
        const nextPage = currentPage + 1;
        // console.log('lastData', lastData);

        const response = await getListMyCourse({
          ...memoizedParams,
          page: nextPage,
        });
        // console.log('lastData', lastData, response);

        return {
          list: [...(response.data || [])],
          page: nextPage,
          total: response?.meta?.totalRecord,
          totalPage: response?.meta?.totalPage,
        };
      },
      {
        isNoMore: (d) => {
          return d ? d.page >= d.totalPage : false;
        },
      }
    );

  return {
    reload,
    dataCourses: data?.list || [],
    loadMore,
    loading,
    loadingMore,
    noMore,
  };
};

interface IBodyComment {
  parentId?: string;
  content: string;
}
const serviceCommentCours = async (body: IBodyComment, id: string) => {
  return privateRequest(request.post, API_PATH.COMMENT_COURSE(id), {
    data: body,
  });
};

export const useCommentCours = (options?: IOptions) => {
  return useRequest(serviceCommentCours, { manual: true, ...options });
};

const serviceRemoveLikeComment = async (id: string) => {
  return privateRequest(request.delete, API_PATH.REMOVE_LIKE_COMMENT(id));
};

export const useRemoveLikeComment = (options?: IOptions) => {
  return useRequest(serviceRemoveLikeComment, { manual: true, ...options });
};

const serviceLikeComment = async (body: any, id: string) => {
  return privateRequest(request.post, API_PATH.LIKE_COMMENT(id), {
    data: body,
  });
};

export const useLikeComment = (options?: IOptions) => {
  return useRequest(serviceLikeComment, { manual: true, ...options });
};

const serviceGetListComment = async (id: string) => {
  const params = {
    order: 'createdAt desc',
    page: 1,
    pageSize: 30,
  };
  return await privateRequest(request.get, `${API_PATH.LIST_COMMENT(id)}`, {
    params,
  });
};

export const useGetListComment = (options?: IOptions) => {
  const { data, loading, run, mutate } = useRequest(
    async (id: string) => {
      return serviceGetListComment(id);
    },
    {
      ...options,
    }
  );

  return {
    mutate,
    dataListComment: data,
    run,
    loading,
  };
};
