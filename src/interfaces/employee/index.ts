import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  company_id: string;
  payroll_id: string;
  created_at?: any;
  updated_at?: any;
  payroll_payroll_employee_idToemployee?: PayrollInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  payroll_employee_payroll_idTopayroll?: PayrollInterface;
  _count?: {
    payroll_payroll_employee_idToemployee?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  payroll_id?: string;
}
