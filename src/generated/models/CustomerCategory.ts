/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface CustomerCategory {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    number?: string;
    description?: string;
    type?: number;
}
