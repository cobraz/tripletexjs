/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';

export interface TravelPaymentType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    description: string;
    account?: Account;
    readonly showOnTravelExpenses?: boolean;
    readonly showOnEmployeeExpenses?: boolean;
    readonly isInactive?: boolean;
}
