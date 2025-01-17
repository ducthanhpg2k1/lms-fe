import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRef } from 'react';

const PromotionalVideo = () => {
  const fileInputRef: any = useRef(null);
  const handleFileChange = (event: any) => {
    const files = event.target.files;
    console.log('Selected files:', files);
  };
  const handleClickUploadFile = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="flex flex-col gap-3">
      <Text type="font-16-600" className="text-white">
        Promotional video
      </Text>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div className="flex items-start gap-8">
        <Image
          src={'/img-default.png'}
          className="w-[480px] h-[270px]"
          alt=""
          width={480}
          height={270}
        />
        <div className="flex flex-col gap-2">
          <Text type="font-16-600" className="text-white">
            Your promo video is a quick and compelling way for students to
            preview what they’ll learn in your course. Students considering your
            course are more likely to enroll if your promo video is
            well-made. Learn how to make your promo video awesome!
          </Text>
          <div className="flex items-center gap-2">
            <div className="py-3 px-[10px] w-full min-h-[48px] rounded border-1 bgDefault border-black-10">
              <Text type="font-16-400" className="text-black-8">
                No file selected
              </Text>
            </div>
            <Button
              onClick={handleClickUploadFile}
              className="bg-main min-w-[133px] min-h-[48px] rounded"
            >
              <Text type="font-16-700" className="text-white">
                Upload File
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PromotionalVideo;
