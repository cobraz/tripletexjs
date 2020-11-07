/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface AccountingPeriod {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    readonly number?: number;
    readonly start?: string;
    readonly end?: string;
    readonly isClosed?: boolean;
}
