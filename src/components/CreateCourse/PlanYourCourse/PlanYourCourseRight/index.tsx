import IntendedLearners from './IntendedLearners';

const PlanYourCourseRight = ({ activePlan }: { activePlan: number }) => {
  return (
    <div className="bg-[#181F25] py-6 px-8 flex flex-col rounded shadow-lg w-full min-h-[600px] gap-8">
      {activePlan === 1 && <IntendedLearners />}
    </div>
  );
};
export default PlanYourCourseRight;
