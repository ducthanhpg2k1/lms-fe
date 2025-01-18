import {
  IconDicord,
  IconReadmi,
  IconTelegram,
  IconTwiter,
} from '@/components/UI/Icons/IconSocial';
import IconStudent from '@/components/UI/Icons/IconStudent';
import IconVideo from '@/components/UI/Icons/IconVideo';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Rater from 'react-rater';

const Mentors = () => {
  return (
    <div className="flex flex-col gap-6 border-b-1 border-b-black-10 pb-10">
      <Text className="text-white" type="font-20-600">
        Mentors (KOLs)
      </Text>
      <div className="flex items-center gap-5">
        <Image
          alt=""
          width={240}
          height={202}
          className="rounded w-[260px] h-full"
          src={'/images/img-default.png'}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Text className="text-white" type="font-16-600">
              Theresa Edin
            </Text>
            <div className="flex flex-col gap-3">
              <Text className="text-black-7" type="font-14-400">
                Professional Web Developer
              </Text>
              <div className="flex items-center gap-2">
                <Text type="font-14-400" className="text-white">
                  4.1
                </Text>
                <Rater total={5} rating={4} />
                <Text type="font-14-400" className="text-white">
                  251,330 Reviews
                </Text>
                <div className="w-[1px] h-5 bg-[#BFBFBF]" />
                <div className="flex items-center gap-1">
                  <IconStudent />
                  <Text type="font-14-400" className="text-white">
                    229 Students
                  </Text>
                </div>
                <div className="w-[1px] h-5 bg-[#BFBFBF]" />
                <div className="flex items-center gap-1">
                  <IconVideo />
                  <Text type="font-14-400" className="text-white">
                    35 Course
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  gap-4">
            <Text className="text-white" type="font-14-400">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium totam rem aperiam.
            </Text>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 py-2 px-[5px] cursor-pointer hover:opacity-90 bg-white rounded-full flex justify-center items-center">
                <IconTwiter />
              </div>
              <div className="w-7 h-7 py-2 px-[5px] cursor-pointer hover:opacity-90 bg-white rounded-full flex justify-center items-center">
                <IconTelegram />
              </div>
              <div className="w-7 h-7 py-2 px-[5px] cursor-pointer hover:opacity-90 bg-white rounded-full flex justify-center items-center">
                <IconDicord />
              </div>
              <div className="w-7 h-7 py-2 px-[5px] cursor-pointer hover:opacity-90 bg-white rounded-full flex justify-center items-center">
                <IconReadmi />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mentors;
