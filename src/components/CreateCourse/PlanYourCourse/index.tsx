import { Radio } from '@nextui-org/react';
import HeaderPlanYourCourse from './HeaderPlanYourCourse';
import PlanYourCourseLeft from './PlanYourCourseLeft';
import clsx from 'clsx';
import PlanYourCourseRight from './PlanYourCourseRight';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const PlanYourCourse = () => {
  const [activePlan, setActivePlan] = useState(1);
  const { control } = useForm<any>({
    defaultValues: {
      items: [{ type: '' }, { type: '' }, { type: '' }, { type: '' }],
      items1: [{ type: '' }],
      items2: [{ type: '' }],
      sections: [
        {
          title: 'Section 1',
          introduction: 'introduction',
          curriculums: [{ title: 'Lecture 1', introduction: 'introduction' }],
        },
      ],
    },
  });

  return (
    <form>
      <div className="bg-primary w-screen h-[100dvh] overflow-auto pb-10">
        <HeaderPlanYourCourse />
        <div className="w-10/12 mx-auto pt-10">
          <div className="grid grid-cols-10 gap-12">
            <div className="col-span-2">
              <PlanYourCourseLeft
                activePlan={activePlan}
                handleActivePlan={(plan) => setActivePlan(plan)}
              />
            </div>
            <div className="col-span-8">
              <PlanYourCourseRight control={control} activePlan={activePlan} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default PlanYourCourse;
