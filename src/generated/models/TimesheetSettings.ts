/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface TimesheetSettings {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    timeClock?: boolean;
    timesheetCompleted?: boolean;
    flexBalance?: boolean;
    vacationBalance?: boolean;
}
