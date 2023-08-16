import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  employee_id: string;
  salary: number;
  pay_date: any;
  created_at?: any;
  updated_at?: any;
  employee_employee_payroll_idTopayroll?: EmployeeInterface[];
  employee_payroll_employee_idToemployee?: EmployeeInterface;
  _count?: {
    employee_employee_payroll_idTopayroll?: number;
  };
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
}
