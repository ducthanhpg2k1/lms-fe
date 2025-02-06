import { API_PATH } from '@/api/constant';
import { privateRequest, request } from '@/api/request';

export const userRequest = {
  getMe(params?: any) {
    return privateRequest(request.get, API_PATH.USER_ME, { params });
  },
  update(body: any) {
    return privateRequest(request.patch, API_PATH.USER_UPDATE, { data: body });
  },
};

export const referralRequest = {
  getSummary() {
    return privateRequest(request.get, API_PATH.USER_ME);
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
  headline: string | null;
  biography: string | null;
  websiteUrl: string | null;
  x: string | null;
  facebook: string | null;
  linkedin: string | null;
  youtube: string | null;
  createdAt: string;
  updatedAt: string;
}
