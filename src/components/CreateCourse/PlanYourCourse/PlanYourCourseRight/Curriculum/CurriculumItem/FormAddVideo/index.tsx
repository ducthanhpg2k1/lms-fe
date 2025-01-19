import { useUploadFile } from '@/components/CreateCourse/service';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { useRef } from 'react';

const FormAddVideo = () => {
  const fileInputRef: any = useRef(null);

  const { run: runUploadFile, loading } = useUploadFile({
    onSuccess(res) {
      console.log(res, 'res');
    },
  });

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    runUploadFile(files?.[0]);
  };
  const handleClickUploadFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex py-3 px-4 items-center border-1 border-t-0 border-white/15  gap-4">
      <div
        onClick={handleClickUploadFile}
        className="cursor-pointer w-full py-3 px-[10px] bgDefault rounded border-1 border-white/20"
      >
        <Text type="font-14-400" className="text-white/40">
          No files selected
        </Text>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <Button
        isLoading={loading}
        onClick={handleClickUploadFile}
        className="bg-transparent min-h-[43px] min-w-[100px] border-1 border-main rounded"
      >
        <Text type="font-14-400" className="text-main">
          Select video
        </Text>
      </Button>
    </div>
  );
};
export default FormAddVideo;
