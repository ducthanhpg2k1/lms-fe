import Comment from '@/components/Course/DetailCourse/MoreCourse/Comment';
import IconSearch from '@/components/UI/Icons/IconSearch';
import InputText from '@/components/UI/InputText';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { Button, Progress } from '@nextui-org/react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import CommentReviews from './CommentReviews';
import Image from 'next/image';
const DATA_REVIEWS = [
  {
    id: 1,
    rate: 5,
    total: '1.078',
    value: 80,
  },
  {
    id: 2,
    rate: 4,
    total: '200',
    value: 40,
  },
  {
    id: 3,
    rate: 3,
    total: '60',
    value: 20,
  },
  {
    id: 4,
    rate: 2,
    total: '30',
    value: 10,
  },
  {
    id: 5,
    rate: 1,
    total: '5',
    value: 4,
  },
];
const Reviews = () => {
  return (
    <div className="pt-[63px] flex flex-col gap-8 px-[80px]">
      <Text type="font-20-600">Student feedback</Text>
      <div className="flex gap-3 items-start">
        <div className="w-[100px]">
          <Text type="font-20-600">4.6</Text>
          <Rater total={5} rating={4} />
        </div>
        <div className="flex flex-col gap-2 w-full">
          {DATA_REVIEWS?.map((item) => {
            return (
              <div key={item?.id} className="flex items-center gap-2 w-full">
                <Progress
                  className="max-w-[400px]"
                  classNames={{
                    indicator: 'bg-main',
                    track: 'max-h-[8px]',
                  }}
                  value={item?.value}
                />
                <Rater total={5} rating={item?.rate} />
                <div className="flex justify-end items-end w-[50px]">
                  <Text type="font-16-500" className="text-white">
                    {item?.total}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Text type="font-20-600">Reviews</Text>

      <div className="flex items-center gap-4">
        <InputText
          className="max-w-[470px]"
          placeholder="Search"
          isLesson
          startContent={<IconSearch />}
        />
        <SelectCustom
          isLesson
          options={[]}
          className="max-w-[117px]"
          placeholder="All Ratings"
        />
      </div>
      <div className="flex flex-col gap-6">
        {Array.from({ length: 3 }).map((_, key) => {
          return <CommentReviews key={key} />;
        })}
        <Button
          variant="light"
          radius="full"
          size="sm"
          className="hover:bg-main/20 w-max"
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
  );
};
export default Reviews;
