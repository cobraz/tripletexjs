/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Customer } from './Customer';
import type { Department } from './Department';

export interface OrderOffer {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    number?: string;
    department?: Department;
    offerDate?: string;
    /**
     * The offer's customer
     */
    customer?: Customer;
}
