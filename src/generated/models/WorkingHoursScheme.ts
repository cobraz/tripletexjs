/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface WorkingHoursScheme {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Defines the working hours scheme option.
     */
    workingHoursScheme: WorkingHoursScheme.workingHoursScheme;
    nameNO?: string;
    code?: string;
}

export namespace WorkingHoursScheme {

    /**
     * Defines the working hours scheme option.
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
