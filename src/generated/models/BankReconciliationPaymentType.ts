/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';

export interface BankReconciliationPaymentType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Description
     */
    readonly description?: string;
    /**
     * Debit account
     */
    readonly debitAccount?: Account;
    /**
     * Credit account
     */
    readonly creditAccount?: Account;
    readonly isInactive?: boolean;
}
