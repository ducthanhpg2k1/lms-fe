import { Button, Progress } from '@nextui-org/react';
import InputText from '../UI/InputText';
import SelectCustom from '../UI/SelectCustom';
import Text from '../UI/Text';
import { useRouter } from 'next/router';
import { ROUTE_PATH } from '@/utils/common';
import Image from 'next/image';

const SORT_BY = [
  { key: 'newest', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
  { key: 'a-z', label: 'A-Z' },
  { key: 'z-a', label: 'Z-A' },
];

const ListCourse = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[30px]">
        <div className="pl-5 border-l-4 border-l-main">
          <Text type="font-28-700">Courses</Text>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <InputText
              startContent={<IconSearch />}
              className="min-w-[302px]"
              isInputSubmit
              placeholder="Search"
            />
            <SelectCustom
              placeholder="Sort by type"
              isSelectSubmit
              className="min-w-[120px] min-h-[44px]"
              options={SORT_BY}
            />
          </div>
          <Button
            onClick={() => router.push(ROUTE_PATH.CREATE_SEARCH)}
            className="bg-main rounded py-[10px] px-6 min-h-[44px]"
          >
            <Text type="font-16-700">New Course</Text>
          </Button>
        </div>
      </div>
      {Array.from({ length: 2 }).map((_, key) => {
        return (
          <div className="rounded hover:bg-black/80 hover:backdrop-blur-sm cursor-pointer flex gap-2 w-full min-h-[202px] border-1 border-[#F0F0F01A] bg-[#181F25]">
            <Image
              alt=""
              src={'/img-course.png'}
              width={200}
              height={202}
              className="w-[200px] h-full"
            />
            <div className="p-4 flex flex-col justify-between w-full">
              <Text className="text-[20px] font-bold">Figma</Text>
              <div className="flex justify-end items-end">
                <div className="flex items-center w-8/12 gap-4">
                  <Text className="text-[20px] font-bold w-[270px]">
                    Finish your courses
                  </Text>
                  <Progress
                    maxValue={6}
                    classNames={{
                      indicator: 'bg-main',
                      track: 'max-h-[8px]',
                    }}
                    className="w-full"
                    value={2}
                  />
                </div>
              </div>

              <div className="flex items-center gap-[30px]">
                <Text type="font-16-700" className="text-white">
                  Draft
                </Text>

                <Text type="font-16-400" className="text-white">
                  Public
                </Text>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ListCourse;

const IconSearch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
        fill="#BFBFBF"
      />
    </svg>
  );
};
