import { API_PATH } from '@/api/constant';
import { privateRequest, request } from '@/api/request';

const userService = {
  getMe(params?: any) {
    return privateRequest(request.get, API_PATH.USER_ME, { params });
  },
  update(body: any) {
    return privateRequest(request.patch, API_PATH.USER_UPDATE, { data: body });
  },
};

export interface TUser {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  role: string;
  avatar: string | null;
  walletAddress: string;
  createdAt: string;
  updatedAt: string;
}

export default userService;
