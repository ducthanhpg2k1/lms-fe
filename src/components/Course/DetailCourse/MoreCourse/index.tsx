import Text from '@/components/UI/Text';
import Comment from './Comment';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import CardCourse from '@/components/CourseSearch/ListCourse/CardCourse';

const MoreCourse = () => {
  return (
    <div className="flex flex-col gap-10 pb-10 border-b-1 border-b-black-10">
      <div className="flex flex-col gap-6">
        <Text className="text-white" type="font-20-600">
          More Course By Theresa Edin
        </Text>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, key) => {
            return <CardCourse index={key} key={key} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Text className="text-white" type="font-20-600">
          Comment
        </Text>
        <div className="flex flex-col gap-6">
          {Array.from({ length: 3 }).map((_, key) => {
            return <Comment key={key} />;
          })}
          <Button
            variant="light"
            radius="full"
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
        <Button className="border-1 min-h-10 max-w-[185px] border-black-9 py-2 px-4 rounded bg-black-10">
          <Text className="capitalize text-white" type="font-16-500">
            Login to comment
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default MoreCourse;
