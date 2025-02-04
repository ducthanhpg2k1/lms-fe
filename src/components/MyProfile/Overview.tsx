import React from 'react';
import Image from 'next/image';
import Text from '../UI/Text';
import { Button } from '@nextui-org/react';

const data = {
  avatar:
    'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg',
  fullname: 'Cody Fisher',
  email: 'deanna.curtis@example.com',
  verify: true,
};

const Overview = () => {
  return (
    <div className="p-[20px] bg-[#181F25] rounded-[4px] w-full h-fit max-w-[460px] flex flex-col gap-[16px]">
      <div className="flex flex-col justify-center items-center gap-[4px]">
        <div className="w-[64px] h-[64px] rounded-full relative overflow-hidden">
          <Image
            className="object-cover w-full h-full"
            alt="avatar"
            fill
            src={data.avatar}
          />
        </div>
        <Text type="font-20-700">{data.fullname}</Text>
        <div className="opacity-50">{data.email}</div>
      </div>

      <Divided />

      <div className="flex justify-between items-center">
        <Text type="font-16-700">Verified Account</Text>
        <Image src={'/icons/ic-kyc.svg'} alt="kyc" width={24} height={24} />
      </div>

      <Divided />

      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between items-center">
          <Text type="font-16-600">Customers</Text>
          <div className="px-[8px] py-[2px] bg-[#2F353B] w-fit rounded-full text-[12px] leading-normal font-semibold">
            100
          </div>
        </div>
        <div className="flex gap-[2px] w-full ease-in-out duration-200">
          <div className="flex flex-col gap-[8px]" style={{ width: '20%' }}>
            <div className="h-[12px] w-full bg-[#02A6C2] rounded-l-full" />
            <div className="opacity-50">F1: 20</div>
          </div>
          <div className="flex flex-col gap-[8px]" style={{ width: '30%' }}>
            <div className="h-[12px] w-full bg-[#35B6CC]" />
            <div className="opacity-50">F2: 30</div>
          </div>
          <div className="flex flex-col gap-[8px]" style={{ width: '40%' }}>
            <div className="h-[12px] w-full bg-[#79BEB6]" />
            <div className="opacity-50">F4: 40</div>
          </div>
          <div className="flex flex-col gap-[8px]" style={{ width: '10%' }}>
            <div className="h-[12px] w-full bg-[#B4D4D9] rounded-r-full" />
            <div className="opacity-50">ø: 10</div>
          </div>
        </div>
      </div>

      <Divided />

      <div className="flex flex-col gap-[16px]">
        <div className="text-[16px] font-semibold w-full text-ellipsis overflow-hidden whitespace-nowrap">
          Referral link: https://what.exchange/sign-up?upline=supertree
        </div>

        <Button className="rounded-[4px] font-bold text-base text-[#02A6C2] bg-[#16343B] h-[44px]">
          Copy Address
        </Button>
      </div>
    </div>
  );
};

const Divided = () => <div className="w-full h-[1px] opacity-10 bg-[#fff]" />;

export default Overview;
