import AccordionCustom from '@/components/UI/AccordionCustom';
import InputText from '@/components/UI/InputText';
import TagCount from '@/components/UI/TagCount';
import Text from '@/components/UI/Text';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from '@nextui-org/react';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

const DATA_RATE = [
  {
    id: '1',
    from_rate: 'From 4.5',
    total: '(1657)',
    value: 4.5,
  },
  {
    id: '2',
    from_rate: 'From 4.0',
    total: '(960)',
    value: 4,
  },
  {
    id: '3',
    from_rate: 'From 3.5',
    total: '(350)',
    value: 3.5,
  },
  {
    id: '4',
    from_rate: 'From 3.0',
    total: '(142)',
    value: 3,
  },
];
const DATA_PRACTICAL = [
  {
    id: '1',
    label: 'Multiple choice',
  },
  {
    id: '2',
    label: 'Coding exercises',
  },
  {
    id: '3',
    label: 'Practice test',
  },
];
const DATA_LANGUAGE = [
  {
    id: '1',
    label: 'English',
  },
  {
    id: '2',
    label: 'Greece',
  },
  {
    id: '3',
    label: 'Saudi Arabia',
  },
  {
    id: '4',
    label: 'Åland Islands',
  },

  {
    id: '5',
    label: 'Bahrain',
  },
  { id: '6', label: 'Portuguese' },
  { id: '7', label: 'Japanese' },
  { id: '8', label: 'Korean' },
];
const initialItemsLanguage = 5;

const FilterCourse = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef: any = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expanded, DATA_LANGUAGE]);
  return (
    <div className="flex flex-col gap-5 mx-[-8px]">
      <AccordionCustom
        title={
          <Text type="font-18-600" className="text-white">
            Rating
          </Text>
        }
      >
        <RadioGroup
          classNames={{
            wrapper: 'gap-4',
          }}
        >
          {DATA_RATE?.map((item) => {
            return (
              <Radio
                classNames={{
                  base: 'gap-1',
                  control: 'bg-white',
                  wrapper:
                    '!border-1 !border-black-7 group-data-[selected=true]:!bg-main group-data-[selected=true]:!border-main',
                }}
                value={item?.id}
              >
                <div className="flex items-center gap-2">
                  <Rater total={5} rating={item?.value} />
                  <Text className="text-white" type="font-14-400">
                    {item?.from_rate}
                  </Text>
                  <Text className="text-black-7" type="font-14-400">
                    {item?.total}
                  </Text>
                </div>
              </Radio>
            );
          })}
        </RadioGroup>
      </AccordionCustom>
      <AccordionCustom
        title={
          <div className="flex items-center gap-2">
            <Text type="font-18-600" className="text-white">
              Language
            </Text>
            <TagCount count={2} />
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <InputText isFilter placeholder="Search..." />
          <div className="flex flex-col gap-2">
            <CheckboxGroup size="lg" radius="sm">
              {DATA_LANGUAGE?.slice(0, initialItemsLanguage)?.map((item) => {
                return (
                  <Checkbox
                    classNames={{
                      wrapper: 'me-3 after:!bg-main before:!border-black-7',
                      base: '',
                    }}
                    value={item?.id}
                  >
                    <Text type="font-15-500" className="text-white">
                      {item?.label}
                    </Text>
                  </Checkbox>
                );
              })}
            </CheckboxGroup>

            <div
              ref={contentRef}
              style={{
                height: expanded ? `${contentHeight}px` : '0px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className={clsx('overflow-hidden will-change-transform')}
            >
              <div
                className={clsx(
                  'transition-transform duration-400',
                  expanded
                    ? 'translate-y-0 scale-y-100'
                    : '-translate-y-2 scale-y-95'
                )}
              >
                <CheckboxGroup size="lg" radius="sm">
                  {DATA_LANGUAGE?.slice(initialItemsLanguage)?.map((item) => {
                    return (
                      <Checkbox
                        classNames={{
                          wrapper: 'me-3 after:!bg-main before:!border-black-7',
                          base: '',
                        }}
                        value={item?.id}
                      >
                        <Text type="font-15-500" className="text-white">
                          {item?.label}
                        </Text>
                      </Checkbox>
                    );
                  })}
                </CheckboxGroup>
              </div>
            </div>
          </div>

          <Button
            variant="light"
            size="sm"
            onClick={() => setExpanded(!expanded)}
            radius="full"
            className={clsx('w-max hover:bg-main/20', {
              ['mt-[-8px]']: !expanded,
            })}
          >
            <div className="flex items-center gap-[2px]">
              <Text type="font-14-500" className="text-main">
                {expanded ? 'See Less' : 'See More'}
              </Text>
              <Image
                src={'/icons/ic-arrow-drop-right-line.svg'}
                width={20}
                className={clsx('transition-transform duration-300', {
                  ['rotate-180']: expanded,
                })}
                height={20}
                alt=""
              />
            </div>
          </Button>
        </div>
      </AccordionCustom>
      <AccordionCustom
        title={
          <div className="flex items-center gap-2">
            <Text type="font-18-600" className="text-white">
              Practical
            </Text>
            <TagCount count={1} />
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <InputText isFilter placeholder="Search..." />
          <CheckboxGroup size="lg" radius="sm">
            {DATA_PRACTICAL?.map((item) => {
              return (
                <Checkbox
                  classNames={{
                    wrapper: 'me-3 after:!bg-main before:!border-black-7',
                    base: '',
                  }}
                  value={item?.id}
                >
                  <Text type="font-15-500" className="text-white">
                    {item?.label}
                  </Text>
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>
      </AccordionCustom>
      <AccordionCustom
        title={
          <Text type="font-18-600" className="text-white">
            Video duration
          </Text>
        }
      >
        <div className="flex flex-col gap-4">
          <InputText isFilter placeholder="Search..." />
          <CheckboxGroup size="lg" radius="sm">
            {DATA_PRACTICAL?.map((item) => {
              return (
                <Checkbox
                  classNames={{
                    wrapper: 'me-3 after:!bg-main before:!border-black-7',
                    base: '',
                  }}
                  value={item?.id}
                >
                  <Text type="font-15-500" className="text-white">
                    {item?.label}
                  </Text>
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>
      </AccordionCustom>
    </div>
  );
};
export default FilterCourse;
