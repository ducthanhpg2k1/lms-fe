import HeaderPlanYourCourse from './HeaderPlanYourCourse';
import PlanYourCourseLeft from './PlanYourCourseLeft';
import PlanYourCourseRight from './PlanYourCourseRight';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TYPE_COURSE } from '@/utils/const';
import { useRouter } from 'next/router';
import { useEditCourse, useGetDetailCourse } from '../service';
import { toast } from '@/components/UI/Toast/toast';
import LoadingScreen from '@/components/UI/LoadingScreen';

const PlanYourCourse = () => {
  const [activePlan, setActivePlan] = useState(1);
  const router = useRouter();

  const { run: getDetailCourse, loading } = useGetDetailCourse({
    onSuccess: (res) => {
      reset({
        objectives: res?.data?.objectives?.map((item: any) => {
          return {
            name: item,
          };
        }),
        requirements: res?.data?.requirements?.map((item: any) => {
          return {
            name: item,
          };
        }),
        intenedLeaners: res?.data?.intenedLeaners?.map((item: any) => {
          return {
            name: item,
          };
        }),
        lang: res?.data?.lang,
        level: res?.data?.level,
        subtitle: res?.data?.subtitle,
        title: res?.data?.title,
        description: res?.data?.description,
        topics: res?.data?.topics?.[0],
        sections: [
          {
            title: 'Section 1',
            introduction: 'introduction',
            curriculums: [
              {
                title: 'Lecture 1',
                introduction: 'introduction',
                type: TYPE_COURSE.LECTURE,
              },
            ],
          },
        ],
      });
    },
  });

  const { control, handleSubmit, reset, watch } = useForm<any>({
    defaultValues: {
      objectives: [{ name: '' }, { name: '' }, { name: '' }, { name: '' }],
      requirements: [{ name: '' }],
      intenedLeaners: [{ name: '' }],
      items: [{ type: '' }, { type: '' }, { type: '' }, { type: '' }],
      items1: [{ type: '' }],
      items2: [{ type: '' }],
    },
  });

  useEffect(() => {
    if (router.query.id) {
      getDetailCourse(router.query.id as string);
    }
  }, [router.query.id]);

  const requestEditCourse = useEditCourse({
    onSuccess: (res: any) => {
      toast.success(res?.message);
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  const onSubmit = (values: any) => {
    const body: any = {
      objectives: values?.objectives?.map((item: any) => item?.name),
      requirements: values?.requirements?.map((item: any) => item?.name),
      intenedLeaners: values?.intenedLeaners?.map((item: any) => item?.name),
      description: values?.description,
      subtitle: values?.subtitle,
      title: values?.title,
      topics: [values.topics],
      lang: values.lang,
      level: values.level,
    };
    if (!values.topics) {
      delete body.topics;
    }
    const filteredBody = Object.fromEntries(
      Object.entries(body).filter(([_, value]) => {
        return (
          value !== undefined &&
          value !== null &&
          (Array.isArray(value) ? value.length > 0 : value !== '')
        );
      })
    );
    requestEditCourse.run(filteredBody, router.query.id as string);
  };
  return (
    <LoadingScreen isLoading={loading}>
      <form>
        <div className="bg-primary w-screen h-[100dvh] overflow-auto pb-10">
          <HeaderPlanYourCourse
            loading={requestEditCourse?.loading}
            handleSubmitForm={handleSubmit(onSubmit)}
          />
          <div className="w-10/12 mx-auto pt-10">
            <div className="grid grid-cols-10 gap-12">
              <div className="col-span-2">
                <PlanYourCourseLeft
                  activePlan={activePlan}
                  handleActivePlan={(plan) => setActivePlan(plan)}
                />
              </div>
              <div className="col-span-8">
                <PlanYourCourseRight
                  handleSubmit={handleSubmit}
                  idDetail={router.query.id as string}
                  control={control}
                  activePlan={activePlan}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </LoadingScreen>
  );
};
export default PlanYourCourse;
