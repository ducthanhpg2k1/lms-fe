import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { PencilSimpleLine } from '@phosphor-icons/react';

const ContentQuestions = ({
  questions,
  handleClickEditQuestion,
}: {
  handleClickEditQuestion: (values: any) => void;
  questions: any;
}) => {
  return (
    <div className="flex flex-col justify-between p-3  border-1 border-t-0 border-white/15 gap-3">
      {questions?.map((item: any, index: number) => {
        return (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Text type="font-14-700" className="text-white">
                {index + 1}.
              </Text>
              <div
                className="text-sm font-normal text-white/40"
                dangerouslySetInnerHTML={{ __html: item?.question }}
              />

              <Text type="font-14-400" className="text-white/40">
                1 answer test
              </Text>
            </div>
            <Button
              onClick={() => handleClickEditQuestion(item)}
              isIconOnly
              size="sm"
              radius="full"
              variant="light"
            >
              <PencilSimpleLine size={16} weight="light" />
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default ContentQuestions;
