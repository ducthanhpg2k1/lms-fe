import React, { useEffect, useState } from 'react';
import IconFilter from '../UI/Icons/IconFilter';
import Text from '@/components/UI/Text';
import SelectCustom from '../UI/SelectCustom';
import { useGetCategories } from '../CreateCourse/service';
import { useGetPrices } from '@/services/filter.service';
import CourseCard from './CourseCard';
import { useGetListUserCourse } from './service';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import NoData from '../ListCourse/NoData';

const SORT_BY = [
  { key: 'createdAt desc', label: 'Newest' },
  { key: 'createdAt asc', label: 'Oldest' },
];

export default function ListCourses() {
  const [pageSize, setPageSize] = useState(4);
  const [sort, setSort] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const { dataCategories: categories } = useGetCategories();
  const { data: prices } = useGetPrices();
  const { list, loadMore, noMore, reload } = useGetListUserCourse({
    pageSize,
    order: sort,
    categories: category,
    prices: price,
  });

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

  useEffect(() => {
    reload();
  }, [sort, category, price]);

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

      <div className="grid grid-cols-4 gap-6">
        {list?.length > 0 && list.map((item) => (
          <CourseCard
            key={item.id}
            id={item?.course?.id}
            name={item?.course?.title}
            authorName={item?.course?.author?.walletAddress || ''}
            image={item?.course?.image}
            progress={item?.course?.progress || 0}
            rating={4}
          />
        ))}

      </div>
      {
        list?.length === 0 && (

          <NoData />
        )
      }

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
  );
}
