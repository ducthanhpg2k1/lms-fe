import { useGetCategories } from '@/components/CreateCourse/service';
import NoData from '@/components/ListCourse/NoData';
import IconFilter from '@/components/UI/Icons/IconFilter';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { useGetPrices } from '@/services/filter.service';
import { useEffect, useState } from 'react';
import { useGetListWishList } from '../service';
import CardCourse from '@/components/CourseSearch/ListCourse/CardCourse';

const SORT_BY = [
  { key: 'createdAt desc', label: 'Newest' },
  { key: 'createdAt asc', label: 'Oldest' },
];
const Wishlist = () => {
  const { dataCategories: categories } = useGetCategories();
  const { data: prices } = useGetPrices();
  const [category, setCategory] = useState();
  const [sort, setSort] = useState();

  const [price, setPrice] = useState();

  const { list, reload } = useGetListWishList({
    pageSize: 50,
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

  console.log(list, 'list');

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
              setCategory(value.target.value);
            }}
          />

          <SelectCustom
            placeholder="Price"
            className="min-w-[80px]"
            options={mapPrices()}
            value={price}
            onChange={(value: any) => {
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
              setSort(value.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {list?.length > 0 &&
          list.map((item, key) => (
            <CardCourse isWishList item={item?.course} key={key} />
          ))}
      </div>
      {list?.length === 0 && <NoData />}
    </div>
  );
};
export default Wishlist;
