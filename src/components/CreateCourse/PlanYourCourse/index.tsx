import { Radio } from '@nextui-org/react';
import HeaderPlanYourCourse from './HeaderPlanYourCourse';
import PlanYourCourseLeft from './PlanYourCourseLeft';
import clsx from 'clsx';
import PlanYourCourseRight from './PlanYourCourseRight';
import { useState } from 'react';

const PlanYourCourse = () => {
  const [activePlan, setActivePlan] = useState(1);

  return (
    <div className="bg-primary w-screen h-[100dvh] overflow-auto">
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
            <PlanYourCourseRight activePlan={activePlan} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanYourCourse;
