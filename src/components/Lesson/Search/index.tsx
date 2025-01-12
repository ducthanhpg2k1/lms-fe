import IconSearch from '@/components/UI/Icons/IconSearch';
import InputText from '@/components/UI/InputText';
import { Button } from '@nextui-org/react';

const Search = () => {
  return (
    <div className="pt-8 flex flex-col gap-6 px-[80px] w-10/12 mx-auto">
      <div className="flex items-center gap-2">
        <InputText isLesson placeholder="Search" />
        <Button
          isIconOnly
          className="rounded bg-gray min-h-[44px] min-w-[50px]"
        >
          <IconSearch />
        </Button>
      </div>
    </div>
  );
};
export default Search;
