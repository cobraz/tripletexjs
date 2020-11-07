/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { MileageAllowance } from './MileageAllowance';

export interface Passenger {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    mileageAllowance?: MileageAllowance;
}
