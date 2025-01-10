import { Avatar, Button } from '@nextui-org/react';
import Text from '../UI/Text';
import ListSection from './ListSection';
import { X } from '@phosphor-icons/react';
import VideoSection from './VideoSection';

const Lesson = () => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-7">
        <VideoSection />
      </div>
      <div className="col-span-3 w-full h-[calc(100dvh-85px)] overflow-auto overflow-x-hidden bg-[#0F141A]">
        <div className="flex justify-between py-6 px-4 items-center border-l-1 border-b-1 border-b-[#D9D9D91A] border-l-[#D9D9D91A] sticky top-0 z-[1000] bg-gray">
          <div className="flex items-center gap-2">
            <Avatar src="/images/avatar-user.png" className="w-12 h-12" />
            <div className="flex flex-col gap-[2px]">
              <Text type="text-18-600" className="text-white">
                Set certificate expiration date
              </Text>
              <Text type="font-14-400" className="text-white">
                Set certificate expiration date
              </Text>
            </div>
          </div>
          <Button variant="light" size="sm" isIconOnly radius="full">
            <X color="#fff" />
          </Button>
        </div>
        <ListSection />
      </div>
    </div>
  );
};
export default Lesson;
