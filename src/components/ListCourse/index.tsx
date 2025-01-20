import { Button, Progress } from '@nextui-org/react';
import InputText from '../UI/InputText';
import SelectCustom from '../UI/SelectCustom';
import Text from '../UI/Text';
import { useRouter } from 'next/router';
import { ROUTE_PATH } from '@/utils/common';
import Image from 'next/image';
import { useGetListCourse } from './service';
import { useState } from 'react';
import NoData from './NoData';

const SORT_BY = [
  { key: 'newest', label: 'Newest' },
  { key: 'oldest', label: 'Oldest' },
  { key: 'a-z', label: 'A-Z' },
  { key: 'z-a', label: 'Z-A' },
];

const ListCourse = () => {
  const router = useRouter();
  const { dataCourses } = useGetListCourse();

  const [idHovered, setIdHovered] = useState<string>('');

  const handleMouseEnter = (id: string) => {
    setIdHovered(id);
  };

  const handleMouseLeave = () => {
    setIdHovered('');
  };

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
            onClick={() => router.push(ROUTE_PATH.CREATE_COURSE)}
            className="bg-main rounded py-[10px] px-6 min-h-[44px]"
          >
            <Text type="font-16-700">New Course</Text>
          </Button>
        </div>
      </div>
      {dataCourses?.data?.length > 0 &&
        dataCourses?.data?.map((item: any) => {
          return (
            <div
              key={item?.id}
              onMouseEnter={() => handleMouseEnter(item?.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                router.push(`${ROUTE_PATH.CREATE_COURSE}/${item?.id}`)
              }
              className="rounded hover:bg-black/80 hover:backdrop-blur-lg cursor-pointer flex gap-2 w-full min-h-[202px] border-1 border-[#F0F0F01A] bg-[#181F25]"
            >
              <Image
                alt=""
                src={'/img-course.png'}
                width={200}
                height={202}
                className="w-[200px] h-full"
              />
              <div className="p-4 flex flex-col relative justify-between w-full">
                {idHovered === item?.id && (
                  <div className="flex gap-2 absolute justify-center items-center left-1/2 top-[45%] z-[1000]">
                    <IconEdit />
                    <Text className="text-[20px] font-bold text-white">
                      Edit Courses
                    </Text>
                  </div>
                )}
                <Text className="text-[20px] font-bold">{item?.title}</Text>
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
      {dataCourses?.data?.length === 0 && <NoData />}
    </div>
  );
};
export default ListCourse;
const IconEdit = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6.414 16.0001L16.556 5.85808L15.142 4.44408L5 14.5861V16.0001H6.414ZM7.243 18.0001H3V13.7571L14.435 2.32208C14.6225 2.13461 14.8768 2.0293 15.142 2.0293C15.4072 2.0293 15.6615 2.13461 15.849 2.32208L18.678 5.15108C18.8655 5.33861 18.9708 5.59292 18.9708 5.85808C18.9708 6.12325 18.8655 6.37756 18.678 6.56508L7.243 18.0001ZM3 20.0001H21V22.0001H3V20.0001Z"
        fill="white"
      />
    </svg>
  );
};
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
