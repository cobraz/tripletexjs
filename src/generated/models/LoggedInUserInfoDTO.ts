/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Company } from './Company';
import type { Employee } from './Employee';

export interface LoggedInUserInfoDTO {
    employeeId?: number;
    employee?: Employee;
    companyId?: number;
    company?: Company;
    language?: string;
}
