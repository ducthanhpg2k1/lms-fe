import Text from '@/components/UI/Text';

const MENUS = [
  {
    key: 1,
    label: 'My learning',
  },
  {
    key: 2,
    label: 'Wish list',
  },
  {
    key: 3,
    label: 'Teach',
  },
];

const Menubar = () => {
  return (
    <div className="flex items-center gap-8">
      {MENUS?.map((item) => {
        return (
          <Text
            key={item?.key}
            className="cursor-pointer hover:text-main text-black-5"
            type="font-16-600"
          >
            {item?.label}
          </Text>
        );
      })}
    </div>
  );
};
export default Menubar;
