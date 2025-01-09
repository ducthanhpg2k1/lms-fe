import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="flex flex-col gap-6 border-b-1 border-b-black-10 pb-10">
      <Text className="text-white" type="font-20-600">
        About This Course
      </Text>
      <Text className="text-white" type="font-14-400">
        Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod
        tempor inc idid unt ut labore et dolore magna aliqua enim ad minim
        veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo
        consequat duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur enim ipsam.  Excepteur sint
        occaecat cupidatat non proident sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium totam rem
        aperiam.
      </Text>
      <Button variant="light" radius="full" className="hover:bg-main/20 w-max">
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
  );
};
export default About;
