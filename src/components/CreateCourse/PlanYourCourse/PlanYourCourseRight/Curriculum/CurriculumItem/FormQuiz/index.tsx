import InputText from '@/components/UI/InputText';
import QuillEditor from '@/components/UI/QuillEditor';
import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

const FormQuiz = ({
  handleCancel,
  handleAdd,
  loading,
}: {
  handleAdd: (values: { title: string; description: string }) => void;
  handleCancel: VoidFunction;
  loading: boolean;
}) => {
  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setValueDescription] = useState('');

  return (
    <div className="border-1 bg-transparent mx-[6px] border-white/15 rounded py-4 px-3 flex flex-col gap-4 w-full">
      <div className="flex items-start gap-2">
        <div className="w-[100px]">
          <Text type="font-16-700" className="text-white">
            New quiz:
          </Text>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <InputText
            maxLength={160}
            endContent
            classInputWrapper="!min-h-[34px]"
            onChange={(e: any) => setValueTitle(e.target.value)}
            className="w-full"
            placeholder="Enter title"
            inputDefault
          />
          <QuillEditor
            onChange={(value: any) => setValueDescription(value)}
            placeholder="Description..."
            inputDefault
          />
        </div>
      </div>
      <div className="flex justify-end items-end">
        <div className="flex items-center gap-3">
          <Button onClick={handleCancel} variant="light" className="rounded">
            <Text type="font-16-400">Cancel</Text>
          </Button>
          <Button
            onClick={() =>
              handleAdd({ title: valueTitle, description: valueDescription })
            }
            isLoading={loading}
            className="rounded bg-main"
          >
            <Text type="font-16-400">Add quizz</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormQuiz;
