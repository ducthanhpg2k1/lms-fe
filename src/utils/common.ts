export const ROUTE_PATH = {
  HOME: '/',
  COURSE_SEARCH: '/course-search',
  CREATE_COURSE: '/create-course',

  COURSE: '/course',
  LESSON: '/lesson',
  LIST_COURSE: '/list-course',
  DETAIL_COURSE: (id: any) => `/course/${id}`,
};

export enum TYPE_COURSE {
  LECTURE = 'LECTURE',
  QUIZ = 'QUIZ',
}

export enum Language {
  EN = 'en',
}

export const DATA_LANGUAGE = [
  {
    key: Language.EN,
    label: 'En',
  },
];
export enum Level {
  BEGINNER = 'beginner',
}

export const DATA_LEVEL = [
  {
    key: Level.BEGINNER,
    label: 'Beginner',
  },
];

export enum LessonContentType {
  VIDEO = 'VIDEO',
  VIDEO_SLIDE_MASHUP = 'VIDEO_SLIDE_MASHUP',
  ARTICLE = 'ARTICLE',
}
