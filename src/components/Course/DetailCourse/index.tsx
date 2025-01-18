import Text from '@/components/UI/Text';
import BreadCrumbs from './BreadCrumbs';
import Rater from 'react-rater';
import IconBookMark from '@/components/UI/Icons/IconBookMark';
import IconStudent from '@/components/UI/Icons/IconStudent';
import IconTimeNew from '@/components/UI/Icons/IconTimeNew';
import Image from 'next/image';
import YouLearn from './YouLearn';
import Requirements from './Requirements';
import About from './About';
import { Button } from '@nextui-org/react';
import Mentors from './Mentors';
import MoreCourse from './MoreCourse';
import CardEnrollNow from './CardEnrollNow';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useGetDetailCourse } from '@/components/CreateCourse/service';
import dayjs from 'dayjs';

const DetailCourse = () => {
  const router = useRouter();

  const { run: getDetailCourse, data: dataDetail } = useGetDetailCourse({});

  useEffect(() => {
    if (router.query.id) {
      getDetailCourse(router.query.id as string);
    }
  }, [router.query.id]);

  console.log(dataDetail, 'dataDetail');

  return (
    <div className="flex flex-col gap-[52px] relative">
      <BreadCrumbs />

      <div className="grid grid-cols-10 gap-[70px]">
        <div className="col-span-7 flex flex-col gap-10">
          <div className="flex flex-col border-b-1 border-b-black-10 pb-10 gap-5">
            <Text type="font-32-700" className="text-white">
              {dataDetail?.data?.title}
            </Text>
            <Text type="font-14-400" className="text-white">
              Learn: HTML | CSS | JavaScript | Web programming | Web development
              | Front-end | Responsive | JQuery
            </Text>
            <div className="flex items-center gap-2">
              <Text type="font-14-400" className="text-white">
                4.1
              </Text>
              <Rater total={5} rating={4} />
              <div className="w-[1px] h-5 bg-[#BFBFBF]" />
              <div className="flex items-center gap-1">
                <IconBookMark />
                <Text type="font-14-400" className="text-white">
                  11 Lessons
                </Text>
              </div>
              <div className="w-[1px] h-5 bg-[#BFBFBF]" />
              <div className="flex items-center gap-1">
                <IconStudent />
                <Text type="font-14-400" className="text-white">
                  229 Students
                </Text>
              </div>
              <div className="w-[1px] h-5 bg-[#BFBFBF]" />
              <div className="flex items-center gap-1">
                <IconTimeNew />
                <Text type="font-14-400" className="text-white">
                  {`Last updated ${dayjs(dataDetail?.data?.updatedAt).format(
                    'MM/YYYY'
                  )}`}
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-[6px]">
              <Image
                alt=""
                src={'/images/avatar.png'}
                width={24}
                height={24}
                className="rounded-full"
              />
              <Text type="font-16-500" className="text-black-7">
                By
              </Text>
              <Text type="font-16-500" className="text-white">
                Esther Howard
              </Text>
            </div>
          </div>
          <YouLearn data={dataDetail?.data} />
          <Requirements data={dataDetail?.data} />
          <About data={dataDetail?.data} />
          <Mentors />
          <MoreCourse />
        </div>
        <div className="col-span-3">
          <div className="sticky top-32 z-[100000]">
            <CardEnrollNow />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailCourse;
