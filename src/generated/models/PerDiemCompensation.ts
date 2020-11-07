/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { TravelExpense } from './TravelExpense';
import type { TravelExpenseRate } from './TravelExpenseRate';
import type { TravelExpenseRateCategory } from './TravelExpenseRateCategory';

export interface PerDiemCompensation {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    countryCode?: string;
    /**
     * Optional travel expense zone id. If not specified, the value from field zone will be used.
     */
    travelExpenseZoneId?: number;
    /**
     * Set what sort of accommodation was had overnight.
     */
    overnightAccommodation?: PerDiemCompensation.overnightAccommodation;
    location: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
    isDeductionForBreakfast?: boolean;
    isDeductionForLunch?: boolean;
    isDeductionForDinner?: boolean;
}

export namespace PerDiemCompensation {

    /**
     * Set what sort of accommodation was had overnight.
     */
    export enum overnightAccommodation {
        NONE = 'NONE',
        HOTEL = 'HOTEL',
        BOARDING_HOUSE_WITHOUT_COOKING = 'BOARDING_HOUSE_WITHOUT_COOKING',
        BOARDING_HOUSE_WITH_COOKING = 'BOARDING_HOUSE_WITH_COOKING',
    }


}
