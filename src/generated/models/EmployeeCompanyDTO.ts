/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Company } from './Company';
import type { Employee } from './Employee';

export interface EmployeeCompanyDTO {
    isDefault?: boolean;
    company?: Company;
    employee?: Employee;
}
