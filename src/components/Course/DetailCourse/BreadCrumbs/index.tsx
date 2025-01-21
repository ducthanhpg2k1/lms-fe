import Text from '@/components/UI/Text';
import { ROUTE_PATH } from '@/utils/const';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const BreadCrumbs = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-1">
      <Button
        onClick={() => router.push(ROUTE_PATH.COURSE)}
        isIconOnly
        variant="light"
        size="md"
      >
        <Image src={'/icons/ic-home.svg'} width={24} height={24} alt="" />
      </Button>
      <Image
        src={'/images/img-arrow-right.png'}
        width={20}
        height={20}
        alt=""
      />
      <Text
        type="font-14-500"
        onClick={() => router.push(ROUTE_PATH.COURSE)}
        className="text-white hover:opacity-80 cursor-pointer"
      >
        Course
      </Text>

      <Image
        src={'/images/img-arrow-right.png'}
        width={20}
        height={20}
        alt=""
      />
      <Text type="font-14-500" className="text-main">
        Course details
      </Text>
    </div>
  );
};
export default BreadCrumbs;
