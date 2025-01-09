import IconFilter from '@/components/UI/Icons/IconFilter';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import CardCourse from './CardCourse';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';

const ListCourse = () => {
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
            options={[]}
          />
          <SelectCustom
            placeholder="Instructor"
            className="min-w-[100px]"
            options={[]}
          />
          <SelectCustom
            placeholder="Price"
            className="min-w-[80px]"
            options={[]}
          />
        </div>
        <div className="flex items-center gap-2">
          <Text type="font-14-500" className="text-black-7 w-[100px]">
            Sort by
          </Text>
          <SelectCustom
            placeholder="Default"
            className="min-w-[40px]"
            options={[]}
          />
        </div>
      </div>
      <div className={clsx('grid grid-cols-1 gap-6', {})}>
        <div className={clsx('flex flex-col items-center gap-9', {})}>
          <div className={clsx('grid grid-cols-4 gap-6', {})}>
            {Array.from({ length: 12 }).map((_, key) => {
              return <CardCourse key={key} />;
            })}
          </div>
          <Button variant="light" radius="full" className="hover:!bg-main/15">
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
