import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
  payroll_id: yup.string().nullable().required(),
});
