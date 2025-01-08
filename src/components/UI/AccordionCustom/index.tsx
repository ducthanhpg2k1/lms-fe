import { Accordion, AccordionItem } from '@nextui-org/react';
import { ReactNode } from 'react';
import Text from '../Text';

export default function AccordionCustom({
  children,
  title,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Accordion
      defaultExpandedKeys={['1']}
      itemClasses={{
        base: 'bg-white/5 px-4 pb-5 rounded border-1 border-[#D9D9D91A]',
      }}
    >
      <AccordionItem
        key="1"
        indicator={<IconArrowUp />}
        aria-label="Accordion 1"
        title={
          <Text type="font-18-600" className="text-white">
            {title}
          </Text>
        }
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}

const IconArrowUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="rotate-[90deg]"
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
