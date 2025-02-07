import Text from '@/components/UI/Text';
import Comment from './Comment';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import CardCourse from '@/components/CourseSearch/ListCourse/CardCourse';
import { getAccessToken } from '@/store/auth';
import {
  useCommentCours,
  useGetListComment,
  useGetListCourse,
  useLikeComment,
  useRemoveLikeComment,
} from '../../ListCourse/service';
import { useEffect } from 'react';
import CardComment from './CardComment';
import CustomButtonComment from '@/components/UI/CustomButtonComment';
import NoData from '@/components/ListCourse/NoData';

const MoreCourse = (props: any) => {
  const { author, courseId } = props;
  const token = getAccessToken();

  const { dataCourses, loadMore, noMore, reload } = useGetListCourse({
    pageSize: 3,
    authors: author?.id,
    externalIds: courseId,
  });
  const {
    dataListComment,
    run: runGetListComment,
    mutate,
  } = useGetListComment();

  const { run: runRemoveLikeComment } = useRemoveLikeComment({
    onSuccess(res) {
      console.log(res, 'res');

      const newData = dataListComment.data.map((item: any) => {
        if (item.id === res?.data?.courseCommentId) {
          const newReaction = item?.reactions?.filter(
            (reaction: any) => reaction?.id !== res?.data?.id
          );
          return {
            ...item,
            reactions: newReaction,
          };
        } else {
          return item;
        }
      });

      mutate({
        ...dataListComment,
        data: newData,
      });
    },
  });
  const { run: runLikeComment } = useLikeComment({
    onSuccess(res) {
      const newData = dataListComment.data.map((item: any) =>
        item.id === res?.data?.courseCommentId
          ? { ...item, reactions: [...item.reactions, res?.data] }
          : item
      );
      mutate({
        ...dataListComment,
        data: newData,
      });
    },
  });
  const handleLikeComment = (id: string) => {
    const body = {
      name: 'like',
      code: '1',
    };
    runLikeComment(body, id);
  };
  const handleUnLikeComment = (id: string) => {
    runRemoveLikeComment(id);
  };

  useEffect(() => {
    if (author?.id && courseId) {
      reload();
      runGetListComment(courseId);
    }
  }, [author, courseId]);

  const reloadListComment = () => {
    runGetListComment(courseId);
  };

  if (!author) return null;
  return (
    <div className="flex flex-col gap-10 pb-10 border-b-1 border-b-black-10">
      <div className="flex flex-col gap-6">
        <Text className="text-white" type="font-20-600">
          More Course By {author?.walletAddress}
        </Text>
        <div className="grid grid-cols-3 gap-6">
          {dataCourses.map((item: any, key: number) => {
            return <CardCourse noLike item={item} key={key} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <Text className="text-white" type="font-20-600">
          Comment
        </Text>

        {!token ? (
          <CustomButtonComment />
        ) : (
          <CardComment
            reloadListComment={reloadListComment}
            courseId={courseId}
          />
        )}

        <div className="flex flex-col gap-6">
          {dataListComment?.data?.length > 0 &&
            dataListComment?.data.map((item: any, index: number) => {
              return (
                <Comment
                  handleUnLikeComment={handleUnLikeComment}
                  handleLikeComment={handleLikeComment}
                  item={item}
                  key={index}
                />
              );
            })}

          {dataListComment?.data?.length === 0 && <NoData />}
          {/* {dataListComment?.meta?.totalRecord > 4 && (
            <Button
              variant="light"
              radius="full"
              className="hover:bg-main/20 w-max"
            >
              <div className="flex items-center gap-[2px]">
                <Text type="font-14-500" className="text-main">
                  See More
                </Text>
                <Image
                  src={'/icons/ic-arrow-drop-right-line.svg'}
                  width={20}
                  height={20}
                  alt=""
                />
              </div>
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default MoreCourse;
