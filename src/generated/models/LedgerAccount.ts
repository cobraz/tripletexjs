/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Currency } from './Currency';
import type { Posting } from './Posting';

export interface LedgerAccount {
    readonly account?: Account;
    readonly sumAmount?: number;
    readonly currency?: Currency;
    readonly sumAmountCurrency?: number;
    readonly openingBalance?: number;
    readonly openingBalanceCurrency?: number;
    readonly closingBalance?: number;
    readonly closingBalanceCurrency?: number;
    /**
     * Link to postings on this account.
     */
    readonly postings?: Array<Posting>;
}
