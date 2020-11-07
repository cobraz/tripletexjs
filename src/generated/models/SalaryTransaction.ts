/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Payslip } from './Payslip';

export interface SalaryTransaction {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Voucher date.
     */
    date?: string;
    year: number;
    month: number;
    /**
     * With historical wage vouchers you can update the wage system with information dated before the opening balance.
     */
    isHistorical?: boolean;
    /**
     * The date payslips are made available to the employee. Defaults to voucherDate.
     */
    paySlipsAvailableDate?: string;
    /**
     * Link to individual payslip objects.
     */
    payslips: Array<Payslip>;
}
