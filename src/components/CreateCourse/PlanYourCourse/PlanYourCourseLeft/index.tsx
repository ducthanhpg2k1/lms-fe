import Text from '@/components/UI/Text';
import { Radio, RadioGroup } from '@nextui-org/react';
import clsx from 'clsx';
import { useState } from 'react';

const DATA_CONTENT = [
  {
    id: 1,
    content: 'Intended learners',
  },
  {
    id: 2,
    content: 'Curriculum',
  },
  {
    id: 3,
    content: 'Course landing page',
  },
  {
    id: 4,
    content: 'Referral',
  },
];

const PlanYourCourseLeft = ({
  activePlan,
  handleActivePlan,
}: {
  handleActivePlan: (plan: number) => void;
  activePlan: number;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {DATA_CONTENT?.map((item) => {
        return (
          <div
            onClick={() => handleActivePlan(item?.id)}
            className={clsx(
              'flex items-center cursor-pointer border-l-4 transition-all  border-l-transparent gap-3 p-2',
              {
                ['!border-l-4 border-l-main bgActivePlan']:
                  item?.id === activePlan,
              }
            )}
          >
            <div className="w-5 h-5 rounded-full border-1 border-black-7" />
            <Text type="font-16-500" className="text-white">
              {item?.content}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
export default PlanYourCourseLeft;
