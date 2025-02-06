import Text from '@/components/UI/Text';
import { LessonContentType } from '@/utils/const';
import { Button } from '@nextui-org/react';
import { File } from '@phosphor-icons/react';
import Image from 'next/image';
import { useMemo } from 'react';

const Content = ({
  handleClickEditContent,
  type,
  info,
}: {
  handleClickEditContent: VoidFunction;
  type: LessonContentType;
  info: any;
}) => {
  console.log(info, 'info');

  const formattedTime: string = useMemo(() => {
    const minutes = Math.floor(info?.duration / 60);
    const seconds = Math.floor(info?.duration % 60);
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;

    return formattedTime;
  }, [info?.duration]);
  return (
    <div className="flex items-start justify-between p-3  border-1 border-t-0 border-white/15 gap-3">
      <div className="flex items-center gap-2 cursor-pointer">
        {info?.thumbnailUrl ? (
          <Image
            alt=""
            width={116}
            height={65}
            className="object-cover"
            src={info?.thumbnailUrl}
          />
        ) : (
          <div className="w-[116px] h-[65px] bg-black-10 flex justify-center items-center">
            <File size={32} weight="light" />
          </div>
        )}

        <div className="flex flex-col gap-1">
          {info?.fileNameVideo && (
            <Text type="font-14-700" className="text-white line-clamp-1">
              {info?.fileNameVideo}
            </Text>
          )}
          {info?.duration ? (
            <Text type="font-14-400" className="text-white">
              {formattedTime}
            </Text>
          ) : (
            <Text type="font-14-400" className="text-white">
              00:00
            </Text>
          )}

          <div
            onClick={handleClickEditContent}
            className="flex items-center gap-1"
          >
            <IconEdit />
            <Text type="font-14-400" className="text-[#0059FF]">
              {type === LessonContentType.VIDEO ? 'Edit video' : 'Edit content'}
            </Text>
          </div>

          {/* <div className="flex items-center gap-1">
            <IconPlay />
            <Text type="font-14-400" className="text-[#0059FF]">
              Replace With Video
            </Text>
          </div> */}
        </div>
      </div>
      {/* <Button className="bg-main w-max rounded h-[40px]">
        <div className="flex items-center gap-2">
          <Text type="font-16-400" className="text-white">
            Preview
          </Text>
          <IconArrowDown />
        </div>
      </Button> */}
    </div>
  );
};
export default Content;

const IconPlay = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10 18.3337C5.39752 18.3337 1.66669 14.6028 1.66669 10.0003C1.66669 5.39783 5.39752 1.66699 10 1.66699C14.6025 1.66699 18.3334 5.39783 18.3334 10.0003C18.3334 14.6028 14.6025 18.3337 10 18.3337ZM8.85169 7.01283C8.80153 6.97936 8.74324 6.96013 8.68303 6.95718C8.62281 6.95422 8.56291 6.96765 8.50973 6.99604C8.45654 7.02443 8.41204 7.06672 8.38099 7.11839C8.34993 7.17007 8.33347 7.2292 8.33335 7.28949V12.7112C8.33347 12.7715 8.34993 12.8306 8.38099 12.8823C8.41204 12.9339 8.45654 12.9762 8.50973 13.0046C8.56291 13.033 8.62281 13.0464 8.68303 13.0435C8.74324 13.0405 8.80153 13.0213 8.85169 12.9878L12.9175 10.2778C12.9632 10.2474 13.0007 10.2061 13.0267 10.1577C13.0526 10.1093 13.0662 10.0552 13.0662 10.0003C13.0662 9.9454 13.0526 9.89133 13.0267 9.84292C13.0007 9.79451 12.9632 9.75325 12.9175 9.72283L8.85085 7.01283H8.85169Z"
        fill="#0059FF"
      />
    </svg>
  );
};

const IconArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 13.1717L16.95 8.22168L18.364 9.63568L12 15.9997L5.63599 9.63568L7.04999 8.22168L12 13.1717Z"
        fill="white"
      />
    </svg>
  );
};
const IconEdit = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.75 5.71507L14.285 9.2509L6.035 17.5001H2.5V13.9642L10.75 5.71424V5.71507ZM11.9283 4.53674L13.6958 2.7684C13.8521 2.61218 14.064 2.52441 14.285 2.52441C14.506 2.52441 14.7179 2.61218 14.8742 2.7684L17.2317 5.1259C17.3879 5.28218 17.4757 5.4941 17.4757 5.71507C17.4757 5.93604 17.3879 6.14796 17.2317 6.30424L15.4633 8.07174L11.9283 4.53674Z"
        fill="#0059FF"
      />
    </svg>
  );
};
