import React, { useState } from 'react';
import Text from '../UI/Text';
import { Button } from '@nextui-org/react';

const Avatar = () => {
  const [file, setFile] = useState<File>();
  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.[0]) setFile(e.target.files[0]);
  };
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-[18px] font-bold">
        <sup className="text-[#FF3132]">*</sup> Upload File
      </div>

      <div className="opacity-50">
        Minimum 200x200 pixels, Maximum 3000x3000 pixels
      </div>

      <div className="p-[20px] h-[241px] bg-[#32383E] w-full rounded-[4px]">
        <div className="relative w-full h-full bg-[#181F25] border border-dashed rounded-[4px] border-[#32383E] flex flex-col justify-center items-center gap-[16px]">
          <div className="text-[#ffffff7f]">
            {file?.name || 'JPEG, PNG or JPG . Max 10mb.'}
          </div>
          <button className="px-[20px] py-[10px] bg-[#ffffff19] rounded-[4px] border border-[#02A6C2]">
            Choose File
          </button>
          <input
            className="w-full h-full absolute top-0 opacity-0 cursor-pointer"
            type="file"
            onChange={onChangeFile}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-fit px-[24px] bg-[#02A6C2] text-white font-semibold py-[10px] rounded-[4px] hover:bg-cyan-400 transition"
      >
        Save Profile
      </Button>
    </div>
  );
};

export default Avatar;
