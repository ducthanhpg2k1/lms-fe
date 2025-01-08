import { useState } from 'react';
import ListCourse from './ListCourse';
import MainBanner from './MainBanner';
import { atom, useAtom } from 'jotai';

export const filterAtom = atom(false);
const Course = () => {
  const [isFilter, setIsFilter] = useAtom(filterAtom);
  return (
    <div className="flex flex-col gap-16">
      {!isFilter && <MainBanner />}

      <ListCourse />
    </div>
  );
};
export default Course;
