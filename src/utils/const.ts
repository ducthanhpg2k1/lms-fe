export const ROUTE_PATH = {
  HOME: '/',
  COURSE_SEARCH: '/course-search',
  CREATE_COURSE: '/create-course',

  COURSE: '/course',
  LESSON: '/lesson',
  DETAIL_LESSON: (id: any) => `/lesson/${id}`,
  LIST_COURSE: '/list-course',
  DETAIL_COURSE: (id: any) => `/course/${id}`,
};

export enum TYPE_COURSE {
  LECTURE = 'LECTURE',
  QUIZ = 'QUIZ',
}

export enum Language {
  EN = 'EN',
}

export const DATA_LANGUAGE = [
  {
    key: Language.EN,
    label: 'En',
  },
];
export enum Level {
  BEGINNER = 'BEGINNER',
}

export const DATA_LEVEL = [
  {
    key: Level.BEGINNER,
    label: 'Beginner',
  },
];

export enum Topic {
  WEB_DEVELOPMENT = 'WEB_DEVELOPMENT',
  JAVASCRIPT = 'JAVASCRIPT',
  HTML = 'HTML',
  REACTJS = 'REACTJS',
  WORDPRESS = 'WORDPRESS',
  PHP = 'PHP',
}

export enum LessonContentType {
  VIDEO = 'VIDEO',
  VIDEO_SLIDE_MASHUP = 'VIDEO_SLIDE_MASHUP',
  ARTICLE = 'ARTICLE',
}
