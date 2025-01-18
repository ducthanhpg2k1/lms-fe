export const API_PATH = {
  // Auth
  AUTH_LOGIN: '/api/v1/auth/login',

  GET_NONCE: '/api/auth/nonce',

  LOGIN_WEB3: '/api/auth/login-web3',

  CATEGORIES: '/api/categories',

  CREATE_COURSE: '/api/courses',
  EDIT_COURSE: (id: string) => `/api/courses/${id}`,

  LIST_COURSE: '/api/courses',
};
