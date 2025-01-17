import AccordionCustom from '@/components/UI/AccordionCustom';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { IconClose, IconFile } from '..';
import { Control, useFieldArray } from 'react-hook-form';
import { useState } from 'react';
import { TYPE_COURSE } from '@/utils/common';
import FormLecture from './FormLecture';
import FormQuiz from './FormQuiz';
import IconPlusMain from '@/components/UI/Icons/IconPlusMain';
import FormAddContent from './FormAddContent';
import clsx from 'clsx';
import FormAddQuizz from './FormAddQuizz';

const CurriculumItem = ({
  index,
  control,
}: {
  index: number;
  control: Control;
}) => {
  const {
    fields: childFields,
    append: appendChild,
    remove,
  } = useFieldArray({
    control,
    name: `sections.${index}.curriculums`,
  });
  const [typeCurriculumItem, setTypeCurriculumItem] = useState<any>('');
  const [typeContentAdd, setTypeContentAdd] = useState<any>('');
  const [indexContentAdd, setIndexContentAdd] = useState<any>([]);

  const handleClickAddContent = (type: string, index: number) => {
    setTypeContentAdd(type);
    setIndexContentAdd((prev: any) =>
      prev.includes(index)
        ? prev.filter((i: any) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {childFields?.map((field: any, index) => {
        return (
          <div className="mx-[-8px] flex items-center gap-3">
            <div className="w-[20px]">
              {index !== 0 && (
                <Button
                  onClick={() => {
                    setTypeCurriculumItem('');
                    remove(index);
                  }}
                  isIconOnly
                  variant="light"
                  radius="full"
                  size="sm"
                >
                  <IconClose />
                </Button>
              )}
            </div>
            {field?.title ? (
              <div className="w-full">
                <div
                  className={clsx(
                    'rounded flex justify-between items-center w-full py-2 px-3 bg-transparent border-1 border-white/15',
                    {
                      ['rounded-b-none']: [
                        TYPE_COURSE.LECTURE,
                        TYPE_COURSE.QUIZ,
                      ].includes(typeContentAdd),
                    }
                  )}
                >
                  <div className="flex items-center gap-2">
                    <IconCheck />
                    <Text type="font-16-600" className="text-white">
                      {`${field?.title}:`}
                    </Text>
                    <div className="flex items-center gap-1">
                      <IconFile />
                      <Text type="font-16-500" className="text-black-7">
                        {field.introduction}
                      </Text>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleClickAddContent(field.type, index)}
                    className="border-main border-1 bg-transparent rounded h-[34px]"
                  >
                    <div className="flex items-center gap-2">
                      <IconPlusMain />
                      <Text type="font-16-400" className="text-main">
                        {field.type === TYPE_COURSE.LECTURE
                          ? 'Content'
                          : 'Question'}
                      </Text>
                    </div>
                  </Button>
                </div>
                {typeContentAdd === TYPE_COURSE.LECTURE &&
                  indexContentAdd.includes(index) && <FormAddContent />}

                {typeContentAdd === TYPE_COURSE.QUIZ &&
                  indexContentAdd.includes(index) && <FormAddQuizz />}
              </div>
            ) : (
              // <AccordionCustom
              //   isCreateCourse
              //   title={
              //     <div className="flex items-center justify-between border-b border-b-black-10 pb-4">
              //       <div className="flex items-center gap-2">
              //         <IconCheck />
              //         <Text type="font-16-600" className="text-white">
              //           {`${field?.title}:`}
              //         </Text>
              //         <div className="flex items-center gap-1">
              //           <IconFile />
              //           <Text type="font-16-500" className="text-black-7">
              //             {field.introduction}
              //           </Text>
              //         </div>
              //       </div>

              //       <Button className="border-main border-1 bg-transparent rounded h-[34px]">
              //         <div className="flex items-center gap-2">
              //           <IconPlusMain />
              //           <Text type="font-16-400" className="text-main">
              //             {field.type === TYPE_COURSE.LECTURE
              //               ? 'Content'
              //               : 'Question'}
              //           </Text>
              //         </div>
              //       </Button>
              //     </div>
              //   }
              // >
              //   <></>
              // </AccordionCustom>
              <>
                {![TYPE_COURSE.LECTURE, TYPE_COURSE.QUIZ].includes(
                  typeCurriculumItem
                ) && (
                  <div className="rounded-sm mx-2  py-2 max-h-[36px] px-3 border-1 border-dashed border-white w-full flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="light"
                      onClick={() => setTypeCurriculumItem(TYPE_COURSE.LECTURE)}
                      className=" max-h-[24px] bg-transparent"
                    >
                      <div className="flex items-center gap-1">
                        <IconPlusBlue />
                        <Text type="font-14-500" className="text-[#0059FF]">
                          Lecture
                        </Text>
                      </div>
                    </Button>
                    <Button
                      size="sm"
                      variant="light"
                      onClick={() => setTypeCurriculumItem(TYPE_COURSE.QUIZ)}
                      className=" max-h-[24px] bg-transparent"
                    >
                      <div className="flex items-center gap-1">
                        <IconPlusBlue />
                        <Text type="font-14-500" className="text-[#0059FF]">
                          Quiz
                        </Text>
                      </div>
                    </Button>
                  </div>
                )}
                {typeCurriculumItem === TYPE_COURSE.LECTURE && (
                  <FormLecture
                    handleAdd={(value: string) => {
                      remove(index);
                      setTypeCurriculumItem('');
                      appendChild({
                        title: `Lecture ${index + 1}`,
                        introduction: value,
                        type: TYPE_COURSE.LECTURE,
                      });
                    }}
                    handleCancel={() => setTypeCurriculumItem('')}
                  />
                )}
                {typeCurriculumItem === TYPE_COURSE.QUIZ && (
                  <FormQuiz
                    handleAdd={(value: string) => {
                      remove(index);
                      setTypeCurriculumItem('');
                      appendChild({
                        title: `Quiz ${index + 1}`,
                        introduction: value,
                        type: TYPE_COURSE.QUIZ,
                      });
                    }}
                    handleCancel={() => setTypeCurriculumItem('')}
                  />
                )}
              </>
            )}
          </div>
        );
      })}
      <div className="pl-8">
        <Button
          onClick={() => appendChild({ title: '', introduction: '' })}
          className="py-2 px-3 pl-6 bg-transparent w-max border-1 border-white rounded"
        >
          <div className="flex items-center gap-1">
            <IconPlus />
            <Text>Curriculum item</Text>
          </div>
        </Button>
      </div>
    </div>
  );
};
export default CurriculumItem;

const IconCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 18.3337C5.39752 18.3337 1.66669 14.6028 1.66669 10.0003C1.66669 5.39783 5.39752 1.66699 10 1.66699C14.6025 1.66699 18.3334 5.39783 18.3334 10.0003C18.3334 14.6028 14.6025 18.3337 10 18.3337ZM9.16919 13.3337L15.0609 7.44116L13.8825 6.26283L9.16919 10.977L6.81169 8.61949L5.63335 9.79782L9.16919 13.3337Z"
        fill="white"
      />
    </svg>
  );
};
const IconPlusBlue = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.16669 9.16699V4.16699H10.8334V9.16699H15.8334V10.8337H10.8334V15.8337H9.16669V10.8337H4.16669V9.16699H9.16669Z"
        fill="#0059FF"
      />
    </svg>
  );
};
const IconPlus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.16669 9.16699V4.16699H10.8334V9.16699H15.8334V10.8337H10.8334V15.8337H9.16669V10.8337H4.16669V9.16699H9.16669Z"
        fill="white"
      />
    </svg>
  );
};
