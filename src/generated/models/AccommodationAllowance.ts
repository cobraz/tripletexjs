/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { TravelExpense } from './TravelExpense';
import type { TravelExpenseRate } from './TravelExpenseRate';
import type { TravelExpenseRateCategory } from './TravelExpenseRateCategory';

export interface AccommodationAllowance {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    zone?: string;
    location: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
}
