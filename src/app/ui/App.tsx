import { Outlet, useLocation } from 'react-router-dom';
import Header from 'widgets/Header';
import logo from 'shared/icons/alfa-logo.svg';
import Navbar from 'widgets/Navbar';
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      <Header />
      <main>
        <Navbar />
        <Outlet />
      </main>

      <footer style={{ height: 'var(--header-height)' }}>
        <p>footer</p>
        <img src={logo} className={style.Applogo} alt="logo" />
      </footer>
    </div>
  );
};

export default App;
