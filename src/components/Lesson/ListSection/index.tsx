import AccordionCustom from '@/components/UI/AccordionCustom';
import Text from '@/components/UI/Text';

const ListSection = () => {
  return (
    <div className="flex flex-col gap-4 border-l-1 border-l-[#D9D9D91A]">
      <div className="mx-[-8px]">
        {Array.from({ length: 8 }).map((_, key) => {
          return (
            <AccordionCustom
              key={key}
              isSection
              title={
                <div className="flex flex-col gap-2">
                  <Text type="font-16-600" className="text-white">
                    {`Section ${
                      key + 1
                    }: Introduction - AWS Certified Solutions Architect
                    Associate`}
                  </Text>
                  <div className="flex items-center gap-3">
                    <Text type="font-14-400" className="opacity-50">
                      6/6
                    </Text>
                    <Text type="font-14-400" className="opacity-50">
                      13 min
                    </Text>
                  </div>
                </div>
              }
            >
              <></>
            </AccordionCustom>
          );
        })}
      </div>
    </div>
  );
};
export default ListSection;
