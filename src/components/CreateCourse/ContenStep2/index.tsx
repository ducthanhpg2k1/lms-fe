import InputText from '@/components/UI/InputText';
import Text from '@/components/UI/Text';
import { Control, Controller } from 'react-hook-form';

const ContenStep2 = ({ control }: { control: Control }) => {
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
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <InputText
            maxLength={60}
            className="min-w-[620px]"
            placeholder="Type"
            value={field.value}
            onChange={field.onChange}
            isInputSubmit
          />
        )}
      />
    </div>
  );
};
export default ContenStep2;
