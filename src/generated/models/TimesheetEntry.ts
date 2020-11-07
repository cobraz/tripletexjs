/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity';
import type { Change } from './Change';
import type { Employee } from './Employee';
import type { Invoice } from './Invoice';
import type { Project } from './Project';
import type { TimeClock } from './TimeClock';

export interface TimesheetEntry {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    project?: Project;
    activity: Activity;
    date: string;
    hours: number;
    readonly chargeableHours?: number;
    employee: Employee;
    /**
     * Link to stop watches on this hour.
     */
    readonly timeClocks?: Array<TimeClock>;
    comment?: string;
    /**
     * Indicates if the hour can be changed.
     */
    readonly locked?: boolean;
    readonly chargeable?: boolean;
    readonly invoice?: Invoice;
    readonly hourlyRate?: number;
    readonly hourlyCost?: number;
    readonly hourlyCostPercentage?: number;
}
