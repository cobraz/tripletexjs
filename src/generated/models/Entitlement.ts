/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Company } from './Company';
import type { Employee } from './Employee';

export interface Entitlement {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Employee which has this privilege
     */
    employee: Employee;
    /**
     * Descriptive name for the privilege. Might change between releases.
     */
    readonly name?: string;
    /**
     * Unique id for the type of privilege.
     */
    entitlementId: number;
    /**
     * The company this role applies for
     */
    customer: Company;
}
