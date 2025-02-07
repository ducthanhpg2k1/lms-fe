import IconLike from '@/components/UI/IconLike';
import IconComment from '@/components/UI/Icons/IconComment';
import IconLikedCourse from '@/components/UI/Icons/IconLikedCourse';
import Text from '@/components/UI/Text';
import { useProfile } from '@/store/profile/useProfile';
import { Avatar, Button } from '@nextui-org/react';
import Image from 'next/image';
import { useMemo } from 'react';
import Rater from 'react-rater';
import ReactStars from 'react-stars';
import { useAccount } from 'wagmi';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import IconLikeReview from '@/components/UI/Icons/IconLikeReview';
import IconUnLikeReview from '@/components/UI/Icons/IconUnLikeReview';
import IconLikedReview from '@/components/UI/Icons/IconLikedReview';

dayjs.extend(relativeTime);

const Comment = ({
  item,
  handleLikeReview,
}: // handleUnLikeComment,
{
  item: any;
  handleLikeReview: (id: string) => void;
  // handleUnLikeComment: (id: string) => void;
}) => {
  const { address } = useAccount();
  const { profile } = useProfile();

  const meLiked: string = useMemo(() => {
    return item?.reactions?.some(
      (reaction: any) => reaction?.userId === profile?.id
    );
  }, [item?.reactions]);

  const idLikedMe: string = useMemo(() => {
    return item?.reactions?.find(
      (reaction: any) => reaction?.userId === profile?.id
    )?.id;
  }, [item?.reactions]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Avatar src={item?.user?.avatar} className="w-[24px] h-[24px]" />

        <Text type="font-16-600" className="text-white">
          {item?.user?.firstName
            ? `${item?.user?.firstName} ${item?.user?.lastName}`
            : address}
        </Text>
      </div>
      <div className="flex items-center gap-2">
        <Text type="font-14-400" className="text-white">
          {item?.rating}
        </Text>
        <ReactStars
          count={5}
          color1="#D9D9D9"
          color2="#F2B021"
          value={item?.rating}
          size={14}
          className="flex items-center gap-1"
        />
        <Text type="font-14-500" className="text-black-7">
          {dayjs(item?.createdAt).fromNow(true)}
        </Text>
      </div>

      <Text type="font-16-400" className="text-black-3 w-9/12">
        {item?.review}
      </Text>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Button
            onClick={() => handleLikeReview(item?.id)}
            size="md"
            radius="full"
            isIconOnly
            variant="light"
          >
            {item?.reactions?.length > 0 ? (
              <IconLikedReview />
            ) : (
              <IconLikeReview />
            )}
          </Button>
          <Text type="font-14-500" className="text-black-7">
            {item?.reactions?.length}
          </Text>
        </div>
        <div className="flex items-center gap-1">
          <Button size="md" radius="full" isIconOnly variant="light">
            <IconUnLikeReview />
          </Button>
          <Text type="font-14-500" className="text-black-7">
            0
          </Text>
        </div>

        {/* <div className="flex items-center gap-1 cursor-pointer">
          <IconComment />
          <Text type="font-14-500" className="text-black-7">
            0
          </Text>
        </div> */}
        {/* <div
          onClick={() => {
            // if (meLiked) {
            //   handleUnLikeComment(idLikedMe);
            // } else {
            //   handleLikeComment(item?.id);
            // }
          }}
          className="flex items-center gap-1 cursor-pointer"
        >
          {meLiked ? <IconLikedCourse /> : <IconLike />}
          <Text type="font-14-500" className="text-black-7">
            {item?.reactions?.length}
          </Text>
        </div> */}
      </div>
    </div>
  );
};
export default Comment;
