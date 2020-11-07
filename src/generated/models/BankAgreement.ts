/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Bank } from './Bank';
import type { Change } from './Change';
import type { Country } from './Country';
import type { Currency } from './Currency';
import type { Employee } from './Employee';

export interface BankAgreement {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The IBAN property.
     */
    iban?: string;
    /**
     * The BBAN property.
     */
    bban?: string;
    /**
     * The description property.
     */
    readonly description?: string;
    /**
     * The account for bank agreement.
     */
    account?: Account;
    readonly uploaderEmployee?: Employee;
    dateCreated?: string;
    bank?: Bank;
    readonly country?: Country;
    readonly currency?: Currency;
    readonly isActive?: boolean;
    /**
     * The showAdviceCurrencyMismatch property.
     */
    showAdviceCurrencyMismatch?: boolean;
    accountInBankId?: string;
    division?: string;
    ccmAgreementId?: string;
    organisationNumber?: string;
}
