/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankAgreement } from './BankAgreement';
import type { Change } from './Change';
import type { Employee } from './Employee';

export interface BankSettings {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    taxBankAgreement?: BankAgreement;
    /**
     * The remit number of acceptors.
     */
    remitNumberOfAcceptors?: number;
    /**
     * The showAdviceCurrencyMismatch property.
     */
    showAdviceCurrencyMismatch?: boolean;
    /**
     * Employees with payment access
     */
    readonly employeesWithDirectRemitAccess?: Array<Employee>;
}
