import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';

const HeaderPlanYourCourse = () => {
  return (
    <div className="w-full p-4 flex justify-between items-center border-b border-b-black-10">
      <div className="flex items-center gap-5">
        <Button variant="light" radius="sm" size="md">
          <div className="flex items-center gap-1">
            <IconBlack />
            <Text type="font-16-500" className="text-white">
              Back to courses
            </Text>
          </div>
        </Button>
        <div className="w-[1px] h-6 bg-[#595959]" />
        <Text type="font-16-500" className="text-white">
          0 min of video content uploaded
        </Text>
      </div>
      <div className="flex items-center gap-3">
        <Button className="bg-white min-w-[96px] !min-h-[40px] rounded">
          <Text type="font-16-400" className="text-black-10">
            Lưu
          </Text>
        </Button>
        <SelectCustom
          placeholder="Preview"
          className="min-w-[96px]"
          isLesson
          options={[]}
        />
      </div>
    </div>
  );
};
export default HeaderPlanYourCourse;

const IconBlack = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.02344 10.0004L13.1484 14.1254L11.9701 15.3037L6.66677 10.0004L11.9701 4.69704L13.1484 5.87538L9.02344 10.0004Z"
        fill="white"
      />
    </svg>
  );
};
