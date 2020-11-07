/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity';
import type { Change } from './Change';
import type { Employee } from './Employee';
import type { ProjectHourlyRate } from './ProjectHourlyRate';

export interface ProjectSpecificRate {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    hourlyRate: number;
    hourlyCostPercentage?: number;
    projectHourlyRate: ProjectHourlyRate;
    employee?: Employee;
    activity?: Activity;
}
