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
  const { data, loading, loadMore, loadingMore, noMore, reload } =
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
