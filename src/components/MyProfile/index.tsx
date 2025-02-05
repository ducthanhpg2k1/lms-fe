import React, { useState } from 'react';
import Text from '../UI/Text';
import Overview from './Overview';
import Information from './Information';
import Avatar from './Avatar';
import Security from './Security';

const tabs = [
  {
    title: 'Information',
    key: 'information',
  },
  {
    title: 'Avatar',
    key: 'avatar',
  },
  {
    title: 'Security',
    key: 'security',
  },
];

enum TAB {
  INFORMATION = 'information',
  AVATAR = 'avatar',
  SECURITY = 'security',
}

const MyProfile = () => {
  const [tabSelected, setTabSelected] = useState('information');
  return (
    <div className="flex flex-col gap-[50px]">
      <div className="pl-5 border-l-4 border-l-main">
        <Text type="font-28-700">My Profile</Text>
      </div>

      <div className="flex gap-[24px]">
        <Overview />
        <div className="bg-[#181F25] w-full p-[20px] rounded-[4px]">
          <div className="flex gap-[12px] mb-[32px] border-b border-[#2B3032]">
            {tabs.map((item) => (
              <div
                onClick={() => setTabSelected(item.key)}
                className={`px-[8px] pb-[16px] text-base font-medium cursor-pointer ${
                  tabSelected === item.key
                    ? 'border-b text-[#02A6C2] border-[#02A6C2]'
                    : ''
                }`}
                key={item.key}
              >
                <span
                  className={`${tabSelected === item.key ? '' : 'opacity-50'}`}
                >
                  {item.title}
                </span>
              </div>
            ))}
          </div>
          {tabSelected === TAB.INFORMATION && <Information />}
          {tabSelected === TAB.AVATAR && <Avatar />}
          {tabSelected === TAB.SECURITY && <Security />}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
