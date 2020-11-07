/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface CompanyHoliday {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    year?: number;
    days?: number;
    vacationPayPercentage1?: number;
    vacationPayPercentage2?: number;
    isMaxPercentage2Amount6G?: boolean;
}
