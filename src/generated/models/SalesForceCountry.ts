/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface SalesForceCountry {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    readonly isoAlpha2Code?: string;
    readonly isoAlpha3Code?: string;
    readonly isoNumericCode?: string;
}
