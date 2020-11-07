/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee } from './Employee';
import type { EmployeeToken } from './EmployeeToken';

export interface EmployeeTokenBundle {
    employeeToken?: EmployeeToken;
    employee?: Employee;
    robotEmployee?: Employee;
}
