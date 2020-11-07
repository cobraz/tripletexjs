/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Activity } from './Activity';
import type { Change } from './Change';
import type { Project } from './Project';

export interface ProjectActivity {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Add existing project activity or create new project specific activity
     */
    activity?: Activity;
    project?: Project;
    startDate?: string;
    endDate?: string;
    isClosed?: boolean;
    /**
     * Set budget hours
     */
    budgetHours?: number;
    /**
     * Set budget hourly rate
     */
    budgetHourlyRateCurrency?: number;
    /**
     * Set budget fee
     */
    budgetFeeCurrency?: number;
}
