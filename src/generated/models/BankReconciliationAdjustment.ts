/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankReconciliationMatch } from './BankReconciliationMatch';
import type { BankReconciliationPaymentType } from './BankReconciliationPaymentType';
import type { BankTransaction } from './BankTransaction';
import type { Posting } from './Posting';

export interface BankReconciliationAdjustment {
    paymentType: BankReconciliationPaymentType;
    bankTransactions?: Array<BankTransaction>;
    postingDate?: string;
    amount?: number;
    postings?: Array<Posting>;
    readonly bankReconciliationMatch?: BankReconciliationMatch;
}
