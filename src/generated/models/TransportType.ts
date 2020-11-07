/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface TransportType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly nameKey?: string;
    readonly code?: string;
    readonly isPickUp?: boolean;
}
