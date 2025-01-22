import AccordionCustom from '@/components/UI/AccordionCustom';
import Text from '@/components/UI/Text';
import { TYPE_COURSE } from '@/utils/const';
import { useMemo } from 'react';
import ChildSection from './ChildSection';

const ListSection = ({
  sections,
  handleClickChildLesson,
}: {
  handleClickChildLesson: (id: string, type: TYPE_COURSE) => void;
  sections: any;
}) => {
  return (
    <div className="flex flex-col gap-4 border-l-1 border-l-[#D9D9D91A]">
      <div className="mx-[-8px]">
        {sections?.map((item: any, index: number) => {
          const countChildrendSection =
            item?.quizzes?.length + item?.lessons?.length;

          const newLessons = item?.lessons?.map(
            (lesson: any, indexLesson: number) => {
              return {
                ...lesson,
                type: TYPE_COURSE.LECTURE,
                sttLesson: indexLesson + 1,
              };
            }
          );

          const newQuizzes = item?.quizzes?.map(
            (quizz: any, indexQuizz: number) => {
              return {
                ...quizz,
                type: TYPE_COURSE.QUIZ,
                sttQuizz: indexQuizz + 1,
              };
            }
          );
          const listChildSection = newLessons?.concat(newQuizzes);

          return (
            <AccordionCustom
              key={item?.id}
              isSection
              title={
                <div className="flex flex-col gap-2">
                  <Text type="font-16-600" className="text-white">
                    {`Section ${index + 1}: ${item?.title}`}
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text type="font-14-400" className="opacity-50">
                      {`0/${countChildrendSection}`}
                    </Text>
                    <Text type="font-14-400" className="opacity-50">
                      13 min
                    </Text>
                  </div>
                </div>
              }
            >
              {listChildSection?.length > 0 ? (
                <ChildSection
                  handleClickChildLesson={handleClickChildLesson}
                  items={listChildSection}
                />
              ) : (
                <></>
              )}
            </AccordionCustom>
          );
        })}
      </div>
    </div>
  );
};
export default ListSection;
