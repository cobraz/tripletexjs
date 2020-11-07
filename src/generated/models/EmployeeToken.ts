/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiConsumer } from './ApiConsumer';
import type { Change } from './Change';
import type { Employee } from './Employee';

export interface EmployeeToken {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee?: Employee;
    apiConsumer?: ApiConsumer;
    token?: string;
    expirationDate?: string;
}
