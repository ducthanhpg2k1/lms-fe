import IconDate from '@/components/UI/Icons/IconDate';
import IconTime from '@/components/UI/Icons/IconTime';
import RateStar from '@/components/UI/RateStar';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const CardCourse = () => {
  return (
    <div className="rounded transition-all cursor-pointer duration-300 hover:opacity-80">
      <Image
        src={'/images/img-default.png'}
        width={302}
        height={200}
        alt=""
        className="w-full h-[200px] rounded rounded-b-none"
      />
      <div className="py-4 px-3 rounded bg-white/10 flex flex-col gap-[10px]">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconDate />
            <Text type="font-12-500">11 Lessons</Text>
          </div>

          <div className="w-[1px] h-3 bg-white" />

          <div className="flex items-center gap-1">
            <IconTime />
            <Text type="font-12-500">16 hours</Text>
          </div>
        </div>
        <Text type="font-16-500" className="line-clamp-2 capitalize">
          Become a Certified Web Developer HTML, CSS and JavaScript
        </Text>
        <div className="flex flex-col gap-[14px] border-b border-b-white/5 pb-4">
          <div className="flex items-center gap-2">
            <Text type="font-14-500">4.1</Text>
            <RateStar rate={4} />
            <Text type="font-14-500">(230)</Text>
          </div>
          <Text type="font-14-400">By: Kathryn Murphy</Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="py-[2px] px-2 flex justify-center items-center border-1 border-orange/50 bg-orange/10 rounded-full">
            <Text type="font-16-600" className="text-orange">
              $89.45
            </Text>
          </div>
          <Button variant="light" radius="full">
            <div className="flex items-center gap-1">
              <Text type="font-14-500" className="text-white">
                Enroll Course
              </Text>
              <Image
                src={'/icons/ic-arrow-right-up-line.svg'}
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
export default CardCourse;
