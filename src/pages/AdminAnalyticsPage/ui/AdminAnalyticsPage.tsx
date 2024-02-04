import { useLocation } from "react-router-dom";
import Analytics from "widgets/Analytics";
import ChartIcon from 'shared/icons/chart-with-up-arrow.svg?react';
import CrosshairIcon from 'shared/icons/crosshair-icon.svg?react';
import Navbar, { NavbarLink } from "widgets/Navbar";
import Counter from "widgets/TaskCounter/ui/Counter/ui/Counter";
import TaskCounter from "widgets/TaskCounter/ui/TaskCounter";
import { Typography } from "@alfalab/core-components-typography";
import style from "./AdminAnalytics.module.scss"


const AdminAnalyticsPage = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar >
        <NavbarLink to="/Admin" text="ИПР" Icon={CrosshairIcon} />
        <NavbarLink to="/Admin/Analytics" text="Аналитика" Icon={ChartIcon} />
      </Navbar>
      <section className={style.AdminAnalyticsPage}>
        <Typography.Title tag="h2" className={style.h2}>Аналитика</Typography.Title>
        <TaskCounter>
          <Counter title="Завершенные задачи" quantity="Большой" />
          <Counter title="Просроченные задачи" quantity="1" />
          <Counter title="Всего задач" quantity="1" />
        </TaskCounter>
        <Analytics />
      </section>
    </>
  );

}

export default AdminAnalyticsPage;