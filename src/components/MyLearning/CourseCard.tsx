import React from 'react';
import Text from '@/components/UI/Text';
import RateStar from '../UI/RateStar';
import Image from 'next/image';
import { ROUTE_PATH } from '@/utils/const';
import { useRouter } from 'next/router';

interface IProps {
  id: string;
  image: string;
  progress: number;
  rating: number;
  name: string;
  authorName: string;
}

export default function CourseCard({
  id,
  name,
  progress = 0,
  rating = 4,
  authorName,
  image,
}: IProps) {
  const router = useRouter();

  console.log('progress', progress);


  return (
    <div className="w-full bg-[#FFFFFF0D] rounded overflow-hidden cursor-pointer" onClick={() => router.push(ROUTE_PATH.DETAIL_LESSON(id))}>
      <div className="w-full">
        <Image
          src={image || '/images/img-default.png'}
          alt={name}
          width={302}
          height={200}
          className="w-full h-[200px]"
          layout='contain'
          onError={(e: any) => {
            e.target.srcset = '/images/img-default.png';
          }}
        />
      </div>
      <div className="py-4 px-3 flex flex-col gap-4">
        <div className="flex flex-col gap-[10px]">
          <Text type="font-16-500">{name}</Text>

          <Text type="font-14-400" className="text-[#8C8C8C] break-all">
            {authorName}
          </Text>
        </div>
        <ProgressBar progress={Number((progress * 100).toFixed(0))} />
        <div className="flex items-center justify-between">
          <Text type="font-14-500">{(progress * 100).toFixed(0)}% complete</Text>
          <div className="flex items-center gap-2">
            <RateStar rate={rating} />
            <Text type="font-14-500">(230)</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full bg-[#FFFFFF1A] rounded-full h-2 overflow-hidden">
      <div
        className="bg-[#1DB78D] h-full transition-all duration-300 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
