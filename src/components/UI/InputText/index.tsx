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
    maxLength,
    isError,
    isFullName,
    name,
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
      isDisabled={isDisabled}
      readOnly={readOnly}
      defaultValue={defaultValue}
      radius={radius}
      className={clsx('rounded-full', {
        [className]: !!className,
      })}
      label={''}
      classNames={{
        inputWrapper: clsx(
          'px-2 border-1 !border-gray-10 data-[hover=true]:!border-green group-data-[focus=true]:!border-green',
          {
            // '!border-red-500': errors?.[name]?.message || isError,
            // 'px-5 border-1 bg-[#82828240] border-solid !border-[#b4bac5] data-[hover=true]:!border-primary group-data-[focus=true]:!border-primary':
            //   isDisabled,
            // 'border-white !shadow-none': borderNone,
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
