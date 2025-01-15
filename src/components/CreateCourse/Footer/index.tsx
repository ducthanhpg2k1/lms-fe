import Text from '@/components/UI/Text';
import { Button } from '@nextui-org/react';

const Footer = ({
  currentStep,
  handleClickNextStep,
  handlePreviousStep,
}: {
  handleClickNextStep: (step: number) => void;
  handlePreviousStep: (step: number) => void;

  currentStep: number;
}) => {
  return (
    <div className="py-[26px] px-[40px] min-h-[96px] bg-[#1D2228] w-full flex justify-between items-center">
      {currentStep === 1 && (
        <div className="flex justify-center items-center w-full">
          <Button
            onClick={() => handleClickNextStep(currentStep)}
            className="bg-main rounded py-[10px] px-6"
          >
            <Text type="font-16-700" className="text-white">
              Continue
            </Text>
          </Button>
        </div>
      )}
      {currentStep !== 1 && (
        <>
          <Button
            onClick={() => handlePreviousStep(currentStep)}
            className="bg-transparent border-1 border-main rounded py-[10px] px-6"
          >
            <Text type="font-16-700" className="text-white">
              Previous
            </Text>
          </Button>
          <Button
            onClick={() => handleClickNextStep(currentStep)}
            className="bg-main rounded py-[10px] px-6"
          >
            <Text type="font-16-700" className="text-white">
              Continue
            </Text>
          </Button>
        </>
      )}
    </div>
  );
};
export default Footer;
