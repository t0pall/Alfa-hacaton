import { type FC } from 'react';
import { useLocation } from "react-router-dom";
import { Table } from '@alfalab/core-components-table';
import { Status } from '@alfalab/core-components-status';
import { Circle } from '@alfalab/core-components-icon-view/circle';
import { type Plan } from "../../../entities/plan/model/Plan"
import style from "./Employee.module.scss"

interface EmployeeProps extends Plan { }

enum color {
  'Создано' = 'grey',
  'В работе' = 'orange',
  'На проверке' = 'purple',
  'Не выполнено' = 'red',
  'Выполнено' = 'green',
}

/* eslint-disable camelcase */
const Employee: FC<EmployeeProps> = ({ expired_at, status, employee, }) => {
  const { pathname } = useLocation();

  return (
    < Table.TRow >
      <Table.TCell className={style.employeeCell}>
        <Circle imageUrl={employee.img} size={48} className={style.circle} />
        <div>
          <p>{employee.full_name}</p>
          <p className={style.pWhite}>{employee.position}</p>
        </div>
      </Table.TCell>
      <Table.TCell><Status color={color[status]}>{status}</Status></Table.TCell>
      <Table.TCell>{expired_at}</Table.TCell>
    </Table.TRow >
  );
};

export default Employee;