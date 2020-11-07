/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Product } from './Product';
import type { ProductGroup } from './ProductGroup';

export interface ProductGroupRelation {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    product: Product;
    productGroup: ProductGroup;
}
