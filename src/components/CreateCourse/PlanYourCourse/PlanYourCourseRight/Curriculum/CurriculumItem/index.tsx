import AccordionCustom from '@/components/UI/AccordionCustom';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { IconClose, IconFile } from '..';
import { Control, useFieldArray } from 'react-hook-form';

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

  return (
    <div className="flex flex-col gap-2">
      {childFields?.map((field: any, index) => {
        return (
          <div className="mx-[-8px] flex items-center gap-3">
            <div className="w-[20px]">
              {index !== 0 && (
                <Button
                  onClick={() => remove(index)}
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
              <AccordionCustom
                isCreateCourse
                title={
                  <div className="flex items-center gap-2">
                    <IconCheck />
                    <Text type="font-16-600" className="text-white">
                      Lecture 1:
                    </Text>
                    <div className="flex items-center gap-1">
                      <IconFile />
                      <Text type="font-16-500" className="text-black-7">
                        introduction
                      </Text>
                    </div>
                  </div>
                }
              >
                1
              </AccordionCustom>
            ) : (
              <div className="rounded-sm mx-2  py-2 max-h-[36px] px-3 border-1 border-dashed border-white w-full flex items-center gap-2">
                <Button
                  size="sm"
                  variant="light"
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
                  className=" max-h-[24px] bg-transparent"
                >
                  <div className="flex items-center gap-1">
                    <IconPlusBlue />
                    <Text type="font-14-500" className="text-[#0059FF]">
                      Quiz
                    </Text>
                  </div>
                </Button>
                <Button
                  size="sm"
                  variant="light"
                  className=" max-h-[24px] bg-transparent"
                >
                  <div className="flex items-center gap-1">
                    <IconPlusBlue />
                    <Text type="font-14-500" className="text-[#0059FF]">
                      Coding Exercise
                    </Text>
                  </div>
                </Button>
                <Button
                  size="sm"
                  variant="light"
                  className=" max-h-[24px] bg-transparent"
                >
                  <div className="flex items-center gap-1">
                    <IconPlusBlue />
                    <Text type="font-14-500" className="text-[#0059FF]">
                      Practice test
                    </Text>
                  </div>
                </Button>
                <Button
                  size="sm"
                  variant="light"
                  className=" max-h-[24px] bg-transparent"
                >
                  <div className="flex items-center gap-1">
                    <IconPlusBlue />
                    <Text type="font-14-500" className="text-[#0059FF]">
                      Assignment
                    </Text>
                  </div>
                </Button>
              </div>
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
