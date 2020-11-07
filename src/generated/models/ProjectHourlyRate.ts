/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Project } from './Project';
import type { ProjectSpecificRate } from './ProjectSpecificRate';

export interface ProjectHourlyRate {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    project?: Project;
    startDate: string;
    /**
     * Show on contract confirmation/offers
     */
    showInProjectOrder?: boolean;
    /**
     * Defines the model used for the hourly rate.
     */
    hourlyRateModel: ProjectHourlyRate.hourlyRateModel;
    /**
     * Project specific rates if hourlyRateModel is TYPE_PROJECT_SPECIFIC_HOURLY_RATES.
     */
    projectSpecificRates?: Array<ProjectSpecificRate>;
    /**
     * Fixed Hourly rates if hourlyRateModel is TYPE_FIXED_HOURLY_RATE.
     */
    fixedRate?: number;
}

export namespace ProjectHourlyRate {

    /**
     * Defines the model used for the hourly rate.
     */
    export enum hourlyRateModel {
        TYPE_PREDEFINED_HOURLY_RATES = 'TYPE_PREDEFINED_HOURLY_RATES',
        TYPE_PROJECT_SPECIFIC_HOURLY_RATES = 'TYPE_PROJECT_SPECIFIC_HOURLY_RATES',
        TYPE_FIXED_HOURLY_RATE = 'TYPE_FIXED_HOURLY_RATE',
    }


}
