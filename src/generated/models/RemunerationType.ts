/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface RemunerationType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Defines the remuneration type option.
     */
    remunerationType: RemunerationType.remunerationType;
    nameNO?: string;
    code?: string;
}

export namespace RemunerationType {

    /**
     * Defines the remuneration type option.
     */
    export enum remunerationType {
        MONTHLY_WAGE = 'MONTHLY_WAGE',
        HOURLY_WAGE = 'HOURLY_WAGE',
        COMMISION_PERCENTAGE = 'COMMISION_PERCENTAGE',
        FEE = 'FEE',
        PIECEWORK_WAGE = 'PIECEWORK_WAGE',
    }


}
