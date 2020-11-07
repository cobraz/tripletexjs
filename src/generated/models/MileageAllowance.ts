/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Cost } from './Cost';
import type { Passenger } from './Passenger';
import type { TravelExpense } from './TravelExpense';
import type { TravelExpenseRate } from './TravelExpenseRate';
import type { TravelExpenseRateCategory } from './TravelExpenseRateCategory';

export interface MileageAllowance {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    date: string;
    departureLocation: string;
    destination: string;
    km?: number;
    rate?: number;
    amount?: number;
    isCompanyCar?: boolean;
    /**
     * Link to individual passengers.
     */
    readonly passengers?: Array<Passenger>;
    /**
     * Passenger mileage allowance associated with this mileage allowance.
     */
    passengerSupplement?: MileageAllowance;
    /**
     * Toll cost associated with this mileage allowance.
     */
    tollCost?: Cost;
}
