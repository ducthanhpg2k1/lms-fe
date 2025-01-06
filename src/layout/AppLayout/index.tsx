import { NextUIProvider } from "@nextui-org/react";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <main>
        <NextUIProvider>{children}</NextUIProvider>
      </main>
    </>
  );
};

export default AppLayout;
