import IconArrowDown from '@/components/UI/Icons/IconArrowDown';
import IconArrowLeft from '@/components/UI/Icons/IconArrowLeft';
import IconDots from '@/components/UI/Icons/IconDots';
import ProgressCircle from '@/components/UI/ProgressCircle';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

const LessonLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <div className="w-screen bg-primary h-screen overflow-auto overflow-x-hidden flex flex-col relative">
      <div className="flex py-6 px-4 border-b-1 border-b-black-9 justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Button
              onClick={() => router.back()}
              isIconOnly
              radius="full"
              size="md"
              variant="light"
            >
              <IconArrowLeft />
            </Button>
            <Text type="font-16-500" className="text-white">
              Home
            </Text>
          </div>
          <div className="w-[1px] h-6 bg-black-6" />
          <Text type="font-16-500" className="text-white">
            AWS Certified Solution Architect by the end of 2025
          </Text>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 cursor-pointer">
            <ProgressCircle value={20} />
            <Text type="font-16-500" className="text-white">
              Your Progress
            </Text>
            <IconArrowDown />
          </div>
          <Button
            className="rounded w-[82px] bg-transparent border-1 border-black-5"
            size="lg"
          >
            <div className="flex items-center gap-1">
              <Text type="font-16-500" className="text-white">
                Share
              </Text>
              <IconArrowDown />
            </div>
          </Button>
          <Button
            isIconOnly
            className="rounded bg-transparent border-1 border-black-5"
            size="lg"
          >
            <IconDots />
          </Button>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
export default LessonLayout;
