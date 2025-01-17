import Text from '@/components/UI/Text';
import CardCourse from './CardCourse';
import { Button, Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';
import FilterCourse from './FilterCourse';
import { useRouter } from 'next/router';
import IconShowFilter from '@/components/UI/Icons/IconShowFilter';
import SelectCustom from '@/components/UI/SelectCustom';
import IconDeleteMain from '@/components/UI/Icons/IconDeleteMain';
import IconGrid from '@/components/UI/Icons/IconGrid';
import IconList from '@/components/UI/Icons/IconList';
import { useState } from 'react';

enum TAB_VIEW {
  GRID = 'grid',
  LIST = 'list',
}
const SORT_BY = [
  { key: 'newest', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
  { key: 'a-z', label: 'A-Z' },
  { key: 'z-a', label: 'Z-A' },
];
const ListCourse = () => {
  const router = useRouter();
  const [tab, setTab] = useState(TAB_VIEW?.GRID);
  const [lengthCourse, setLengthCourse] = useState(12);
  const loadMore = () => {
    setLengthCourse(() => lengthCourse + 8);
  };

  const onChangeTab = (tab: any) => {
    setTab(tab);
  };
  return (
    <div className="flex flex-col gap-8 pt-[45px]">
      <Text
        type="font-32-700"
        className="text-white"
      >{`9,955 results for “${router.query.keySearch}”`}</Text>
      <div className={clsx('grid grid-cols-8 gap-6', {})}>
        <div className="col-span-2 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <Button className="min-w-[107px] border-1 py-[10px] px-2 bg-white/10 border-[#F0F0F01A] rounded">
              <div className="flex items-center gap-1">
                <IconShowFilter />
                <Text type="font-14-500" className="text-black-6">
                  Show Filter
                </Text>
              </div>
            </Button>
            <SelectCustom
              placeholder="Sort by type"
              className="w-full"
              options={SORT_BY}
            />
          </div>
          <FilterCourse />
        </div>

        <div
          className={clsx('flex flex-col col-span-6 items-center gap-9', {})}
        >
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <Button
                radius="full"
                className="w-max hover:bg-main/20"
                variant="light"
              >
                <div className="flex items-center gap-2">
                  <IconDeleteMain />
                  <Text type="font-16-700" className="text-main">
                    Clear filter
                  </Text>
                </div>
              </Button>
              <div className="flex items-center gap-4">
                <Text type="font-20-600" className="text-white">
                  9,955 results
                </Text>
                <Tabs
                  onSelectionChange={onChangeTab}
                  classNames={{
                    tab: 'w-[30px]',
                    cursor: '!bg-transparent',
                  }}
                  variant={'light'}
                >
                  <Tab
                    key="grid"
                    title={<IconGrid active={tab === TAB_VIEW.GRID} />}
                  />
                  <Tab
                    key="list"
                    title={<IconList active={tab === TAB_VIEW.LIST} />}
                  />
                </Tabs>
              </div>
            </div>

            <div className={clsx('grid grid-cols-3 gap-6', {})}>
              {Array.from({ length: lengthCourse }).map((_, key) => {
                return <CardCourse index={key} key={key} />;
              })}
            </div>
          </div>

          <Button
            variant="light"
            radius="full"
            className="hover:bg-main/20"
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
