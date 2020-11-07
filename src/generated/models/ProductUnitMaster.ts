/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface ProductUnitMaster {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    readonly nameShort?: string;
    readonly commonCode?: string;
    readonly peppolName?: string;
    readonly peppolSymbol?: string;
    readonly isInactive?: boolean;
}
