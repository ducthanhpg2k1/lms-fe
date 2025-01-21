import IconFilter from '@/components/UI/Icons/IconFilter';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import CardCourse from './CardCourse';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useGetListCourse } from './service';
import { useGetCategories, useGetPrices } from '@/services/filter.service';

export const CATEGORIES = [
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
  { key: 'PAID', label: 'Paid' },
  { key: 'FREE', label: 'Free' },
];

const SORT_BY = [
  // { key: 'most_relevant', label: 'Most Relevant' },
  // { key: 'most_reviewer', label: 'Most Reviewer' },
  // { key: 'highest_rated', label: 'Highest Rated' },
  { key: 'createdAt desc', label: 'Newest' },
  { key: 'createdAt asc', label: 'Oldest' },
];

const ListCourse = () => {
  const [pageSize, setPageSize] = useState(4);
  const [sort, setSort] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const { dataCourses, loadMore, noMore, reload } = useGetListCourse({
    pageSize,
    order: sort,
    categories: category,
    prices: price,
  });

  const { data: categories } = useGetCategories();
  const { data: prices } = useGetPrices();

  const mapCategories = () => {
    return (categories?.data || [])?.map((item: any) => {
      return {
        key: item.id,
        label: item.name,
      };
    });
  };

  const mapPrices = () => {
    return (prices?.data || [])?.map((item: any) => {
      return {
        key: item.key,
        label: item.label,
      };
    });
  };

  console.log('categories', categories);

  useEffect(() => {
    reload();
  }, [sort, category, price]);
  // console.log('dataCourses', dataCourses, noMore);

  return (
    <div className="flex flex-col gap-[26px] px-10">
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
            options={mapCategories()}
            value={category}
            onChange={(value: any) => {
              console.log('valueeee', value.target.value);
              setCategory(value.target.value);
            }}
          />
          {/* <SelectCustom
            placeholder="Instructor"
            className="min-w-[150px]"
            options={INSTRUCTORS}
          /> */}
          <SelectCustom
            placeholder="Price"
            className="min-w-[80px]"
            options={mapPrices()}
            value={price}
            onChange={(value: any) => {
              console.log('valueeee', value.target.value);
              setPrice(value.target.value);
            }}
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
            value={sort}
            onChange={(value: any) => {
              console.log('valueeee', value.target.value);
              setSort(value.target.value);
            }}
          />
        </div>
      </div>
      <div className={clsx('grid grid-cols-1 gap-6', {})}>
        <div className={clsx('flex flex-col items-center gap-9', {})}>
          <div className={clsx('grid grid-cols-4 gap-6 w-full', {})}>
            {dataCourses.map((item: any, key: number) => {
              return <CardCourse item={item} key={key} />;
            })}
          </div>
          {!noMore && (
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
          )}
        </div>
      </div>
    </div>
  );
};
export default ListCourse;
