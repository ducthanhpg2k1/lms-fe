import Text from '@/components/UI/Text';
import { TYPE_COURSE } from '@/utils/const';
import { Checkbox } from '@nextui-org/react';
import { File, MonitorPlay } from '@phosphor-icons/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const ChildSection = ({
  items,
  handleClickChildLesson,
  activeIdChildSection,
}: {
  items: any;
  activeIdChildSection: string;
  handleClickChildLesson: (id: string, type: TYPE_COURSE) => void;
}) => {
  const router = useRouter();

  const handleChangeCheckbox = (id: any) => {
    console.log(id, 'value');

  }
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
                    `Quizz ${item?.sttQuizz}`
                  );
                }
                const newPath = `/lesson/${router.query.id}?idChildSection=${item?.id}`;
                router.push(newPath);
                handleClickChildLesson(item?.id, item?.type);
              }}
              className={clsx(
                'flex flex-col gap-3 px-4 py-3 cursor-pointer hover:bg-main/50 transition-all',
                {
                  ['bg-main/50']: item?.id === activeIdChildSection,
                }
              )}
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  radius='sm'
                  onChange={() => handleChangeCheckbox(item?.id)}
                  classNames={{
                    wrapper: 'after:!bg-main before:!border-black-7',
                  }}
                />
                {item?.type === TYPE_COURSE.QUIZ ? (
                  <Text type="font-16-600" className="text-white">
                    {`Quizz ${item?.sttQuizz}. ${item?.title}`}
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
                        {`0 min`}
                      </Text>
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
export default ChildSection;
