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
}
const SelectCustom = (props: SelectCustomProps) => {
  const { options, className = '', placeholder, rest } = props;
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
        trigger: 'bg-white/10 rounded min-h-[36px] border-1 border-[#F0F0F01A]',
      }}
      {...rest}
      selectorIcon={<IconSelector />}
    >
      {options.map((item) => (
        <SelectItem key={item.key}>{item.label}</SelectItem>
      ))}
    </Select>
  );
};
export default SelectCustom;

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
