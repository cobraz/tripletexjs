/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';
import type { SalarySpecification } from './SalarySpecification';
import type { SalaryTransaction } from './SalaryTransaction';

export interface Payslip {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    transaction?: SalaryTransaction;
    employee: Employee;
    /**
     * Voucher date.
     */
    date?: string;
    year?: number;
    month?: number;
    /**
     * Link to salary specifications.
     */
    specifications?: Array<SalarySpecification>;
    readonly vacationAllowanceAmount?: number;
    readonly grossAmount?: number;
    readonly amount?: number;
    readonly number?: number;
}
