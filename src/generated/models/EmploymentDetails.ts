/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employment } from './Employment';
import type { MaritimeEmployment } from './MaritimeEmployment';
import type { Municipality } from './Municipality';
import type { OccupationCode } from './OccupationCode';

export interface EmploymentDetails {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employment?: Employment;
    date?: string;
    /**
     * Define the employment type.
     */
    employmentType?: EmploymentDetails.employmentType;
    maritimeEmployment?: MaritimeEmployment;
    /**
     * Define the remuneration type.
     */
    remunerationType?: EmploymentDetails.remunerationType;
    /**
     * Define the working hours scheme type. If you enter a value for SHIFT WORK, you must also enter value for shiftDurationHours
     */
    workingHoursScheme?: EmploymentDetails.workingHoursScheme;
    shiftDurationHours?: number;
    /**
     * To find the right value to enter in this field, you could go to GET /employee/employment/occupationCode to get a list of valid ID's.
     */
    occupationCode?: OccupationCode;
    percentageOfFullTimeEquivalent: number;
    annualSalary?: number;
    hourlyWage?: number;
    payrollTaxMunicipalityId?: Municipality;
}

export namespace EmploymentDetails {

    /**
     * Define the employment type.
     */
    export enum employmentType {
        ORDINARY = 'ORDINARY',
        MARITIME = 'MARITIME',
        FREELANCE = 'FREELANCE',
    }

    /**
     * Define the remuneration type.
     */
    export enum remunerationType {
        MONTHLY_WAGE = 'MONTHLY_WAGE',
        HOURLY_WAGE = 'HOURLY_WAGE',
        COMMISION_PERCENTAGE = 'COMMISION_PERCENTAGE',
        FEE = 'FEE',
        PIECEWORK_WAGE = 'PIECEWORK_WAGE',
    }

    /**
     * Define the working hours scheme type. If you enter a value for SHIFT WORK, you must also enter value for shiftDurationHours
     */
    export enum workingHoursScheme {
        NOT_SHIFT = 'NOT_SHIFT',
        ROUND_THE_CLOCK = 'ROUND_THE_CLOCK',
        SHIFT_365 = 'SHIFT_365',
        OFFSHORE_336 = 'OFFSHORE_336',
        CONTINUOUS = 'CONTINUOUS',
        OTHER_SHIFT = 'OTHER_SHIFT',
    }


}
