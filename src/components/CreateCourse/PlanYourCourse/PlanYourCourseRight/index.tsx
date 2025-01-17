import { Control } from 'react-hook-form';
import IntendedLearners from './IntendedLearners';
import Curriculum from './Curriculum';
import dynamic from 'next/dynamic';
import Referral from './Referral';
const CourseLandingPage = dynamic(() => import('./CourseLandingPage'), {
  ssr: false,
});

const PlanYourCourseRight = ({
  activePlan,
  control,
}: {
  control: Control;
  activePlan: number;
}) => {
  return (
    <div className="bg-[#181F25] py-6 px-8 flex flex-col rounded shadow-lg w-full min-h-[600px] gap-8">
      {activePlan === 1 && <IntendedLearners control={control} />}
      {activePlan === 2 && <Curriculum control={control} />}
      {activePlan === 3 && <CourseLandingPage control={control} />}
      {activePlan === 4 && <Referral control={control} />}
    </div>
  );
};
export default PlanYourCourseRight;
