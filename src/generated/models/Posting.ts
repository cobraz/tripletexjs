/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';
import type { CloseGroup } from './CloseGroup';
import type { Currency } from './Currency';
import type { Customer } from './Customer';
import type { Department } from './Department';
import type { Employee } from './Employee';
import type { Product } from './Product';
import type { Project } from './Project';
import type { Supplier } from './Supplier';
import type { VatType } from './VatType';
import type { Voucher } from './Voucher';

export interface Posting {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly voucher?: Voucher;
    date?: string;
    description?: string;
    account?: Account;
    customer?: Customer;
    supplier?: Supplier;
    employee?: Employee;
    project?: Project;
    product?: Product;
    department?: Department;
    vatType?: VatType;
    amount?: number;
    amountCurrency?: number;
    amountGross?: number;
    amountGrossCurrency?: number;
    currency?: Currency;
    closeGroup?: CloseGroup;
    invoiceNumber?: string;
    termOfPayment?: string;
    row?: number;
    readonly systemGenerated?: boolean;
}
