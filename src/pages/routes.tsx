import { Route, Routes } from 'react-router-dom';

import Header from 'src/lib/components/Header';

import OptimizerPage from './optimizer';

const Router = () => {
  return (
    <>
      <Header />
      <Routes location={location}>
        <Route path="/*" element={<OptimizerPage />} />
      </Routes>
    </>
  );
};

export default Router;
