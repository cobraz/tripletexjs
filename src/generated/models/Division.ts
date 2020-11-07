/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Municipality } from './Municipality';

export interface Division {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    municipality?: Municipality;
}
