import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';

const ContenStep2 = () => {
  return (
    <div className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-3">
        <Text type="font-32-700" className="text-white">
          How about a working title?
        </Text>
        <Text type="font-16-400" className="text-black-6">
          It's ok if you can't think of a good title now. You can change it
          later.
        </Text>
      </div>
      <InputText
        maxLength={60}
        className="min-w-[620px]"
        placeholder="Type"
        endContent={
          <Text type="font-16-400" className="text-white/20">
            60
          </Text>
        }
        isInputSubmit
      />
    </div>
  );
};
export default ContenStep2;
