/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface SalaryType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    number?: string;
    name?: string;
    description?: string;
    readonly showInTimesheet?: boolean;
}
