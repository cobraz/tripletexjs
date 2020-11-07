/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';
import type { EmployeePeriod } from './EmployeePeriod';
import type { FlexSummary } from './FlexSummary';
import type { HourSummary } from './HourSummary';
import type { TimesheetEntry } from './TimesheetEntry';

export interface MonthlyStatus {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly employee?: Employee;
    readonly timesheetEntries?: Array<TimesheetEntry>;
    readonly approvedDate?: string;
    readonly completed?: boolean;
    readonly approvedBy?: Employee;
    readonly approved?: boolean;
    readonly approvedUntilDate?: string;
    readonly monthYear?: string;
    hoursPayout?: number;
    vacationPayout?: number;
    readonly hourSummary?: HourSummary;
    readonly flexSummary?: FlexSummary;
    readonly vacationSummary?: EmployeePeriod;
}
