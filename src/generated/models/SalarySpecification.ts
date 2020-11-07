/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Department } from './Department';
import type { Employee } from './Employee';
import type { Payslip } from './Payslip';
import type { Project } from './Project';
import type { SalaryType } from './SalaryType';

export interface SalarySpecification {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    rate: number;
    count: number;
    project?: Project;
    department?: Department;
    salaryType: SalaryType;
    payslip?: Payslip;
    employee?: Employee;
    description?: string;
    year?: number;
    month?: number;
    amount?: number;
}
