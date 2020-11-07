/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { TravelExpenseRateCategory } from './TravelExpenseRateCategory';

export interface TravelExpenseRate {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    rateCategory: TravelExpenseRateCategory;
    zone: string;
    rate?: number;
    breakfastDeductionRate?: number;
    lunchDeductionRate?: number;
    dinnerDeductionRate?: number;
}
