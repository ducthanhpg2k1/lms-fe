import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const DATA_SKILL = [
  'Design',
  'UX',
  'Java',
  'SEO',
  'Python',
  'Blockchain',
  'Digital Media',
];

const MainBanner = () => {
  return (
    <div className="w-full py-[40px] px-8 min-h-[410px] bg-[url('/images/bg-banner.png')] bg-center bg-no-repeat bg-[length:100%_100%]">
      <div className="flex flex-col gap-[50px] w-6/12">
        <div className="flex items-center gap-1">
          <Button isIconOnly variant="light" size="md">
            <Image src={'/icons/ic-home.svg'} width={24} height={24} alt="" />
          </Button>
          <Image
            src={'/images/img-arrow-right.png'}
            width={20}
            height={20}
            alt=""
          />
          <Text type="font-14-500" className="text-white">
            Course
          </Text>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-2">
            <Text type="font-32-700" className="text-white">
              Web Development Courses
            </Text>
            <Text type="font-16-400" className="text-white">
              With one of our online web development courses, you can explore
              different areas of this in-demand field.
            </Text>
          </div>
          <div className="flex flex-col gap-3">
            <Text type="font-16-400" className="text-white">
              Topics related to Web Development
            </Text>
            <div className="flex items-center gap-3">
              {DATA_SKILL?.map((item) => {
                return (
                  <div className="rounded-full bg-white/10 border-1 border-white/10 py-1 px-3 flex justify-center items-center">
                    <Text type="font-14-400" className="text-black-7">
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

export default MainBanner;
