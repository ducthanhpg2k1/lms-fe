import { Avatar, Button, Tab, Tabs } from '@nextui-org/react';
import Text from '../UI/Text';
import ListSection from './ListSection';
import { X } from '@phosphor-icons/react';
import VideoSection from './VideoSection';
import IconSearch from '../UI/Icons/IconSearch';
import Overview from './Overview';
import QA from './QA';
import Notes from './Notes';
import Announcements from './Announcements';
import Reviews from './Reviews';
import LearningTools from './LearningTools';
import Search from './Search';

const Lesson = () => {
  const itemsTab = [
    {
      key: '1',
      icon: <IconSearch />,
      children: <Search />,
    },
    {
      key: '2',
      label: 'Overview',
      children: <Overview />,
    },
    {
      key: '3',
      label: 'Q&A',
      children: <QA />,
    },
    {
      key: '4',
      label: 'Notes',
      children: <Notes />,
    },
    {
      key: '5',
      label: 'Announcements',
      children: <Announcements />,
    },
    {
      key: '6',
      label: 'Reviews',
      children: <Reviews />,
    },
    {
      key: '7',
      label: 'Learning tools',
      children: <LearningTools />,
    },
  ];
  return (
    <div className="grid grid-cols-10 relative">
      <div className="col-span-7 flex flex-col">
        <VideoSection />
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options"
            defaultSelectedKey={'2'}
            classNames={{
              tabList:
                'gap-3 w-full relative rounded-none p-0 border-b border-white/10',
              cursor: 'w-full bg-[#129DDB]',
              tab: 'max-w-fit px-5 h-16 text-[16px] font-medium text-[#BFBFBF]',
              tabContent: 'group-data-[selected=true]:text-white',
            }}
            color="primary"
            variant="underlined"
          >
            {itemsTab?.map((item) => {
              return (
                <Tab
                  key={item?.key}
                  className="py-6"
                  title={item?.icon ? item?.icon : item?.label}
                >
                  {item?.children && item?.children}
                </Tab>
              );
            })}
          </Tabs>
        </div>
      </div>
      <div className="col-span-3">
        <div className="w-full sticky top-0 max-h-[100dvh] overflow-x-hidden overflow-auto right-0 z-[10000] h-full bg-[#0F141A]">
          <div className="flex justify-between py-6 px-4 items-center border-l-1 border-b-1 border-b-[#D9D9D91A] border-l-[#D9D9D91A] sticky top-0 z-[1000] bg-gray">
            <div className="flex items-center gap-2">
              <Avatar src="/images/avatar-user.png" className="w-12 h-12" />
              <div className="flex flex-col gap-[2px]">
                <Text type="text-18-600" className="text-white">
                  Set certificate expiration date
                </Text>
                <Text type="font-14-400" className="text-white">
                  Set certificate expiration date
                </Text>
              </div>
            </div>
            <Button variant="light" size="sm" isIconOnly radius="full">
              <X color="#fff" />
            </Button>
          </div>
          <ListSection />
        </div>
      </div>
    </div>
  );
};
export default Lesson;
