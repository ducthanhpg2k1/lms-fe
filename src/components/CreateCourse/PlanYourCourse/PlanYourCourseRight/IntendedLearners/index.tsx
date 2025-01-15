import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';

const IntendedLearners = () => {
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
        <InputText
          maxLength={160}
          endContent
          className="w-8/12"
          placeholder="Type"
          inputDefault
        />
        <InputText
          maxLength={160}
          className="w-8/12"
          placeholder="Type"
          inputDefault
        />
        <InputText
          maxLength={160}
          className="w-8/12"
          placeholder="Type"
          inputDefault
        />
        <InputText
          maxLength={160}
          className="w-8/12"
          placeholder="Type"
          inputDefault
        />
      </div>
    </div>
  );
};
export default IntendedLearners;
