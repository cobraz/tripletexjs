/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity';
import type { Change } from './Change';
import type { Employee } from './Employee';
import type { Project } from './Project';
import type { TimesheetEntry } from './TimesheetEntry';

export interface TimeClock {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee: Employee;
    project?: Project;
    activity?: Activity;
    timesheetEntry: TimesheetEntry;
    date: string;
    timeStart: string;
    timeStop: string;
    hoursStart?: number;
}
