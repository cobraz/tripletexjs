/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';

export interface PaymentTypeOut {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    description: string;
    /**
     * true if it should be a deduction from the wage. The module PROVISIONSALARY is required to both view and change this setting
     */
    isBruttoWageDeduction?: boolean;
    creditAccount: Account;
    /**
     * true if the payment type should be available in supplier invoices
     */
    showIncomingInvoice?: boolean;
    /**
     * true if the payment type should be available in wage payments. The wage module is required to both view and change this setting
     */
    showWagePayment?: boolean;
    /**
     * true if the payment type should be available in vat returns
     */
    showVatReturns?: boolean;
    /**
     * true if the payment type should be available in period transactionsThe wage module is required to both view and change this setting
     */
    showWagePeriodTransaction?: boolean;
    /**
     * true if a separate voucher is required
     */
    requiresSeparateVoucher?: boolean;
    /**
     * determines in which order the types should be listed. No 1 is listed first
     */
    sequence?: number;
    /**
     * true if the payment type should be hidden from available payment types
     */
    isInactive?: boolean;
}
