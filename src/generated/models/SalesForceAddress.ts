/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { SalesForceCountry } from './SalesForceCountry';

export interface SalesForceAddress {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly addressLine1?: string;
    readonly addressLine2?: string;
    readonly postalCode?: string;
    readonly city?: string;
    readonly country?: SalesForceCountry;
}
