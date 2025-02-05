import React from 'react';
import Image from 'next/image';
import Text from '../UI/Text';
import { Button } from '@nextui-org/react';

const calculatePercentage = (value: number, total: number): number => {
  if (total === 0) {
    return 0;
  }
  return (value / total) * 100;
};

const Overview = ({
  data,
}: {
  data: {
    avatar: string;
    fullname: string;
    email: string;
    verify: boolean;
    customers: {
      total: number;
      f1: number;
      f2: number;
      f4: number;
      o: number;
    };
  };
}) => {
  return (
    <div className="p-[20px] bg-[#181F25] rounded-[4px] w-full h-fit max-w-[460px] flex flex-col gap-[12px]">
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

      <div className="flex justify-between items-center py-[8px]">
        <Text type="font-16-700">Verified Account</Text>
        <Image src={'/icons/ic-kyc.svg'} alt="kyc" width={24} height={24} />
      </div>

      <Divided />

      <div className="flex flex-col gap-[8px] py-[8px]">
        <div className="flex justify-between items-center">
          <Text type="font-16-600">Customers</Text>
          <div className="px-[8px] py-[2px] bg-[#2F353B] w-fit rounded-full text-[12px] leading-normal font-semibold">
            {data.customers.total}
          </div>
        </div>
        <div className="flex gap-[2px] w-full ease-in-out duration-200">
          <div
            className="flex flex-col gap-[8px]"
            style={{
              width: `${calculatePercentage(
                data.customers.f1,
                data.customers.total
              )}%`,
            }}
          >
            <div className="h-[12px] w-full bg-[#02A6C2] rounded-l-full" />
            <div className="opacity-50">F1: {data.customers.f1}</div>
          </div>
          <div
            className="flex flex-col gap-[8px]"
            style={{
              width: `${calculatePercentage(
                data.customers.f2,
                data.customers.total
              )}%`,
            }}
          >
            <div className="h-[12px] w-full bg-[#35B6CC]" />
            <div className="opacity-50">F2: {data.customers.f2}</div>
          </div>
          <div
            className="flex flex-col gap-[8px]"
            style={{
              width: `${calculatePercentage(
                data.customers.f4,
                data.customers.total
              )}%`,
            }}
          >
            <div className="h-[12px] w-full bg-[#79BEB6]" />
            <div className="opacity-50">F4: {data.customers.f4}</div>
          </div>
          <div
            className="flex flex-col gap-[8px]"
            style={{
              width: `${calculatePercentage(
                data.customers.o,
                data.customers.total
              )}%`,
            }}
          >
            <div className="h-[12px] w-full bg-[#B4D4D9] rounded-r-full" />
            <div className="opacity-50">ø: {data.customers.o}</div>
          </div>
        </div>
      </div>

      <Divided />

      <div className="flex flex-col gap-[16px] py-[8px]">
        <div className="text-[16px] font-semibold flex gap-[4px]">
          <span className="text-[16px] whitespace-nowrap">Referral link: </span>
          <span className="text-[16px] opacity-50 text-ellipsis overflow-hidden whitespace-nowrap">
            https://what.exchange/sign-up?upline=supertree
          </span>
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
