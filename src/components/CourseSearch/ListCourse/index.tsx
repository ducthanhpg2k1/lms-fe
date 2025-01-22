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
import { useEffect, useRef, useState } from 'react';
import { useGetListCourse } from '@/components/Course/ListCourse/service';
import { useGetCategories, useGetPrices } from '@/services/filter.service';
import { useSearchParams } from 'next/navigation';

enum TAB_VIEW {
  GRID = 'grid',
  LIST = 'list',
}
const SORT_BY = [
  { key: 'createdAt desc', label: 'Newest' },
  { key: 'createdAt asc', label: 'Oldest' },
  // { key: 'a-z', label: 'A-Z' },
  // { key: 'z-a', label: 'Z-A' },
];
const initParams = {
  ratings: '',
  langs: [],
  features: [],
  topics: [],
  levels: [],
  prices: [],
};

const ListCourse = () => {
  const router = useRouter();
  const [tab, setTab] = useState(TAB_VIEW?.GRID);
  const [pageSize, setPageSize] = useState(3);
  const [sort, setSort] = useState();
  const searchParams = useSearchParams();
  const [params, setParams] = useState(initParams);

  const search = searchParams.get('keySearch');
  const { dataCourses, loadMore, noMore, reload } = useGetListCourse({
    pageSize,
    order: sort,
    prices: params?.prices?.join(','),
    ratings: params?.ratings,
    langs: params?.langs?.join(','),
    features: params?.features?.join(','),
    topics: params?.topics?.join(','),
    levels: params?.levels?.join(','),
    search,
  });

  console.log('searchhhh', search);

  // const loadMore = () => {
  //   setLengthCourse(() => lengthCourse + 8);
  // };

  const onChangeTab = (tab: any) => {
    setTab(tab);
  };

  useEffect(() => {
    reload();
  }, [sort, search, params]);

  const clearFilter = () => {
    setParams(initParams);
  };

  return (
    <div className="flex flex-col gap-8 pt-[36px] px-10">
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
                  Filters
                </Text>
              </div>
            </Button>
            <SelectCustom
              placeholder="Sort by type"
              className="w-full"
              options={SORT_BY}
              value={sort}
              onChange={(value: any) => {
                console.log('valueeee', value.target.value);
                setSort(value.target.value);
              }}
            />
          </div>
          <FilterCourse setParams={setParams} params={params} />
        </div>

        <div className={clsx('flex flex-col col-span-6 gap-9', {})}>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <Button
                radius="full"
                className="w-max hover:bg-main/20"
                variant="light"
                onClick={clearFilter}
              >
                <div className="flex items-center gap-2">
                  <IconDeleteMain />
                  <Text type="font-16-700" className="text-main">
                    Clear filter
                  </Text>
                </div>
              </Button>
              <div className="flex items-center gap-4">
                {dataCourses?.length > 0 && (
                  <Text type="font-20-600" className="text-white">
                    {dataCourses?.length} results
                  </Text>
                )}
                {/* <Tabs
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
                </Tabs> */}
              </div>
            </div>

            <div className={clsx('grid grid-cols-3 gap-6', {})}>
              {dataCourses.map((item: any, key: number) => {
                return <CardCourse item={item} key={key} />;
              })}
            </div>
          </div>

          {!noMore && (
            <Button
              variant="light"
              radius="full"
              className="hover:bg-main/20 w-max"
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
          )}
        </div>
      </div>
    </div>
  );
};
export default ListCourse;
