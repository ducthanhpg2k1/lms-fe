import { API_PATH } from '@/api/constant';
import { IOptions } from '@/api/interface';
import { privateRequest, request } from '@/api/request';
import { useRequest } from 'ahooks';

const serviceGetCategories = async () => {
  return await privateRequest(request.get, API_PATH.CATEGORIES, {
    pageSize: 100,
  });
};

export const useGetCategories = () => {
  const { data, loading, run } = useRequest(async () => {
    return await serviceGetCategories();
  });

  return {
    dataCategories: data,
    run,
    loading,
  };
};

const serviceGetSubCategories = async (id: string) => {
  const params = {
    categoryId: id,
    pageSize: 50,
  };
  return await privateRequest(request.get, API_PATH.SUB_CATEGORIES, { params });
};

export const useGetSubCategories = () => {
  const { data, loading, run } = useRequest(
    async (id: string) => {
      return await serviceGetSubCategories(id);
    },
    {
      manual: true,
    }
  );

  return {
    dataSubCategories: data,
    run,
    loading,
  };
};

interface IBody {
  categoryId: string;
  timeSpent: string;
  title: string;
  type: string;
}

const serviceCreateCourse = async (body: IBody) => {
  return privateRequest(request.post, API_PATH.CREATE_COURSE, { data: body });
};

export const useCreateCourse = (options?: IOptions) => {
  return useRequest(serviceCreateCourse, { manual: true, ...options });
};

const getDetailCourse = async (id: string, userId?: string): Promise<any> => {
  return privateRequest(request.get, `${API_PATH.CREATE_COURSE}/${id}`, {
    params: { userId },
  });
};

export const useGetDetailCourse = (options?: IOptions) => {
  return useRequest(getDetailCourse, { manual: true, ...options });
};

const serviceEditCourse = (body: any, id: string) => {
  return privateRequest(request.patch, API_PATH.EDIT_COURSE(id), {
    data: body,
  });
};

export const useEditCourse = (options: any) => {
  return useRequest(serviceEditCourse, {
    manual: true,
    ...options,
  });
};

const getListSession = async (id: string): Promise<any> => {
  const params = {
    courseId: id,
  };
  return privateRequest(request.get, `${API_PATH.SECTIONS}`, { params });
};

export const useGetListSession = (options?: IOptions) => {
  return useRequest(getListSession, { manual: true, ...options });
};

interface IBodyLesson {
  title: string;
  courseId: string;
  ordinalNumber: number;
  learningObjective: string;
}

const serviceCreateSesson = async (body: IBodyLesson) => {
  return privateRequest(request.post, API_PATH.SECTIONS, { data: body });
};

export const useCreateSesson = (options?: IOptions) => {
  return useRequest(serviceCreateSesson, { manual: true, ...options });
};

const serviceDeleteSesson = async (id: string) => {
  return privateRequest(request.delete, `${API_PATH.SECTIONS}/${id}`);
};

export const useDeleteSesson = (options?: IOptions) => {
  return useRequest(serviceDeleteSesson, { manual: true, ...options });
};

interface IBodyLecture {
  title?: string;
  description?: string;
  ordinalNumber?: any;
  sectionId?: string;
  content?: string;
  contentType?: string;
  resources?: any;
}

const serviceEditLecture = async (body: IBodyLecture, id: string) => {
  return privateRequest(request.patch, `${API_PATH.LECTURE}/${id}`, {
    data: body,
  });
};

export const useEditLecture = (options?: IOptions) => {
  return useRequest(serviceEditLecture, { manual: true, ...options });
};

const serviceCreateLecture = async (body: IBodyLecture) => {
  return privateRequest(request.post, API_PATH.LECTURE, { data: body });
};

export const useCreateLecture = (options?: IOptions) => {
  return useRequest(serviceCreateLecture, { manual: true, ...options });
};

interface IBodyQuizz {
  title: string;
  ordinalNumber: number;
  description: string;
  sectionId: string;
}
const serviceCreateQuizz = async (body: IBodyQuizz) => {
  return privateRequest(request.post, API_PATH.QUIZZ, { data: body });
};

export const useCreateQuizz = (options?: IOptions) => {
  return useRequest(serviceCreateQuizz, { manual: true, ...options });
};

export const serviceUploadFile = (file: any) => {
  const formData = new FormData();

  formData.append('file', file);

  return privateRequest(request.post, API_PATH.UPLOAD_FILE, {
    data: formData,
  });
};

export const useUploadFile = (options?: IOptions) => {
  return useRequest(serviceUploadFile, {
    manual: true,
    ...options,
  });
};
export const uploadMultipleFiles = (file1: any, file2: any) => {
  return Promise.all([serviceUploadFile(file1), serviceUploadFile(file2)]);
};
export const useUploadMultipleFiles = (options?: IOptions) => {
  return useRequest(
    (file1: any, file2: any) => uploadMultipleFiles(file1, file2),
    {
      manual: true,
      ...options,
    }
  );
};
interface answers {
  answer: string;
  isCorrect: boolean;
  explain: string;
}

interface IBodyQuestionQuizz {
  question: string;
  ordinalNumber: number;
  answers: answers[];
}

interface answersEdit {
  answer: string;
  isCorrect: boolean;
  explain: string;
  id: string;
}

interface IBodyEditQuestionQuizz {
  question: string;
  ordinalNumber: number;
  answers: answersEdit[];
}

const servicCreateQuestionQuizz = async (
  body: IBodyQuestionQuizz,
  id: string
) => {
  return privateRequest(request.post, `${API_PATH.QUESTION_QUIZZ(id)}`, {
    data: body,
  });
};

export const useCreateQuestionQuizz = (options?: IOptions) => {
  return useRequest(servicCreateQuestionQuizz, { manual: true, ...options });
};

const servicEditQuestionQuizz = async (
  body: IBodyEditQuestionQuizz,
  id: string
) => {
  return privateRequest(request.put, `${API_PATH.EDIT_QUESTION_QUIZZ(id)}`, {
    data: body,
  });
};

export const useEditQuestionQuizz = (options?: IOptions) => {
  return useRequest(servicEditQuestionQuizz, { manual: true, ...options });
};
