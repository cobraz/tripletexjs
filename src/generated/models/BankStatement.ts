/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Bank } from './Bank';
import type { BankTransaction } from './BankTransaction';
import type { Change } from './Change';

export interface BankStatement {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Opening balance on the account.
     */
    readonly openingBalanceCurrency?: number;
    /**
     * Closing balance on the account.
     */
    readonly closingBalanceCurrency?: number;
    /**
     * Bank statement file name.
     */
    readonly fileName?: string;
    /**
     * Bank
     */
    readonly bank?: Bank;
    readonly fromDate?: string;
    readonly toDate?: string;
    /**
     * Bank transactions tied to the bank statement
     */
    readonly transactions?: Array<BankTransaction>;
}
