/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Prediction } from './Prediction';
import type { TravelCostCategory } from './TravelCostCategory';
import type { TravelExpense } from './TravelExpense';
import type { TravelPaymentType } from './TravelPaymentType';
import type { VatType } from './VatType';

export interface Cost {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    travelExpense?: TravelExpense;
    vatType?: VatType;
    currency?: Currency;
    costCategory?: TravelCostCategory;
    paymentType: TravelPaymentType;
    category?: string;
    comments?: string;
    rate?: number;
    amountCurrencyIncVat: number;
    amountNOKInclVAT?: number;
    readonly amountNOKInclVATLow?: number;
    readonly amountNOKInclVATMedium?: number;
    readonly amountNOKInclVATHigh?: number;
    readonly isPaidByEmployee?: boolean;
    isChargeable?: boolean;
    date?: string;
    predictions?: Record<string, Array<Prediction>>;
}
