import { CATEGORIES } from '@/components/Course/ListCourse';
import InputText from '@/components/UI/InputText';
import QuillEditor from '@/components/UI/QuillEditor';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { Control } from 'react-hook-form';
import UploadImage from './UploadImage';
import PromotionalVideo from './PromotionalVideo';

const CourseLandingPage = ({ control }: { control: Control }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <Text type="font-28-700" className="text-white">
          Course landing page
        </Text>
        <Text type="font-16-400" className="text-black-6">
          Your course landing page is crucial to your success on Udemy. If it’s
          done right, it can also help you gain visibility in search engines
          like Google. As you complete this section, think about creating a
          compelling Course Landing Page that demonstrates why someone would
          want to enroll in your course. Learn more about creating your course
          landing page and course title standards.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <InputText label="Course title" placeholder="Type" inputDefault />
        <Text type="font-12-400" className="text-black-7">
          Your title should be a mix of attention-grabbing, informative, and
          optimized for search
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <InputText label="Course subtitle" placeholder="Type" inputDefault />
        <Text type="font-12-400" className="text-black-7">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you've covered during your course.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <QuillEditor
          placeholder="Add a new note..."
          label="Course description"
          inputDefault
        />
        <Text type="font-12-400" className="text-black-7">
          Description should have minimum 200 words.
        </Text>
      </div>
      <div className="flex flex-col gap-3">
        <Text type="font-16-600" className="text-white">
          Basic info
        </Text>

        <div className="grid grid-cols-2 gap-3">
          <SelectCustom
            placeholder="English (US)"
            className="min-w-[120px]"
            inputDefault
            options={CATEGORIES}
          />
          <SelectCustom
            placeholder="-- Select level --"
            className="min-w-[120px]"
            inputDefault
            options={CATEGORIES}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SelectCustom
            placeholder="Developer"
            inputDefault
            className="min-w-[120px]"
            options={CATEGORIES}
          />
          <SelectCustom
            placeholder="-- Select Subcategory --"
            className="min-w-[120px]"
            inputDefault
            options={CATEGORIES}
          />
        </div>
        <Text type="font-12-400" className="text-black-7">
          Use 1 or 2 related keywords, and mention 3-4 of the most important
          areas that you've covered during your course.
        </Text>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <InputText
            label="What is primarily taught in your course?"
            placeholder="e.g Landscape Photography"
            inputDefault
          />
        </div>
      </div>
      <UploadImage />
      <PromotionalVideo />
    </div>
  );
};
export default CourseLandingPage;
