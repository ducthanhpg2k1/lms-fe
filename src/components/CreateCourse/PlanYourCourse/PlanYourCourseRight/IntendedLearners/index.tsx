import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { Control, useFieldArray } from 'react-hook-form';

const IntendedLearners = ({ control }: { control: Control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const {
    fields: fields1,
    append: append1,
    remove: remove1,
  } = useFieldArray({
    control,
    name: 'items1',
  });

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control,
    name: 'items2',
  });

  return (
    <div className="flex flex-col gap-8">
      <Text type="font-28-700" className="text-white">
        Intended learners
      </Text>
      <Text type="font-16-400" className="text-black-6">
        The following descriptions will be publicly visible on your Course
        Landing Page and will have a direct impact on your course performance.
        These descriptions will help learners decide if your course is right for
        them.
      </Text>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-[10px]">
          <Text type="font-16-600" className="text-white">
            What will students learn in your course?
          </Text>
          <Text type="font-16-400" className="text-black-6">
            You must enter at least 4 
            <Text className="underline" element="span">
              learning objectives or outcomes
            </Text>
             that learners can expect to achieve after completing your course.
          </Text>
        </div>
        {fields?.map((field, index) => {
          return (
            <div key={field?.id} className="flex items-center gap-3">
              <InputText
                maxLength={160}
                endContent
                className="w-8/12"
                placeholder="Type"
                inputDefault
              />
              {/* <Button isIconOnly radius='full'>
                <Deletei></>
              </Button> */}
            </div>
          );
        })}

        <Button
          onClick={() => append({ name: '' })}
          size="sm"
          variant="light"
          className="w-max"
        >
          <Text type="font-16-600" className="text-main">
            + Add more to your answer
          </Text>
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <Text type="font-16-600" className="text-white">
          What are the requirements or prerequisites for taking your course?
        </Text>
        <Text type="font-16-400" className="text-black-6">
          {`List the required skills, experience, tools or equipment learners
          should have prior to taking your course. If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.`}
        </Text>

        {fields1?.map((field, index) => {
          return (
            <div key={field?.id} className="flex items-center gap-3">
              <InputText
                maxLength={160}
                endContent
                className="w-8/12"
                placeholder="Type"
                inputDefault
              />
              {/* <Button isIconOnly radius='full'>
                <Deletei></>
              </Button> */}
            </div>
          );
        })}

        <Button
          onClick={() => append1({ name: '' })}
          size="sm"
          variant="light"
          className="w-max"
        >
          <Text type="font-16-600" className="text-main">
            + Add more to your answer
          </Text>
        </Button>
      </div>
      <div className="flex flex-col gap-3">
        <Text type="font-16-600" className="text-white">
          Who is this course for?
        </Text>
        <Text type="font-16-400" className="text-black-6">
          List the required skills, experience, tools or equipment learners
          should have prior to taking your course. If there are no requirements,
          use this space as an opportunity to lower the barrier for beginners.
        </Text>

        {fields2?.map((field, index) => {
          return (
            <div key={field?.id} className="flex items-center gap-3">
              <InputText
                maxLength={160}
                endContent
                className="w-8/12"
                placeholder="Type"
                inputDefault
              />
              {/* <Button isIconOnly radius='full'>
                <Deletei></>
              </Button> */}
            </div>
          );
        })}

        <Button
          onClick={() => append2({ name: '' })}
          size="sm"
          variant="light"
          className="w-max"
        >
          <Text type="font-16-600" className="text-main">
            + Add more to your answer
          </Text>
        </Button>
      </div>
      <Button className="min-h-[44px] rounded bg-main w-max min-w-[136px]">
        <Text type="font-16-700" className="text-white">
          Save profile
        </Text>
      </Button>
    </div>
  );
};
export default IntendedLearners;
