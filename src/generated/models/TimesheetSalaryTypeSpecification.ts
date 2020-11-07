/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';
import type { SalaryType } from './SalaryType';

export interface TimesheetSalaryTypeSpecification {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee: Employee;
    salaryType: SalaryType;
    description?: string;
    date: string;
    count: number;
}
