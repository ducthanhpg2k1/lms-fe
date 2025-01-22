import { API_PATH } from '@/api/constant';
import { IOptions } from '@/api/interface';
import { privateRequest, request } from '@/api/request';
import { useRequest } from 'ahooks';

const enrollCourse = async (id: string) => {
  return privateRequest(request.post, `${API_PATH.ENROLL_COURSE(id)}`, {
    data: {},
  });
};

export const useEnrollCourse = (options?: IOptions) => {
  return useRequest(enrollCourse, { manual: true, ...options });
};
