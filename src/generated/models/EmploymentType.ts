/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface EmploymentType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Defines the employment type option.
     */
    employmentType: EmploymentType.employmentType;
    nameNO?: string;
    code?: string;
}

export namespace EmploymentType {

    /**
     * Defines the employment type option.
     */
    export enum employmentType {
        ORDINARY = 'ORDINARY',
        MARITIME = 'MARITIME',
        FREELANCE = 'FREELANCE',
    }


}
