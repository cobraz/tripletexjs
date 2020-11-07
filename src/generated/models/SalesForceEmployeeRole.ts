/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface SalesForceEmployeeRole {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    companyId?: number;
    employeeId?: number;
    roleId?: number;
    userId?: number;
    tripletexCustomerId?: number;
}
