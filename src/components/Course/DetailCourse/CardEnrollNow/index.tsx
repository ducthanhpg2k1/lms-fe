import IconDate from '@/components/UI/Icons/IconDate';
import IconTime from '@/components/UI/Icons/IconTime';
import RateStar from '@/components/UI/RateStar';
import Text from '@/components/UI/Text';
import { ROUTE_PATH } from '@/utils/const';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const DATA_NOTE = [
  '12 hours of on-demand video',
  'Exercises',
  '1 downloadable resource',
  'Mobile and TV access',
  'Timed access',
  'Certificate of completion',
];

const CardEnrollNow = () => {
  const router = useRouter();
  return (
    <div className="rounded transition-all cursor-pointer duration-300">
      <div className="relative flex justify-center items-center">
        <Image
          src={'/images/img-default.png'}
          width={302}
          height={200}
          alt=""
          className="w-full h-[200px] rounded rounded-b-none opacity-80"
        />
        <Image
          src={'/images/img-youtube.png'}
          width={64}
          height={64}
          alt=""
          className="absolute"
        />
      </div>

      <div className="p-4 rounded bg-white/10 flex flex-col gap-[10px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="py-[2px] px-2 flex justify-center items-center border-1 border-orange/50 bg-orange/10 rounded-full">
                <Text type="font-16-600" className="text-orange">
                  $89.45
                </Text>
              </div>
              <Text type="font-14-400" className="text-black-6 line-through">
                $ 149.00
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
          <Button
            onClick={() => router.push(ROUTE_PATH.LESSON)}
            className="bg-main min-h-[40px] rounded"
          >
            <Text className="text-white" type="font-16-600">
              Enroll Now
            </Text>
          </Button>
          <div className="flex flex-col gap-2">
            <Text className="text-white" type="font-18-600">
              This course includes
            </Text>
            <div className="flex flex-col gap-1">
              {DATA_NOTE?.map((item) => {
                return (
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-black-6 rounded-full" />
                    <Text className="text-black-6" type="font-16-400">
                      {item}
                    </Text>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardEnrollNow;
