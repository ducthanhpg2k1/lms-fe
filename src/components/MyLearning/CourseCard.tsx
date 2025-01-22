import React from 'react';
import Text from '@/components/UI/Text';
import RateStar from '../UI/RateStar';

interface IProps {
  image: string;
  progress: number;
  rating: number;
  name: string;
  authorName: string;
}

export default function CourseCard({
  name,
  progress = 50,
  rating = 4,
  authorName,
  image,
}: IProps) {
  return (
    <div className="w-full bg-[#FFFFFF0D] rounded overflow-hidden">
      <div className="w-full">
        <img
          src={image || '/images/img-default.png'}
          alt={name}
          className="w-full"
        />
      </div>
      <div className="py-4 px-3 flex flex-col gap-4">
        <div className="flex flex-col gap-[10px]">
          <Text type="font-16-500">{name}</Text>

          <Text type="font-14-400" className="text-[#8C8C8C]">
            {authorName}
          </Text>
        </div>
        <ProgressBar progress={progress} />
        <div className="flex items-center justify-between">
          <Text type="font-14-500">{progress}% complete</Text>
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
