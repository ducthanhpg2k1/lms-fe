import { ReactElement } from 'react';

import MainLayout from '@/layout/MainLayout';

const HomePage = () => {
  return <>Home</>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export default HomePage;
