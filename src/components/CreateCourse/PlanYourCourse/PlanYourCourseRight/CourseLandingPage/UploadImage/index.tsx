import { useUploadFile } from '@/components/CreateCourse/service';
import LoadingScreen from '@/components/UI/LoadingScreen';
import Text from '@/components/UI/Text';
import { Button, Progress, Spinner } from '@nextui-org/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const UploadImage = ({ value, onChange }: { value: any; onChange: any }) => {
  const fileInputRef: any = useRef(null);
  const [valueProgress, setValueProgress] = useState(0);
  const [inputKey, setInputKey] = useState(Date.now());

  useEffect(() => {
    if (!value) {
      const interval = setInterval(() => {
        setValueProgress((v) => {
          if (v >= 100) {
            clearInterval(interval);
            return 100;
          }
          return v + 10;
        });
      }, 300);
      return () => clearInterval(interval);
    } else {
      setValueProgress(100);
    }
  }, [value]);

  const { run: runUploadFile, loading } = useUploadFile({
    onSuccess(res) {
      onChange(res?.data?.url);
    },
  });

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    runUploadFile(files?.[0]);
  };
  const handleClickUploadFile = () => {
    if (value) {
      setValueProgress(0);
      onChange(null);
      setInputKey(Date.now());
    } else {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="flex flex-col gap-3">
      <Text type="font-16-600" className="text-white">
        Course image
      </Text>
      <input
        key={inputKey}
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <div className="flex items-start gap-8">
        <div className="relative min-w-[480px] h-[270px] bg-gray-800 flex items-center justify-center">
          <Image
            src={'/img-default.png'}
            className="w-[480px] h-[270px]"
            alt=""
            width={480}
            height={270}
          />
          {loading && (
            <div className="absolute flex items-center justify-center w-full h-full bg-black bg-opacity-50">
              <Spinner />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Text type="font-16-600" className="text-white">
            Upload your course image here. It must meet our course image quality
            standards to be accepted. Important guidelines: 750x422 pixels;
            .jpg, .jpeg,. gif, or .png. no text on the image.
          </Text>
          <div className="flex items-center gap-2">
            {value ? (
              <div className="relative w-full">
                <Progress
                  radius="none"
                  classNames={{
                    indicator: 'bg-main',
                    track: 'min-h-[48px]',
                  }}
                  className="w-full"
                  value={valueProgress}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Text type="font-16-500" className="text-white">
                    {valueProgress}%
                  </Text>
                </div>
              </div>
            ) : (
              <div className="py-3 px-[10px] w-full min-h-[48px] rounded border-1 bgDefault border-black-10">
                <Text type="font-16-400" className="text-black-8">
                  No file selected
                </Text>
              </div>
            )}

            <Button
              onClick={handleClickUploadFile}
              className="bg-transparent border-1 border-main min-w-[133px] min-h-[48px] rounded"
            >
              <Text type="font-16-700" className="text-main">
                {value ? 'Change' : 'Upload File'}
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadImage;
