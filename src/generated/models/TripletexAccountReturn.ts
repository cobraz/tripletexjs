/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Company } from './Company';
import type { Employee } from './Employee';
import type { EmployeeToken } from './EmployeeToken';

export interface TripletexAccountReturn {
    company?: Company;
    administrator?: Employee;
    administratorApiToken?: EmployeeToken;
    companyOwnedApiToken?: EmployeeToken;
    companyOwnedApiTokenRobotId?: number;
}
