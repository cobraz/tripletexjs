/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Inventory } from './Inventory';
import type { Product } from './Product';
import type { PurchaseOrder } from './PurchaseOrder';

export interface GoodsReceiptLine {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    purchaseOrder?: PurchaseOrder;
    product: Product;
    /**
     * If not entered, the default warehouse will be used
     */
    inventory?: Inventory;
    readonly quantityOrdered?: number;
    quantityReceived: number;
    readonly quantityRest?: number;
    readonly deviation?: number;
}
