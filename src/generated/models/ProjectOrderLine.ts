/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Inventory } from './Inventory';
import type { Invoice } from './Invoice';
import type { Product } from './Product';
import type { Project } from './Project';
import type { VatType } from './VatType';

export interface ProjectOrderLine {
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
    project: Project;
    date: string;
    isChargeable?: boolean;
    readonly isBudget?: boolean;
    readonly invoice?: Invoice;
}
