import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
const AppLayout = ({ children }: any) => {
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
