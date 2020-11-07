/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { AccountingPeriod } from './AccountingPeriod';
import type { BankTransaction } from './BankTransaction';
import type { Change } from './Change';
import type { Contact } from './Contact';
import type { Employee } from './Employee';
import type { Voucher } from './Voucher';

export interface BankReconciliation {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    account: Account;
    accountingPeriod: AccountingPeriod;
    readonly voucher?: Voucher;
    /**
     * Bank transactions tied to the bank reconciliation
     */
    readonly transactions?: Array<BankTransaction>;
    isClosed?: boolean;
    /**
     * Type of Bank Reconciliation.
     */
    type: BankReconciliation.type;
    bankAccountClosingBalanceCurrency?: number;
    readonly closedDate?: string;
    readonly closedByContact?: Contact;
    readonly closedByEmployee?: Employee;
    readonly approvable?: boolean;
}

export namespace BankReconciliation {

    /**
     * Type of Bank Reconciliation.
     */
    export enum type {
        MANUAL = 'MANUAL',
        AUTOMATIC = 'AUTOMATIC',
    }


}
