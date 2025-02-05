import React, { useEffect, useState } from 'react';
import Text from '../UI/Text';
import Overview from './Overview';
import Information from './Information';
import Avatar from './Avatar';
import Security from './Security';
import userService, { TUser } from './service';

enum TAB {
  INFORMATION = 'information',
  AVATAR = 'avatar',
  SECURITY = 'security',
}

const tabs = [
  {
    title: 'Information',
    key: TAB.INFORMATION,
  },
  {
    title: 'Avatar',
    key: TAB.AVATAR,
  },
  {
    title: 'Security',
    key: TAB.SECURITY,
  },
];

const MyProfile = () => {
  const [tabSelected, setTabSelected] = useState<TAB>(TAB.INFORMATION);
  const [user, setUser] = useState<TUser>();

  const getMe = async () => {
    try {
      const response = await userService.getMe();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="pl-5 border-l-4 border-l-main">
        <Text type="font-28-700">My Profile</Text>
      </div>

      <div className="flex flex-col md:flex-row gap-[24px] box-border">
        <Overview
          data={{
            avatar:
              user?.avatar ||
              'https://i1.sndcdn.com/avatars-000225974941-3icznp-t500x500.jpg',
            fullname: `${user?.firstName || '-'} ${user?.lastName || '-'}`,
            email: user?.email || '--',
            verify: true,
            customers: {
              total: 100,
              f1: 20,
              f2: 30,
              f4: 40,
              o: 10,
            },
          }}
        />
        <div className="bg-[#181F25] w-full p-[20px] rounded-[4px] box-border">
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
          {tabSelected === TAB.INFORMATION && (
            <Information
              user={user}
              reload={() => {
                getMe();
              }}
            />
          )}
          {tabSelected === TAB.AVATAR && <Avatar />}
          {tabSelected === TAB.SECURITY && <Security />}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
