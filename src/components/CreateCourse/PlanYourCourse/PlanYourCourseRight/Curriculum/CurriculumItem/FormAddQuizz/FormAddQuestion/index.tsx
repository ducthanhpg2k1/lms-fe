import InputText from '@/components/UI/InputText';
import InputTextArena from '@/components/UI/InputTextArena';
import QuillEditor from '@/components/UI/QuillEditor';
import RadioCustom from '@/components/UI/RadioCustom';
import Text from '@/components/UI/Text';
import { Button, Radio } from '@nextui-org/react';
import { Trash } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

const FormAddQuestion = ({
  handleSaveAddQuestion,
  loading,
  valueQuestion,
}: {
  handleSaveAddQuestion: (values: any) => void;
  loading: boolean;
  valueQuestion?: any;
}) => {
  const { control, handleSubmit, setValue, watch, reset } = useForm<any>({
    defaultValues: {
      answers: [
        {
          id: '1',
          answer: '',
          isCorrect: false,
          explain: '',
        },
        {
          id: '2',
          answer: '',
          isCorrect: false,
          explain: '',
        },
        {
          id: '3',
          answer: '',
          isCorrect: false,
          explain: '',
        },
        {
          id: '4',
          answer: '',
          isCorrect: false,
          explain: '',
        },
      ],
    },
  });

  useEffect(() => {
    if (valueQuestion?.question) {
      reset({
        question: valueQuestion?.question,
        answers: valueQuestion?.answers,
      });
    }
  }, [valueQuestion?.question]);

  const { fields, remove } = useFieldArray({
    control,
    name: 'answers',
  });

  const onSubmit = (values: any) => {
    handleSaveAddQuestion(values);
  };

  const handleRadioChange = (index: number) => {
    const currentQuestions = watch('answers');

    const updatedQuestions = currentQuestions.map((question: any, i: any) => ({
      ...question,
      isCorrect: i === index,
    }));

    setValue('answers', updatedQuestions);
  };

  return (
    <form>
      <div className="flex py-3 px-4  flex-col border-1 border-t-0 border-white/15  gap-8">
        <Controller
          name={`question`}
          control={control}
          render={({ field }) => (
            <QuillEditor
              onChange={field.onChange}
              value={field.value}
              inputQuizz
              label="Ask a question"
            />
          )}
        />
        <div className="flex flex-col gap-6">
          {fields?.map((field, index) => {
            return (
              <div
                key={field?.id}
                className="flex justify-between items-start gap-2"
              >
                <Controller
                  name={`answers.${index}.isCorrect`}
                  control={control}
                  render={({ field }) => (
                    <RadioCustom
                      onChange={() => handleRadioChange(index)}
                      value={field.value}
                    />
                  )}
                />
                <div className="flex flex-col gap-2 w-full">
                  <Controller
                    name={`answers.${index}.answer`}
                    control={control}
                    render={({ field }) => (
                      <QuillEditor
                        inputQuizz
                        placeholder="Add answer"
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                  />
                  <Controller
                    name={`answers.${index}.explain`}
                    control={control}
                    render={({ field }) => (
                      <InputText
                        inputDefault
                        maxLength={600}
                        onChange={field.onChange}
                        value={field.value}
                        placeholder="Explain why this is or is not the best answer."
                      />
                    )}
                  />
                </div>
                <div className="w-[50px]">
                  {index !== 0 && (
                    <div className="flex items-end justify-end">
                      <Button
                        onClick={() => remove(index)}
                        isIconOnly
                        radius="full"
                        variant="light"
                      >
                        <Trash size={20} weight="light" color="#DF2638" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-end justify-end">
          <Button
            isLoading={loading}
            onClick={handleSubmit(onSubmit)}
            className="bg-main rounded min-w-[100px]"
          >
            <Text type="font-14-400" className="text-white">
              Save
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
};
export default FormAddQuestion;
