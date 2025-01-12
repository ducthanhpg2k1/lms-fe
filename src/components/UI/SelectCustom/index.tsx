import { Select, SelectItem, SelectProps } from '@nextui-org/react';
import clsx from 'clsx';

interface IOptions {
  label: string;
  key: string | number;
}

interface SelectCustomProps {
  options: IOptions[];
  placeholder?: string;
  className?: string;
  rest?: any;
  isLesson?: boolean;
}
const SelectCustom = (props: SelectCustomProps) => {
  const {
    options,
    className = '',
    isLesson = false,
    placeholder,
    rest,
  } = props;
  return (
    <Select
      className={clsx('', {
        [className]: !!className,
      })}
      label=""
      labelPlacement="outside"
      radius="sm"
      placeholder={placeholder}
      classNames={{
        value: '!text-[14px] text-black-6 font-medium',
        trigger: clsx(
          'bg-white/10 rounded min-h-[36px] border-1 border-[#F0F0F01A] group-data-[focus=true]:!border-main',
          {
            '!bg-transparent border-white min-h-[40px] hover:!border-main transition-all':
              isLesson,
          }
        ),
      }}
      {...rest}
      selectorIcon={isLesson ? <IconArrowDown /> : <IconSelector />}
    >
      {options.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
};
export default SelectCustom;

const IconArrowDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M9.99981 10.1434L12.3565 7.78589L13.5356 8.96422L9.99981 12.5001L6.46398 8.96422L7.64314 7.78589L9.99981 10.1434Z"
        fill="white"
      />
    </svg>
  );
};

const IconSelector = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <g clip-path="url(#clip0_2001_1904)">
        <path d="M5 7.66675L1 3.66675H9L5 7.66675Z" fill="#8C8C8C" />
      </g>
      <defs>
        <clipPath id="clip0_2001_1904">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
