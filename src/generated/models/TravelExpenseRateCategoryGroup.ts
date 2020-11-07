/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface TravelExpenseRateCategoryGroup {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    isForeignTravel?: boolean;
    fromDate: string;
    toDate: string;
}
