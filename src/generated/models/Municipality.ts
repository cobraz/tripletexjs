/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Municipality {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly number?: string;
    readonly name?: string;
    readonly county?: string;
    readonly payrollTaxZone?: string;
}
