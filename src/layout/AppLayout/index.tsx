import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { getAccessToken } from '@/store/auth';
import { useEffect } from 'react';
import { useProfileInitial } from '@/store/profile/useProfileInitial';

const AppLayout = ({ children }: any) => {
  const { requestGetProfile } = useProfileInitial();

  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      requestGetProfile();
    }
  }, [token]);
  return (
    <>
      <main>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
      </main>
    </>
  );
};

export default AppLayout;
