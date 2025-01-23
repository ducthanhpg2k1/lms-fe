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
import { useRouter } from 'next/router';
import { useGetListSession } from '../CreateCourse/service';
import { useEffect, useState } from 'react';
import LoadingScreen from '../UI/LoadingScreen';
import { LessonContentType, TYPE_COURSE } from '@/utils/const';
import { useGetLessons, useGetQuizz, useProgressStatusQuizz } from './service';
import FormQuizz from './FormQuizz';
import Article from './Article';
import LoadingContainer from '../UI/LoadingContainer';
import { UserCourseProgressStatus } from '@/utils/common';
import { toast } from '../UI/Toast/toast';
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
  // {
  //   key: '3',
  //   label: 'Q&A',
  //   children: <QA />,
  // },
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
const Lesson = () => {
  const router = useRouter();
  const [typeLoadCotent, setTypeLoadContent] = useState<string>('');
  const [activeIdChildSection, setActiveIdChildSection] = useState<string>('');


  const {
    run: runGetListSession,
    data: dataListSession,
    loading: loadingListSession,
  } = useGetListSession({
    onSuccess: (res) => {
      const firstSection = res?.data?.[0];

      const newLessons = firstSection?.lessons?.map((lesson: any) => {
        return {
          ...lesson,
          type: TYPE_COURSE.LECTURE,
        };
      });

      const newQuizzes = firstSection?.quizzes?.map((quizz: any) => {
        return {
          ...quizz,
          type: TYPE_COURSE.QUIZ,
        };
      });
      const combinedArray = [...newLessons, ...newQuizzes];
      const firstId = combinedArray?.[0]?.id;
      if (combinedArray?.[0]?.type === TYPE_COURSE.LECTURE) {
        runGetLessons(firstId);
        setTypeLoadContent(TYPE_COURSE.LECTURE);
      } else {
        runGetQuizz(firstId);
        setTypeLoadContent(TYPE_COURSE.QUIZ);
      }
    },
  });

  const {
    dataLesson,
    run: runGetLessons,
    loading: loadingLesson,
  } = useGetLessons({
    onSuccess: () => {
      handleScrollTop();
    },
  });
  const {
    dataQuizz,
    run: runGetQuizz,
    loading: loadingQuizz,
  } = useGetQuizz({
    onSuccess: () => {
      handleScrollTop();
    },
  });

  const requestProgressStatusQuizz = useProgressStatusQuizz({
    onSuccess: (res: any) => {
      toast.success(res?.message);

      const allItems = dataListSession?.data.reduce(
        (result: any, section: any) => {
          const newLessons = section?.lessons?.map((lesson: any) => {
            return {
              ...lesson,
              type: TYPE_COURSE.LECTURE,
            };
          });

          const newQuizzes = section?.quizzes?.map((quizz: any) => {
            return {
              ...quizz,
              type: TYPE_COURSE.QUIZ,
            };
          });
          return result.concat(newLessons, newQuizzes);
        },
        []
      );
      const currentIndex = allItems.findIndex((item: any) => item.id === res?.data?.quizId);

      if (currentIndex !== -1 && currentIndex + 1 < allItems.length) {
        const nextItem = allItems[currentIndex + 1];
        handleClickChildLesson(nextItem?.id, nextItem?.type)

        const newPath = `/lesson/${router.query.id}?idChildSection=${nextItem?.id}`;
        router.push(newPath);

      }
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });


  useEffect(() => {
    if (router?.query?.id) {
      runGetListSession(router.query.id as string);
    }
  }, [router?.query?.id]);

  const handleScrollTop = () => {
    const element: any = document.querySelector('#topLesson');

    if (element) {
      element.style.scrollMarginTop = '120px';

      element.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        element.style.scrollMarginTop = '0';
      }, 1000);
    }
  };

  const handleClickChildLesson = (id: string, type: TYPE_COURSE) => {
    setTypeLoadContent(type);
    if (type === TYPE_COURSE.LECTURE && id) {
      runGetLessons(id);
    } else {
      runGetQuizz(id);
    }
  };

  useEffect(() => {
    if (router.query.idChildSection) {
      setActiveIdChildSection(router.query.idChildSection as string);
    }
  }, [router.query.idChildSection]);

  useEffect(() => {
    if (dataListSession?.data?.length > 0) {
      const firstSection = dataListSession?.data?.[0];
      const combinedArray = [
        ...(firstSection?.lessons || []),
        ...(firstSection?.quizzes || []),
      ];

      const firstId = combinedArray?.[0]?.id;

      if (firstId) {
        setActiveIdChildSection(firstId);
      }
    }
  }, [dataListSession?.data]);

  const handleSkipQuizz = (id: string) => {
    const allItems = dataListSession?.data.reduce(
      (result: any, section: any) => {
        const newLessons = section?.lessons?.map((lesson: any) => {
          return {
            ...lesson,
            type: TYPE_COURSE.LECTURE,
          };
        });

        const newQuizzes = section?.quizzes?.map((quizz: any) => {
          return {
            ...quizz,
            type: TYPE_COURSE.QUIZ,
          };
        });
        return result.concat(newLessons, newQuizzes);
      },
      []
    );
    const currentIndex = allItems.findIndex((item: any) => item.id === id);

    if (currentIndex !== -1 && currentIndex + 1 < allItems.length) {
      const nextItem = allItems[currentIndex + 1];
      handleClickChildLesson(nextItem?.id, nextItem?.type)

      const newPath = `/lesson/${router.query.id}?idChildSection=${nextItem?.id}`;
      router.push(newPath);

    }
  };
  const handleClickContinueQuizz = (id: string) => {
    const body = {
      status: UserCourseProgressStatus.COMPLETED
    }
    requestProgressStatusQuizz.run(body, id)

  };


  return (
    <div className="grid grid-cols-10 relative" id="topLesson">
      <div className="col-span-7 flex flex-col">
        {typeLoadCotent === TYPE_COURSE.QUIZ ? (
          <FormQuizz
            handleClickContinueQuizz={handleClickContinueQuizz}
            loading={loadingQuizz || requestProgressStatusQuizz?.loading}
            handleSkipQuizz={handleSkipQuizz}
            dataQuizz={dataQuizz?.data}
          />
        ) : (
          <>
            {dataLesson?.data?.contentType === LessonContentType.VIDEO && (
              <VideoSection
                loading={loadingLesson || loadingQuizz}
                info={dataLesson?.data?.info}
              />
            )}

            {dataLesson?.data?.contentType === LessonContentType.ARTICLE && (
              <Article
                loading={loadingLesson || loadingQuizz}
                content={dataLesson?.data}
              />
            )}
          </>
        )}

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
        <div className="w-full sticky top-0 max-h-[100dvh] overflow-hidden right-0 z-[10000] h-full bg-[#0F141A]">
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
          <ListSection
            activeIdChildSection={activeIdChildSection}
            loading={loadingListSession}
            handleClickChildLesson={handleClickChildLesson}
            sections={dataListSession?.data}
          />
        </div>
      </div>
    </div>
    // </LoadingScreen>
  );
};
export default Lesson;
