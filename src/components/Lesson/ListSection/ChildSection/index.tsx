import Text from '@/components/UI/Text';
import { TYPE_COURSE } from '@/utils/const';
import { File, MonitorPlay } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const ChildSection = ({
  items,
  handleClickChildLesson,
  firstId,
}: {
  items: any;
  firstId: any;
  handleClickChildLesson: (id: string, type: TYPE_COURSE) => void;
}) => {
  const [activeChildSection, setActiveChilSection] = useState(false);

  useEffect(() => {
    if (firstId) {
      setActiveChilSection(firstId);
    }
  }, [firstId]);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        {items?.map((item: any, index: number) => {
          const minutes = Math.floor(item?.info?.duration / 60);
          const seconds = Math.floor(item?.info?.duration % 60);
          const formattedTime = `${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          return (
            <div
              key={item?.id}
              onClick={() => {
                if (item?.type === TYPE_COURSE.QUIZ) {
                  localStorage.setItem(
                    'titleQuizz',
                    `Multiple choice ${item?.sttQuizz}`
                  );
                }
                setActiveChilSection(item?.id);
                handleClickChildLesson(item?.id, item?.type);
              }}
              className={clsx(
                'flex flex-col gap-3 px-4 py-3 cursor-pointer hover:bg-main/50 transition-all',
                {
                  ['bg-main/50']: item?.id === activeChildSection,
                }
              )}
            >
              <div className="flex items-center gap-3">
                {item?.type === TYPE_COURSE.QUIZ ? (
                  <Text type="font-16-600" className="text-white">
                    {`Multiple choice ${item?.sttQuizz}. ${item?.title}`}
                  </Text>
                ) : (
                  <Text type="font-16-600" className="text-white">
                    {`${index + 1}. ${item?.title}`}
                  </Text>
                )}
              </div>
              {item?.type === TYPE_COURSE.LECTURE && (
                <div className="flex items-center gap-2">
                  {item?.info?.duration ? (
                    <>
                      <MonitorPlay size={20} className="text-black-5" />
                      <Text type="font-14-400" className="text-black-5">
                        {formattedTime}
                      </Text>
                    </>
                  ) : (
                    <>
                      <File size={20} className="text-black-5" />
                      <Text type="font-14-400" className="text-black-5">
                        {`0 minute`}
                      </Text>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* <CheckboxGroup size="lg" radius="sm">
        {items?.map((item: any) => {
          return (
            <Checkbox
              classNames={{
                wrapper: 'me-3 after:!bg-main before:!border-black-7',
                base: 'items-start',
              }}
              value={item?.id}
            >
              <div className="flex flex-col gap-3 mt-[-4px] mb-2">
                <Text type="font-15-500" className="text-white">
                  {item?.title}
                </Text>
                <Text type="font-15-500" className="text-white">
                  {item?.title}
                </Text>
              </div>
            </Checkbox>
          );
        })}
      </CheckboxGroup> */}
    </div>
  );
};
export default ChildSection;
