import { Outlet, useLocation } from 'react-router-dom';
import Header from 'widgets/Header';
import Sidebar from 'widgets/Sidebar';
import { OpenTask } from 'entities/tasks';
import Footer from 'widgets/footer';
import Navbar from 'widgets/Navbar';
import EmployeeList from 'components/EmployeeList';
import style from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.App}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
