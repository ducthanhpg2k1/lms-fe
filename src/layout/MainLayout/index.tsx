import { ReactNode } from 'react';
import MainHeader from './MainHeader';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen overflow-auto flex flex-col relative">
      <MainHeader />
      {children}
    </div>
  );
};
export default MainLayout;
