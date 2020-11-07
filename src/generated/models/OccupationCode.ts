/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface OccupationCode {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    nameNO?: string;
    code?: string;
}
