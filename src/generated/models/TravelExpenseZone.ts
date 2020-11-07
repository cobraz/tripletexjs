/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface TravelExpenseZone {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The ISO 3166-1 Alpha2 code of the country (2 letters). https://en.wikipedia.org/wiki/ISO_3166-1
     */
    readonly countryCode?: string;
    readonly zoneName?: string;
    readonly isDisabled?: boolean;
    /**
     * The Government name
     */
    readonly governmentName?: string;
    readonly continent?: string;
}
