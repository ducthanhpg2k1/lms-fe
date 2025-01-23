import React from 'react';
import Text from '../UI/Text';
import ListCourses from './ListCourses';

export default function MyLearning() {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="pl-5 border-l-4 border-l-main">
        <Text type="font-28-700">My Learning</Text>
      </div>

      <div className="border-b-[1px] border-[#2B3032] relative flex pb-[20px]">
        <div className="w-[150px]">
          <Text type="font-16-600" className="text-[#02A6C2] text-center">
            Course Progress
          </Text>
        </div>
        <div className="absolute bottom-0 h-[3px] w-[150px] bg-[#02A6C2]" />
      </div>

      <ListCourses />
    </div>
  );
}
