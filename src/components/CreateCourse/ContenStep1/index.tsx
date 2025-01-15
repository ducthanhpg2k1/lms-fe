import Text from '@/components/UI/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

const DATA_CONTENT = [
  {
    id: 1,
    label: 'Courses',
    img: '/images/img-courses.png',
    description:
      'Create rich learning experiences with the help of video lectures, quizzes, programming exercises, and more.',
  },
  {
    id: 2,
    label: 'Practice Tests',
    img: '/images/img-practice.png',
    description:
      'Help students prepare for exams by providing practice questions.',
  },
];

const ContenStep1 = () => {
  const [activeCard, setActiveCard] = useState(1);
  return (
    <div className="flex items-center flex-col gap-10">
      <Text className="text-white" type="font-32-700">
        First, let's find out what type of course you're making.
      </Text>
      <div className="flex items-center gap-6">
        {DATA_CONTENT?.map((item) => {
          return (
            <div
              key={item?.id}
              onClick={() => setActiveCard(item?.id)}
              className={clsx(
                'py-5 px-4 w-[302px] cursor-pointer transition-all items-center text-center min-h-[214px] bg-white/10 border-1 border-white/10 rounded flex flex-col gap-3',
                {
                  ['bg-[#02a6c233] border-[#02A6C2]']: activeCard == item?.id,
                }
              )}
            >
              <Image alt="" width={48} height={48} src={item?.img} />
              <Text type="font-20-700" className="text-white">
                {item?.label}
              </Text>
              <Text type="font-16-400" className="text-black-6">
                {item?.description}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContenStep1;
