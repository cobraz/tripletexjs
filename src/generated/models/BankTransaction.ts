/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankStatement } from './BankStatement';
import type { Change } from './Change';

export interface BankTransaction {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    postedDate?: string;
    description?: string;
    amountCurrency?: number;
    bankStatement?: BankStatement;
}
