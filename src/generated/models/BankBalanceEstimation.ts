/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { TlxNumber } from './TlxNumber';

export interface BankBalanceEstimation {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    date?: string;
    /**
     * java.lang.String
     */
    description: string;
    /**
     * BigDecimal
     */
    invoiceAmount?: TlxNumber;
    /**
     * boolean
     */
    isIncomingInvoice?: boolean;
}
