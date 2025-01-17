import { Input, InputProps } from '@nextui-org/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface InputTextProps extends InputProps {
  label?: string | ReactNode;
  placeholder?: string;
  className?: string;
  required?: boolean;
  errors?: any;
  readOnly?: boolean;
  defaultValue?: any;
  isDisabled?: boolean;
  type?: any;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full' | undefined;
  size?: 'sm' | 'md' | 'lg' | undefined;
  onBlur?: any;
  borderNone?: boolean;
  isError?: boolean;
  maxLength?: number;
  isFullName?: boolean;
  onChange?: any;
  isFilter?: boolean;
  isLesson?: boolean;
  isInput?: boolean;
  isInputSubmit?: boolean;
  inputDefault?: boolean;
}

const InputText = (props: InputTextProps) => {
  const {
    startContent,
    endContent,
    label,
    errors,
    placeholder,
    type,
    radius = 'full',
    className = '',
    borderNone = false,
    readOnly,
    isDisabled,
    required,
    defaultValue,
    onChange,
    onBlur,
    value,
    inputDefault,
    maxLength,
    isError,
    isInputSubmit,
    isFullName,
    isFilter,
    name,
    isLesson,
    isInput,
    ...rest
  } = props;
  return (
    <Input
      startContent={startContent}
      endContent={endContent}
      variant="bordered"
      type={type}
      maxLength={maxLength}
      autoComplete="off"
      onChange={onChange}
      isDisabled={isDisabled}
      readOnly={readOnly}
      defaultValue={defaultValue}
      radius={radius}
      className={clsx('rounded ', {
        [className]: !!className,
      })}
      label={''}
      classNames={{
        input: clsx(
          'text-black-5 font-roboto-flex text-[16px] data-[has-start-content=true]:ps-2',
          {
            'placeholder:text-white/20': isInputSubmit,
            'placeholder:!text-white/20': inputDefault,
          }
        ),

        inputWrapper: clsx(
          'px-2 border-1 rounded min-h-[40px] !border-gray-10 data-[hover=true]:!border-main group-data-[focus=true]:!border-main',
          {
            '!px-4 !bg-primary': isFilter,
            '!bg-transparent !border-white min-h-[40px] ': isLesson,
            '!bg-[#181F25] !py-[10px] !px-4  !border-none min-h-[44px] ':
              isInput,
            '!bg-[#181F25] !py-[12px] !px-[10px]  data-[hover=true]:!border-main min-h-[48px] ':
              isInputSubmit,
            '!bg-[#0A0F1580] !py-[12px] !px-[10px]  data-[hover=true]:!border-main min-h-[48px] ':
              inputDefault,
          }
        ),
      }}
      placeholder={placeholder}
      labelPlacement="outside"
      {...rest}
    />
  );
};
export default InputText;
