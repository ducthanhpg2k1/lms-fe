import { ReactNode } from 'react';
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen bg-primary h-screen overflow-auto flex flex-col relative">
      <MainHeader />
      <div className="w-full  py-10">
        <div className="max-w-[1440px] mx-auto">{children}</div>
      </div>
    </div>
  );
};
export default MainLayout;
