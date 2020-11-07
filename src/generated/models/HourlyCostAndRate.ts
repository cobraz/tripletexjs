/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';

export interface HourlyCostAndRate {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee?: Employee;
    date?: string;
    rate?: number;
    budgetRate?: number;
    hourCostRate?: number;
}
