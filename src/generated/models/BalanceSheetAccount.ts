/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';

export interface BalanceSheetAccount {
    readonly account?: Account;
    readonly balanceIn?: number;
    readonly balanceChange?: number;
    readonly balanceOut?: number;
    /**
     * The start date for this period - inclusive.
     */
    readonly startDate?: string;
    /**
     * The end date for this period - exclusive.
     */
    readonly endDate?: string;
}
