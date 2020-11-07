/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';
import type { Stock } from './Stock';

export interface Inventories {
    readonly product?: Product;
    readonly stock?: Array<Stock>;
}
