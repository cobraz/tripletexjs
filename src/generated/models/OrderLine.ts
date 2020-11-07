/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Inventory } from './Inventory';
import type { Order } from './Order';
import type { OrderGroup } from './OrderGroup';
import type { Product } from './Product';
import type { VatType } from './VatType';

export interface OrderLine {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    product?: Product;
    inventory?: Inventory;
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
     * Markup given as a percentage (%)
     */
    markup?: number;
    /**
     * Discount given as a percentage (%)
     */
    discount?: number;
    vatType?: VatType;
    /**
     * Total amount on order line excluding VAT in the order's currency
     */
    readonly amountExcludingVatCurrency?: number;
    /**
     * Total amount on order line including VAT in the order's currency
     */
    readonly amountIncludingVatCurrency?: number;
    /**
     * The related Order for this OrderLine. This field is required when creating a new OrderLine in the API.
     */
    order?: Order;
    /**
     * Unit price of purchase including VAT in the order's currency
     */
    unitPriceIncludingVatCurrency?: number;
    isSubscription?: boolean;
    subscriptionPeriodStart?: string;
    subscriptionPeriodEnd?: string;
    orderGroup?: OrderGroup;
}
