import { Checkbox } from '@nextui-org/react';
import React from 'react';

const Security = () => {
  return (
    <div className='flex flex-col gap-[16px]'>
      <div className="text-[18px] font-bold">
        <sup className="text-[#FF3132]">*</sup> Upload File
      </div>
      <Checkbox></Checkbox>
    </div>
  );
};

export default Security;
