/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankReconciliation } from './BankReconciliation';
import type { BankTransaction } from './BankTransaction';
import type { Change } from './Change';
import type { Posting } from './Posting';

export interface BankReconciliationMatch {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    bankReconciliation: BankReconciliation;
    /**
     * Type of match, MANUAL and APPROVED_SUGGESTION are considered part of reconciliation.
     */
    type?: BankReconciliationMatch.type;
    /**
     * Match transactions
     */
    transactions?: Array<BankTransaction>;
    /**
     * Match postings
     */
    postings?: Array<Posting>;
}

export namespace BankReconciliationMatch {

    /**
     * Type of match, MANUAL and APPROVED_SUGGESTION are considered part of reconciliation.
     */
    export enum type {
        MANUAL = 'MANUAL',
        PENDING_SUGGESTION = 'PENDING_SUGGESTION',
        REJECTED_SUGGESTION = 'REJECTED_SUGGESTION',
        APPROVED_SUGGESTION = 'APPROVED_SUGGESTION',
        ADJUSTMENT = 'ADJUSTMENT',
        AUTO_MATCHED = 'AUTO_MATCHED',
        REJECTED_AUTO_MATCH = 'REJECTED_AUTO_MATCH',
    }


}
