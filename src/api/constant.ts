export const API_PATH = {
  // Auth
  AUTH_LOGIN: '/api/v1/auth/login',

  GET_NONCE: '/api/auth/nonce',

  LOGIN_WEB3: '/api/auth/login-web3',

  CATEGORIES: '/api/categories',

  CREATE_COURSE: '/api/courses',
  EDIT_COURSE: (id: string) => `/api/courses/${id}`,

  LIST_COURSE: '/api/courses',

  MY_COURSE: '/api/courses/my-courses',

  SECTIONS: '/api/sections',

  LECTURE: '/api/lessons',

  QUIZZ: '/api/quizzes',

  UPLOAD_FILE: '/api/storage/upload',

  FILTER_PRICE: '/api/filters/price',

  FILTER_TOPIC: '/api/filters/topic',

  FILTER_LEVEL: '/api/filters/level',

  FILTER_LANGUAGE: '/api/filters/language',

  FILTER_VIDEO_DURATION: '/api/filters/video-duration',

  FILTER_RATING: '/api/filters/rating',

  FILTER_FEATURES: '/api/filters/features',

  QUESTION_QUIZZ: (id: string) => `/api/quizzes/${id}/question`,

  EDIT_QUESTION_QUIZZ: (id: string) => `/api/quizzes/questions/${id}`,
};
