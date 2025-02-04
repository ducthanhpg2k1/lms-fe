import React from 'react';
import Text from '../UI/Text';
import Overview from './Overview';
import Information from './Information';

const MyProfile = () => {
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="pl-5 border-l-4 border-l-main">
        <Text type="font-28-700">My Profile</Text>
      </div>

      <div className="flex gap-[24px]">
        <Overview />
        <div className="bg-[#181F25] w-full p-[20px] rounded-[4px]">
          <Information />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
