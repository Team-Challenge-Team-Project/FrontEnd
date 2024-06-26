import { Outlet } from 'react-router-dom';
import { Header } from '../common/header/header';
import { Footer } from '../common/footer/footer';

export const Root = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
