export const ROUTE_PATH = {
  HOME: '/',
  COURSE_SEARCH: '/course-search',
  CREATE_SEARCH: '/create-course',

  COURSE: '/course',
  LESSON: '/lesson',
  LIST_COURSE: '/list-course',
  DETAIL_COURSE: (id: any) => `/course/${id}`,
};

export enum TYPE_COURSE {
  LECTURE = 'LECTURE',
  QUIZ = 'QUIZ',
}
