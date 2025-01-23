import { API_PATH } from '@/api/constant';
import { IOptions } from '@/api/interface';
import { privateRequest, request } from '@/api/request';
import { useRequest } from 'ahooks';

export const useGetLessons = (options?: IOptions) => {
  const { data, loading, run } = useRequest(
    async (id: string) => {
      return await serviceGetLessons(id);
    },
    {
      ...options,
    }
  );

  return {
    dataLesson: data,
    run,
    loading,
  };
};

const serviceGetLessons = async (id: string) => {
  return await privateRequest(request.get, `${API_PATH.LECTURE}/${id}`, {});
};

export const useGetQuizz = (options?: IOptions) => {
  const { data, loading, run } = useRequest(
    async (id: string) => {
      return await serviceGetQuizz(id);
    },
    {
      ...options,
    }
  );

  return {
    dataQuizz: data,
    run,
    loading,
  };
};

const serviceGetQuizz = async (id: string) => {
  return await privateRequest(request.get, `${API_PATH.QUIZZ}/${id}`, {});
};
