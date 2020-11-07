/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { ConsumerToken } from './ConsumerToken';
import type { EmployeeToken } from './EmployeeToken';

export interface SessionToken {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    consumerToken?: ConsumerToken;
    employeeToken?: EmployeeToken;
    expirationDate: string;
    token?: string;
    readonly encryptionKey?: string;
}
