import IconCoppyRight from '@/components/UI/IconCoppyRight';
import IconGlobal from '@/components/UI/Icons/IconGlobal';
import IconUpload from '@/components/UI/Icons/IconUpload';
import Text from '@/components/UI/Text';
import ByTheNumbers from './ByTheNumbers';
import Description from './Description';
import RateStar from '@/components/UI/RateStar';

const Overview = () => {
  return (
    <div className="flex flex-col gap-5 pl-[80px] pr-[32px]">
      <Text className="text-white" type="font-24-700">
        HTML5 for web development essential HTML from scratch. With this HTML
        course, you don't need previous knowledge of HTML
      </Text>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <Text className="text-white" type="font-14-700">
                  4.1
                </Text>
                <RateStar rate={4} />
                {/* <IconStar /> */}
              </div>
              <Text className="text-black-7" type="font-12-400">
                572 rating
              </Text>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Text className="text-white" type="font-14-700">
                15.568
              </Text>
              <Text className="text-black-7" type="font-12-400">
                Students
              </Text>
            </div>
            <div className="flex flex-col gap-[6px]">
              <Text className="text-white" type="font-14-700">
                1.5 Hours
              </Text>
              <Text className="text-black-7" type="font-12-400">
                Total
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <IconUpload />
              <Text className="text-black-5" type="font-14-400">
                Last Updated January 2025
              </Text>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <IconGlobal />
                <Text className="text-black-5" type="font-14-400">
                  English
                </Text>
              </div>
              <div className="flex items-center gap-2">
                <IconCoppyRight />
                <Text className="text-black-5" type="font-14-400">
                  English (auto)
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <ByTheNumbers />
          <Description />
        </div>
      </div>
    </div>
  );
};
export default Overview;

const IconStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
    >
      <path
        d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
        fill="#F2B021"
      />
    </svg>
  );
};
