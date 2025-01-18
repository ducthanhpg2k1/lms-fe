import InputText from '@/components/UI/InputText';
import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { Control, Controller } from 'react-hook-form';
import { useGetCategories } from '../service';

const ContenStep3 = ({ control }: { control: Control }) => {
  const { dataCategories } = useGetCategories();

  return (
    <div className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-3">
        <Text type="font-32-700" className="text-white">
          What category best fits the knowledge you'll share?
        </Text>
        <Text type="font-16-400" className="text-black-6">
          If you're not sure about the right category, you can change it later.
        </Text>
      </div>
      <Controller
        name="categoryId"
        control={control}
        render={({ field }) => (
          <SelectCustom
            placeholder="Choose a category"
            className="min-w-[620px]"
            isSelectSubmit
            onChange={field.onChange}
            value={field.value}
            options={
              dataCategories?.data?.map((item: any) => {
                return {
                  key: item?.id,
                  label: item?.name,
                };
              }) || []
            }
          />
        )}
      />
    </div>
  );
};
export default ContenStep3;
