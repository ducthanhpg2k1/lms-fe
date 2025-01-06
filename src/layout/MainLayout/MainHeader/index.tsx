import InputText from '@/components/UI/InputText';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

const MainHeader = () => {
  return (
    <div className="w-full sticky top-0 border-b border-black-10 py-5">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <Image alt="logo" width={125} height={46} src={'/logo.png'} />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <InputText radius="sm" placeholder="Search" />
            <div className="border-1 border-gray-20 h-8" />
            <Button
              isIconOnly
              className="bg-gray-10 border-1 border-gray-10 rounded-[4px] w-10 h-10"
            >
              <Image
                src={'/icons/ic-brush.svg'}
                height={20}
                width={20}
                alt=""
              />
            </Button>
            <Button
              isIconOnly
              className="bg-gray-10 border-1 border-gray-10 rounded-[4px] w-10 h-10"
            >
              <Image src={'/icons/ic-user.svg'} height={20} width={20} alt="" />
            </Button>
            <Button
              isIconOnly
              className="bg-gray-10 border-1 border-gray-10 rounded-[4px] w-10 h-10"
            >
              <Image src={'/icons/ic-user.svg'} height={20} width={20} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
