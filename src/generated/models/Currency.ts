/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Currency {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    code?: string;
    description?: string;
    factor?: number;
}
