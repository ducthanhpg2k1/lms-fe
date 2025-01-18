import SelectCustom from '@/components/UI/SelectCustom';
import Text from '@/components/UI/Text';
import { Radio, RadioGroup } from '@nextui-org/react';
import clsx from 'clsx';
import { Control, Controller } from 'react-hook-form';

const DATA_CONTENT = [
  {
    id: 1,
    content:
      'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    content:
      'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
  },
  {
    id: 3,
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.',
  },
  {
    id: 4,
    content:
      'Excepteur sint occaecat cupidatat non proident sunt in culpa quit',
  },
];

const ContenStep4 = ({ control }: { control: Control }) => {
  return (
    <div className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-3">
        <Text type="font-32-700" className="text-white">
          How much time can you spend creating your course per week?
        </Text>
        <Text type="font-16-400" className="text-black-6">
          There's no wrong answer. We can help you achieve your goals even if
          you don't have much time.
        </Text>
      </div>
      <Controller
        name="timeSpent"
        control={control}
        render={({ field }) => {
          return (
            <RadioGroup
              onValueChange={(value) => {
                field.onChange(value);
              }}
              value={field.value}
            >
              {DATA_CONTENT?.map((item) => {
                return (
                  <CustomRadio key={item.id} value={item.id}>
                    <Text
                      type="font-16-400"
                      className="text-white max-w-[760px]"
                    >
                      {item?.content}
                    </Text>
                  </CustomRadio>
                );
              })}
            </RadioGroup>
          );
        }}
      />
    </div>
  );
};
export default ContenStep4;

export const CustomRadio = (props: any) => {
  const { children, value, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      size="md"
      value={value}
      classNames={{
        base: clsx(
          'inline-flex min-w-[916px] m-0 bg-white/5 hover:bg-white/10 text-start items-centers',
          'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        ),
        control: 'bg-white',
        wrapper:
          '!border-1 !border-black-7 group-data-[selected=true]:!bg-main group-data-[selected=true]:!border-main',
      }}
    >
      {children}
    </Radio>
  );
};
