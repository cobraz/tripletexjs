/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface ProductGroup {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Product group name
     */
    name: string;
    /**
     * Product group parent
     */
    parentGroup?: ProductGroup;
}
