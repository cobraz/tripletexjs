/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Product } from './Product';
import type { PurchaseOrder } from './PurchaseOrder';

export interface PurchaseOrderline {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The purchase order to attach the orderline.
     */
    purchaseOrder: PurchaseOrder;
    product?: Product;
    description?: string;
    count?: number;
    /**
     * Unit price purchase (cost) excluding VAT in the order's currency
     */
    unitCostCurrency?: number;
    /**
     * Unit price of purchase excluding VAT in the order's currency
     */
    unitPriceExcludingVatCurrency?: number;
    /**
     * The order line's currency. Determined by the order's currency.
     */
    readonly currency?: Currency;
    /**
     * Discount given as a percentage (%)
     */
    discount?: number;
    /**
     * Total amount on order line excluding VAT in the order's currency
     */
    readonly amountExcludingVatCurrency?: number;
    /**
     * Total amount on order line including VAT in the order's currency
     */
    readonly amountIncludingVatCurrency?: number;
}
