/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface ApiConsumer {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    consumerName: string;
    emails: string;
}
