/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Currency } from './Currency';
import type { Supplier } from './Supplier';

export interface SupplierBalance {
    supplier?: Supplier;
    readonly balanceIn?: number;
    readonly balanceChange?: number;
    readonly balanceOut?: number;
    /**
     * Currencies that have been used prior to this period, for the given filter
     */
    readonly balanceInCurrencies?: Array<Currency>;
    readonly sumAmountNegative?: number;
}
