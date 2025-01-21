import Text from '@/components/UI/Text';
import { ROUTE_PATH } from '@/utils/const';
import clsx from 'clsx';
import { useRouter } from 'next/router';

const MENUS = [
  {
    key: 1,
    label: 'My learning',
    href: '',
  },
  {
    key: 2,
    label: 'Wish list',
    href: '',
  },
  {
    key: 3,
    label: 'Teach',
    href: ROUTE_PATH.LIST_COURSE,
  },
];

const Menubar = () => {
  const router = useRouter();
  const handleClickRedirectPage = (key: number) => {
    if (key === 3) {
      router.push('/list-course');
    }
  };
  return (
    <div className="flex items-center gap-8">
      {MENUS?.map((item) => {
        return (
          <Text
            key={item?.key}
            onClick={() => handleClickRedirectPage(item?.key)}
            className={clsx(
              'cursor-pointer transition-all hover:text-main text-black-5 ',
              {
                'text-main font-bold': item.href === router.pathname,
              }
            )}
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
