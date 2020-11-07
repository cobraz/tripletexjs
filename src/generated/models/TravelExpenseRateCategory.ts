/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface TravelExpenseRateCategory {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    ameldingWageCode?: number;
    wageCodeNumber?: string;
    isValidDayTrip?: boolean;
    isValidAccommodation?: boolean;
    isValidDomestic?: boolean;
    isValidForeignTravel?: boolean;
    isRequiresZone?: boolean;
    isRequiresOvernightAccommodation?: boolean;
    fromDate: string;
    toDate: string;
    type?: TravelExpenseRateCategory.type;
}

export namespace TravelExpenseRateCategory {

    export enum type {
        PER_DIEM = 'PER_DIEM',
        ACCOMMODATION_ALLOWANCE = 'ACCOMMODATION_ALLOWANCE',
        MILEAGE_ALLOWANCE = 'MILEAGE_ALLOWANCE',
    }


}
