import { useCommentCours } from '@/components/Course/ListCourse/service';
import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';
import { toast } from '@/components/UI/Toast/toast';
import { useProfile } from '@/store/profile/useProfile';
import { getAvatar } from '@/utils/common';
import { Avatar, Button } from '@nextui-org/react';
import Image from 'next/image';
import { useState } from 'react';

const CardComment = ({
  courseId,
  reloadListComment,
}: {
  reloadListComment: VoidFunction;
  courseId: string;
}) => {
  const [valueComment, setValueComment] = useState('');
  const { profile } = useProfile();
  const { run: runCommentCours, loading: loadingComment } = useCommentCours({
    onSuccess(res) {
      setValueComment('');
      toast.success('Comment successfully');
      reloadListComment();
    },
  });

  const handleComment = (value: string) => {
    const body = {
      content: value,
    };
    runCommentCours(body, courseId);
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
        <InputText
          className="min-w-full"
          placeholder="Write a comment..."
          value={valueComment}
          onChange={(e: any) => setValueComment(e.target.value)}
          isBlack
        />

        <Button
          radius="full"
          isLoading={loadingComment}
          onClick={() => handleComment(valueComment)}
          className=" bg-main min-w-[92px] w-max min-h-[40px] rounded"
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
