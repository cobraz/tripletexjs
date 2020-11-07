/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Product } from './Product';
import type { Stocktaking } from './Stocktaking';

export interface ProductLine {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    stocktaking: Stocktaking;
    product: Product;
    count?: number;
    /**
     * Unit price purchase (cost) excluding VAT in the order's currency
     */
    unitCostCurrency?: number;
    readonly costCurrency?: number;
    comment?: string;
}
