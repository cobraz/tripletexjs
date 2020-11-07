/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiConsumer } from './ApiConsumer';
import type { Change } from './Change';

export interface ConsumerToken {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    apiConsumer?: ApiConsumer;
    token?: string;
    expirationDate?: string;
}
