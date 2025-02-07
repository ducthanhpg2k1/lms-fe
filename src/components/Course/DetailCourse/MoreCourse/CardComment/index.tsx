import {
  useCommentCours,
  useReviewCours,
} from '@/components/Course/ListCourse/service';
import InputText from '@/components/UI/InputText';
import InputTextArena from '@/components/UI/InputTextArena';
import Text from '@/components/UI/Text';
import { toast } from '@/components/UI/Toast/toast';
import { useProfile } from '@/store/profile/useProfile';
import { getAvatar } from '@/utils/common';
import { Avatar, Button } from '@nextui-org/react';
import { Star } from '@phosphor-icons/react';
import { useState } from 'react';
import ReactStars from 'react-stars';

const CardComment = ({
  courseId,
  reloadListReview,
}: {
  reloadListReview: VoidFunction;
  courseId: string;
}) => {
  const [valueComment, setValueComment] = useState('');
  const { profile } = useProfile();
  const [valueRating, setValueRating] = useState<any>();
  const { run: runReviewCours, loading: loadingComment } = useReviewCours({
    onSuccess() {
      setValueComment('');
      setValueRating(0);
      toast.success('Review successfully');
      reloadListReview();
    },
    onError(err) {
      setValueComment('');
      setValueRating(0);
      toast.error(err?.message);
    },
  });

  const handleReview = () => {
    const body = {
      review: valueComment,
      rating: valueRating,
    };
    runReviewCours(body, courseId);
  };
  const ratingChanged = (rating: any) => {
    setValueRating(rating);
  };
  return (
    <div className="rounded p-4 bg-white/5 flex gap-6 items-start">
      <div>
        <Avatar
          src={profile?.avatar || getAvatar()}
          className="w-[50px] h-[50px]"
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <InputTextArena
          className="min-w-full"
          label="Comment"
          placeholder="Write a comment..."
          value={valueComment}
          onChange={(e: any) => setValueComment(e.target.value)}
          isBlack
        />
        <div>
          <Text type="font-16-600" className="text-white">
            Review
          </Text>
          <ReactStars
            count={5}
            color1="#D9D9D9"
            value={valueRating}
            color2="#F2B021"
            onChange={ratingChanged}
            size={28}
            className="flex items-center gap-1"
          />
        </div>
        <Button
          radius="full"
          isLoading={loadingComment}
          onClick={handleReview}
          className=" bg-main min-w-[142px] w-max min-h-[40px] rounded"
        >
          <Text type="font-16-500" className="text-white">
            Comment
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default CardComment;
