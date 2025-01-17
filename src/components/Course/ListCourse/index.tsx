import IconFilter from '@/components/UI/Icons/IconFilter';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import CardCourse from './CardCourse';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';

const CATEGORIES = [
  { key: 'business', label: 'Business' },
  { key: 'finance', label: 'Finance' },
  { key: 'it', label: 'IT & Software' },
  { key: 'personal', label: 'Personal Development' },
];

const INSTRUCTORS = [
  { key: 'pavan', label: 'Pavan R.' },
  { key: '2', label: 'Lucas' },
  { key: '3', label: 'Davis' },
  { key: '4', label: 'Leona' },
];

const PRICES = [
  { key: 'paid', label: 'Paid' },
  { key: 'free', label: 'Free' },
];

const SORT_BY = [
  { key: 'most_relevant', label: 'Most Relevant' },
  { key: 'most_reviewer', label: 'Most Reviewer' },
  { key: 'highest_rated', label: 'Highest Rated' },
  { key: 'newest', label: 'Newest' },
];

const ListCourse = () => {
  const [lengthCourse, setLengthCourse] = useState(12);
  const loadMore = () => {
    setLengthCourse(() => lengthCourse + 8);
  };
  return (
    <div className="flex flex-col gap-[26px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="py-2 min-w-[98px] px-[10px] cursor-pointer flex items-center gap-1 bg-main/10 border-1 border-main rounded">
            <IconFilter />
            <Text className="text-main" type="font-14-500">
              All Filter
            </Text>
          </div>
          <SelectCustom
            placeholder="Categories"
            className="min-w-[120px]"
            options={CATEGORIES}
          />
          <SelectCustom
            placeholder="Instructor"
            className="min-w-[150px]"
            options={INSTRUCTORS}
          />
          <SelectCustom
            placeholder="Price"
            className="min-w-[80px]"
            options={PRICES}
          />
        </div>
        <div className="flex items-center gap-2">
          <Text type="font-14-500" className="text-black-7 w-[100px]">
            Sort by
          </Text>
          <SelectCustom
            placeholder="Default"
            className="min-w-[40px]"
            options={SORT_BY}
          />
        </div>
      </div>
      <div className={clsx('grid grid-cols-1 gap-6', {})}>
        <div className={clsx('flex flex-col items-center gap-9', {})}>
          <div className={clsx('grid grid-cols-4 gap-6', {})}>
            {Array.from({ length: lengthCourse }).map((_, key) => {
              return <CardCourse key={key} />;
            })}
          </div>
          <Button
            variant="light"
            radius="full"
            className="hover:!bg-main/15"
            onClick={loadMore}
          >
            <div className="flex items-center gap-[2px]">
              <Text type="font-14-500" className="text-main">
                See More
              </Text>
              <Image
                src={'/icons/ic-arrow-drop-right-line.svg'}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ListCourse;
