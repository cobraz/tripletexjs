/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Department } from './Department';
import type { ProductUnit } from './ProductUnit';
import type { Supplier } from './Supplier';
import type { VatType } from './VatType';

export interface Product {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
    number?: string;
    description?: string;
    ean?: string;
    readonly elNumber?: string;
    readonly nrfNumber?: string;
    /**
     * Price purchase (cost) excluding VAT in the product's currency
     */
    costExcludingVatCurrency?: number;
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
    readonly stockOfGoods?: number;
    vatType?: VatType;
    currency?: Currency;
    department?: Department;
    account?: Account;
    readonly discountPrice?: number;
    supplier?: Supplier;
    resaleProduct?: Product;
}
