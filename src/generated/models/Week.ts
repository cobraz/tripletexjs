/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';
import type { TimesheetEntry } from './TimesheetEntry';

export interface Week {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly employee?: Employee;
    readonly timesheetEntries?: Array<TimesheetEntry>;
    readonly year?: number;
    readonly week?: number;
    readonly completed?: boolean;
    readonly approved?: boolean;
    readonly approvedBy?: Employee;
    readonly approvedDate?: string;
}
