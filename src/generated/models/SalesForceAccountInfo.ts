/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface SalesForceAccountInfo {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    customerId?: number;
    customerCompanyId?: number;
    isReseller?: boolean;
    isAccountant?: boolean;
    isAuditor?: boolean;
    isSuspended?: boolean;
    /**
     * Tripletex account register Date
     */
    readonly registerDate?: string;
    /**
     * Tripletex account start Date
     */
    readonly startDate?: string;
    /**
     * Tripletex account end Date
     */
    readonly endDate?: string;
}
