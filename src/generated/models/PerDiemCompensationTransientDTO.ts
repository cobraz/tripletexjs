/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TravelExpense } from './TravelExpense';
import type { TravelExpenseRate } from './TravelExpenseRate';
import type { TravelExpenseRateCategory } from './TravelExpenseRateCategory';

export interface PerDiemCompensationTransientDTO {
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    countryCode?: string;
    travelExpenseZoneId?: number;
    overnightAccommodation?: PerDiemCompensationTransientDTO.overnightAccommodation;
    location?: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
    isDeductionForBreakfast?: boolean;
    isDeductionForLunch?: boolean;
    isDeductionForDinner?: boolean;
}

export namespace PerDiemCompensationTransientDTO {

    export enum overnightAccommodation {
        NONE = 'NONE',
        HOTEL = 'HOTEL',
        BOARDING_HOUSE_WITHOUT_COOKING = 'BOARDING_HOUSE_WITHOUT_COOKING',
        BOARDING_HOUSE_WITH_COOKING = 'BOARDING_HOUSE_WITH_COOKING',
    }


}
