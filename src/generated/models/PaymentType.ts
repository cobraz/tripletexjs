/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';
import type { Customer } from './Customer';
import type { Supplier } from './Supplier';
import type { VatType } from './VatType';

export interface PaymentType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    description: string;
    debitAccount?: Account;
    creditAccount?: Account;
    vatType?: VatType;
    readonly customer?: Customer;
    readonly supplier?: Supplier;
}
