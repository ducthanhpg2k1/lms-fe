import { API_PATH } from '@/api/constant';
import { IOptions } from '@/api/interface';
import { privateRequest, request } from '@/api/request';
import { useRequest } from 'ahooks';

const serviceGetCategories = async () => {
  return await privateRequest(request.get, API_PATH.CATEGORIES, {});
};

export const useGetCategories = () => {
  const { data, loading, run } = useRequest(async () => {
    return await serviceGetCategories();
  });

  return {
    dataCategories: data,
    run,
    loading,
  };
};

interface IBody {
  categoryId: string;
  timeSpent: string;
  title: string;
  type: string;
}

const serviceCreateCourse = async (body: IBody) => {
  return privateRequest(request.post, API_PATH.CREATE_COURSE, { data: body });
};

export const useCreateCourse = (options?: IOptions) => {
  return useRequest(serviceCreateCourse, { manual: true, ...options });
};

const getDetailCourse = async (id: string): Promise<any> => {
  return privateRequest(request.get, `${API_PATH.CREATE_COURSE}/${id}`, {});
};

export const useGetDetailCourse = (options?: IOptions) => {
  return useRequest(getDetailCourse, { manual: true, ...options });
};

const serviceEditCourse = (body: any, id: string) => {
  return privateRequest(request.patch, API_PATH.EDIT_COURSE(id), {
    data: body,
  });
};

export const useEditCourse = (options: any) => {
  return useRequest(serviceEditCourse, {
    manual: true,
    ...options,
  });
};
