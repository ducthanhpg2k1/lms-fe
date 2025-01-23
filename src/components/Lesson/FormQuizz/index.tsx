import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import FormStartTakingTest from './FormStartTakingTest';
import LoadingContainer from '@/components/UI/LoadingContainer';

const FormQuizz = ({
  startTakingTest,
  handleStartTakingTheTest,
  dataQuizz,
  handleClickContinueQuizz,
  handleSkipQuizz,
  loading,
}: {
  startTakingTest: any;
  handleStartTakingTheTest: VoidFunction;
  handleClickContinueQuizz: (id: string) => void;
  loading: boolean;
  dataQuizz: any;
  handleSkipQuizz: any;
}) => {
  const sttQuizz = localStorage.getItem('titleQuizz');


  return (
    <div className="relative">
      <LoadingContainer loading={loading} />

      {startTakingTest ? (
        <FormStartTakingTest
          handleClickContinueQuizz={handleClickContinueQuizz}
          dataQuizz={dataQuizz}
        />
      ) : (
        <div className="w-full min-h-[566px] pt-20 p-12">
          <div className="w-8/12 mx-auto flex items-start text-start flex-col gap-6">
            <Text className="text-white" type="font-32-700">
              {dataQuizz?.title}
            </Text>
            <div className="flex items-center gap-3">
              <Text className="text-black-6" type="font-18-600">
                {sttQuizz}
              </Text>
              <div className="w-[1px] h-4 bg-black-6" />
              <Text className="text-black-6" type="font-18-600">
                {`${dataQuizz?.questions?.length} question`}
              </Text>
            </div>
            <Text className="text-white" type="font-16-400">
              {dataQuizz?.description}
            </Text>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleStartTakingTheTest}
                className="bg-main w-max min-h-[45px] rounded min-w-[200px]"
              >
                <Text className="text-white" type="font-16-400">
                  Start taking the test
                </Text>
              </Button>
              <Button
                onClick={() => handleSkipQuizz(dataQuizz?.id)}
                variant="light"
                className="w-max min-h-[45px] rounded min-w-[150px]"
              >
                <Text className="text-white" type="font-16-400">
                  Skip the quizz
                </Text>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default FormQuizz;
