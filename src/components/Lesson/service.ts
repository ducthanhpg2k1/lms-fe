import { API_PATH } from '@/api/constant';
import { privateRequest, request } from '@/api/request';
import { useRequest } from 'ahooks';

export const useGetLessons = () => {
  const { data, loading, run } = useRequest(async (id: string) => {
    return await serviceGetLessons(id);
  });

  return {
    dataLesson: data,
    run,
    loading,
  };
};

const serviceGetLessons = async (id: string) => {
  return await privateRequest(request.get, `${API_PATH.LECTURE}/${id}`, {});
};

export const useGetQuizz = () => {
  const { data, loading, run } = useRequest(async (id: string) => {
    return await serviceGetQuizz(id);
  });

  return {
    dataQuizz: data,
    run,
    loading,
  };
};

const serviceGetQuizz = async (id: string) => {
  return await privateRequest(request.get, `${API_PATH.QUIZZ}/${id}`, {});
};
