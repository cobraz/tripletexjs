/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface VoucherType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
}
