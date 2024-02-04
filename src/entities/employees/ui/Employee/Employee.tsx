import { type FC } from 'react';
import { Table } from '@alfalab/core-components-table';
import { Status } from '@alfalab/core-components-status';
import { Circle } from '@alfalab/core-components-icon-view/circle';
import { type Plan } from 'entities/plans';
import { AppStatus, type TaskStatus } from 'entities/tasks';
import { type Employee as TEmployee } from '../../model/types/employee';
import style from './Employee.module.scss';

interface EmployeeProps extends Partial<Plan> {
  expired_at: string;
  status: TaskStatus;
  employee: TEmployee;
}

enum color {
  'created' = 'grey',
  'in_progress' = 'orange',
  'under_review' = 'purple',
  'failed' = 'red',
  'done' = 'green',
}

const Employee: FC<EmployeeProps> = ({ expired_at, status, employee }) => (
  <Table.TRow>
    <Table.TCell className={style.employeeCell}>
      <Circle imageUrl={employee.photo} size={48} className={style.circle} />
      <div>
        <p>{employee.full_name}</p>
        <p className={style.pWhite}>{employee.position}</p>
      </div>
    </Table.TCell>
    <Table.TCell>
      <Status color={color[status]}>{AppStatus[status]}</Status>
    </Table.TCell>
    <Table.TCell>{expired_at}</Table.TCell>
  </Table.TRow>
);

export default Employee;
