import { useState } from 'react';
import HeaderCourse from './HeaderCourse';
import Footer from './Footer';
import ContenStep1 from './ContenStep1';
import ContenStep2 from './ContenStep2';
import ContenStep3 from './ContenStep3';
import ContenStep4 from './ContenStep4';
import { useRouter } from 'next/router';

const CreateCourse = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const handleClickNextStep = (step: number) => {
    if (step === 4) {
      router.push('/create-course/1');
      return;
    }
    setStep(step + 1);
  };
  const handlePreviousStep = (step: number) => {
    setStep(step - 1);
  };

  return (
    <div className="bg-primary w-screen h-[100dvh] overflow-auto">
      <HeaderCourse currentStep={step} />
      <div className="flex justify-center min-h-[calc(100dvh-82px-96px)] pt-[92px]">
        {step === 1 && <ContenStep1 />}
        {step === 2 && <ContenStep2 />}
        {step === 3 && <ContenStep3 />}
        {step === 4 && <ContenStep4 />}
      </div>
      <Footer
        handlePreviousStep={handlePreviousStep}
        handleClickNextStep={handleClickNextStep}
        currentStep={step}
      />
    </div>
  );
};
export default CreateCourse;
