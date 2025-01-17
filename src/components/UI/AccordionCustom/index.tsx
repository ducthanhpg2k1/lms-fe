import { Accordion, AccordionItem } from '@nextui-org/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

export default function AccordionCustom({
  children,
  title,
  isSection = false,
  isCreateCourse,
}: {
  title: string | ReactNode;
  children: ReactNode;
  isSection?: boolean;
  isCreateCourse?: boolean;
}) {
  return (
    <Accordion
      defaultExpandedKeys={isCreateCourse ? [] : ['1']}
      itemClasses={{
        content: ['px-4 pt-0 pb-4'],
        heading: clsx('px-4', {
          '!h-[50px]': isCreateCourse,
        }),
        base: clsx('bg-white/5 rounded border-1 relative border-[#D9D9D91A]', {
          '!bg-transparent rounded-none': isSection,
          '!bg-transparent !border-white/15': isCreateCourse,
        }),
      }}
    >
      <AccordionItem
        key="1"
        classNames={{
          indicator: 'data-[open=true]:rotate-180',
        }}
        indicator={<IconArrowUp />}
        aria-label="Accordion 1"
        title={title}
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}

export const IconArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="rotate-[360deg]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 10.828L7.04999 15.778L5.63599 14.364L12 8L18.364 14.364L16.95 15.778L12 10.828Z"
        fill="white"
      />
    </svg>
  );
};
