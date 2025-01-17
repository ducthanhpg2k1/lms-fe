import Text from '@/components/UI/Text';
import { File, PlayCircle } from '@phosphor-icons/react';

const FormAddContent = () => {
  return (
    <div className="flex justify-center py-3 flex-col border-1 border-t-0 border-white/15 items-center gap-3">
      <Text className="text-black-7" type="font-14-400">
        Chọn loại nội dung chính. Có thể thêm file và đường liên kết dưới dạng
        tài nguyên. Tìm hiểu về loại nội dung.
      </Text>
      <div className="flex items-center gap-6">
        <div className="flex flex-col cursor-pointer items-center border-1 border-white/20 min-w-[70px]">
          <div className="border-b w-full items-center justify-center flex py-2 border-b-white/20">
            <PlayCircle size={32} color="#8C8C8C" weight="fill" />
          </div>

          <div className="p-2 bg-slate-600 w-full text-center">
            <Text>Video</Text>
          </div>
        </div>
        <div className="flex flex-col cursor-pointer items-center border-1 border-white/20 min-w-[70px]">
          <div className="border-b w-full items-center justify-center flex py-2 border-b-white/20">
            <File size={32} color="#8C8C8C" weight="bold" />
          </div>

          <div className="p-2 bg-slate-600 w-full text-center">
            <Text>Article</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddContent;
