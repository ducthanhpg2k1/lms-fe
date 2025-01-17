import InputText from '@/components/UI/InputText';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import Image from 'next/image';
import Menubar from '../Menubar';
import ContentProfile from './ContentProfile';
import { useRouter } from 'next/router';
import { ROUTE_PATH } from '@/utils/common';
import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const MainHeader = () => {
  const router = useRouter();
  const [valueSearch, setValueSearch] = useState('');
  const handleChangeSearch = (e: any) => {
    setValueSearch(e.target.value);
  };

  const handleKeyUp = (event: any) => {
    if (event.key === 'Enter') {
      console.log('Enter key released');
      router.push({
        pathname: ROUTE_PATH.COURSE_SEARCH,
        query: { keySearch: valueSearch },
      });
    }
  };
  return (
    <div className="w-full sticky z-[1000] top-0 backdrop-blur-sm border-b border-black-10 py-5">
      <div className="max-w-[1440px]  mx-auto flex justify-between items-center">
        <Image
          onClick={() => router.push(ROUTE_PATH.HOME)}
          alt="logo"
          width={125}
          height={46}
          className="cursor-pointer"
          src={'/logo.png'}
        />

        <div className="flex items-center gap-4">
          <Menubar />

          <div className="flex items-center gap-4">
            <InputText
              onChange={handleChangeSearch}
              onKeyUp={handleKeyUp}
              startContent={
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src={'/images/img-search.png'}
                />
              }
              className="min-w-[470px]"
              radius="sm"
              placeholder="Search"
            />
            <div className="border-1 border-gray-20 h-8" />
            <Button
              isIconOnly
              className="bg-gray-10 border-1 border-gray-10 rounded-[4px] w-10 h-10"
            >
              <Image
                src={'/icons/ic-notification.svg'}
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
            <Popover
              classNames={{
                content:
                  'rounded border-1 p-0 !bg-gray border-[#F0F0F01A] shadow-dropdown',
              }}
              color="default"
              placement="bottom-end"
            >
              <PopoverTrigger>
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
              </PopoverTrigger>
              <PopoverContent>
                <ContentProfile />
              </PopoverContent>
            </Popover>
            <div className="w-full">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
