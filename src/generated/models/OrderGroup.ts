/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Order } from './Order';

export interface OrderGroup {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    order: Order;
    title?: string;
    comment?: string;
    /**
     * Minimum 1. Defines the presentation order of the orderGroups. Does not need to be, and is often not continuous.
     */
    sortIndex?: number;
}
