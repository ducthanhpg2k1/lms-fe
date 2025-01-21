import Text from '@/components/UI/Text';
import { LessonContentType, TYPE_COURSE } from '@/utils/const';
import { File, PlayCircle } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import FormAddArticle from '../FormAddArticle';
import FormAddVideo from '../FormAddVideo';

const FormAddLecture = ({
  handleSaveArticle,
  loading,
  valueContent,
}: {
  handleSaveArticle: (value: string) => void;
  loading: boolean;
  valueContent?: string;
}) => {
  const [typeAddAction, setTypeAddAction] = useState<string>('');

  const handleClickArticle = () => {
    setTypeAddAction(LessonContentType.ARTICLE);
  };

  const handleClickVideo = () => {
    setTypeAddAction(LessonContentType.VIDEO);
  };

  useEffect(() => {
    if (valueContent) {
      setTypeAddAction(LessonContentType.ARTICLE);
    }
  }, [valueContent]);
  return (
    <>
      {typeAddAction ? (
        <>
          {typeAddAction === LessonContentType.ARTICLE && (
            <FormAddArticle
              valueContent={valueContent}
              loading={loading}
              handleSaveArticle={(value) => handleSaveArticle(value)}
            />
          )}
          {typeAddAction === LessonContentType.VIDEO && <FormAddVideo />}
        </>
      ) : (
        <div className="flex text-center justify-center py-3 flex-col border-1 border-t-0 border-white/15 items-center gap-3">
          <Text className="text-black-7 px-20" type="font-14-400">
            Select the primary content type. Files and links can be added as
            resources. Learn about content types.
          </Text>
          <div className="flex items-center gap-6">
            <div
              onClick={handleClickVideo}
              className="flex hover:opacity-80 transition-all flex-col cursor-pointer items-center border-1 border-white/20 min-w-[70px]"
            >
              <div className="border-b w-full items-center justify-center flex py-2 border-b-white/20">
                <PlayCircle size={32} color="#8C8C8C" weight="fill" />
              </div>

              <div className="p-2 bg-slate-600 w-full text-center">
                <Text>Video</Text>
              </div>
            </div>
            <div
              onClick={handleClickArticle}
              className="flex transition-all hover:opacity-80 flex-col cursor-pointer items-center border-1 border-white/20 min-w-[70px]"
            >
              <div className="border-b w-full items-center justify-center flex py-2 border-b-white/20">
                <File size={32} color="#8C8C8C" weight="bold" />
              </div>

              <div className="p-2 bg-slate-600 w-full text-center">
                <Text>Article</Text>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormAddLecture;
