/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Department } from './Department';
import type { ProductUnit } from './ProductUnit';
import type { VatType } from './VatType';

export interface ExternalProduct {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
    elNumber?: string;
    nrfNumber?: string;
    /**
     * Price purchase (cost) excluding VAT in the product's currency
     */
    readonly costExcludingVatCurrency?: number;
    /**
     * Price of purchase excluding VAT in the product's currency
     */
    priceExcludingVatCurrency?: number;
    /**
     * Price of purchase including VAT in the product's currency
     */
    priceIncludingVatCurrency?: number;
    isInactive?: boolean;
    productUnit?: ProductUnit;
    isStockItem?: boolean;
    vatType?: VatType;
    currency?: Currency;
    department?: Department;
    account?: Account;
    readonly discountPrice?: number;
}
