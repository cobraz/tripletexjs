/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';
import type { VatType } from './VatType';

export interface TravelCostCategory {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    description: string;
    account?: Account;
    vatType?: VatType;
    readonly isVatLocked?: boolean;
    readonly showOnTravelExpenses?: boolean;
    readonly showOnEmployeeExpenses?: boolean;
    readonly isInactive?: boolean;
}
