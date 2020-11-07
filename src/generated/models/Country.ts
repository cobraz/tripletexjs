/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Country {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    /**
     * The ISO 3166-1 Alpha2 code of the country (2 letters). https://en.wikipedia.org/wiki/ISO_3166-1
     */
    readonly isoAlpha2Code?: string;
    /**
     * The ISO 3166-1 Alpha3 code of the country (3 letters). https://en.wikipedia.org/wiki/ISO_3166-1
     */
    readonly isoAlpha3Code?: string;
    /**
     * The ISO 3166-1 numeric code of the country (3 digits). https://en.wikipedia.org/wiki/ISO_3166-1
     */
    readonly isoNumericCode?: string;
}
