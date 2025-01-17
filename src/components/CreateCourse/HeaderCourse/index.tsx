import Text from '@/components/UI/Text';
import { ROUTE_PATH } from '@/utils/common';
import { Button, Progress } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HeaderCourse = ({ currentStep = 1 }: { currentStep: number }) => {
  const router = useRouter();
  return (
    <div>
      <div className="p-4 flex justify-between items-center">
        <Image
          onClick={() => router.push(ROUTE_PATH.HOME)}
          alt="logo"
          width={125}
          height={46}
          src={'/logo.png'}
        />
        <Text
          type="font-16-500"
          className="text-white"
        >{`Step ${currentStep} Of 4`}</Text>

        <Button
          className="py-2 px-4 bg-transparent border-1 border-black-5 rounded"
          onClick={() => router.push(ROUTE_PATH.LIST_COURSE)}
        >
          <Text type="font-16-500" className="text-white">
            Exit
          </Text>
        </Button>
      </div>
      <Progress
        maxValue={4}
        classNames={{
          indicator: 'bg-green-1',
          track: 'max-h-[8px]',
        }}
        className="w-full"
        value={currentStep}
      />
    </div>
  );
};
export default HeaderCourse;
