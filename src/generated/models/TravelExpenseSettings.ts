/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface TravelExpenseSettings {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    useRates?: boolean;
    approvalRequired?: boolean;
    taxFreePerDiemRates?: boolean;
    taxFreeMileageRates?: boolean;
    perDiemNotCompensated?: boolean;
    accommodationNotCompensated?: boolean;
    mileageNotCompensated?: boolean;
}
