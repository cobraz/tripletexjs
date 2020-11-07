/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Country } from './Country';
import type { Currency } from './Currency';
import type { VatType } from './VatType';

export interface Account {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    number: number;
    name: string;
    description?: string;
    readonly type?: Account.type;
    /**
     * The default vat type for this account.
     */
    vatType?: VatType;
    /**
     * True if all entries on this account must have the vat type given by vatType.
     */
    vatLocked?: boolean;
    /**
     * If given, all entries on this account must have this currency.
     */
    currency?: Currency;
    /**
     * True if it should be possible to close entries on this account and it is possible to filter on open entries.
     */
    isCloseable?: boolean;
    /**
     * True if this account is applicable for supplier invoice registration.
     */
    isApplicableForSupplierInvoice?: boolean;
    /**
     * True if this account must be reconciled before the accounting period closure.
     */
    requireReconciliation?: boolean;
    /**
     * Inactive accounts will not show up in UI lists.
     */
    isInactive?: boolean;
    isBankAccount?: boolean;
    isInvoiceAccount?: boolean;
    bankAccountNumber?: string;
    bankAccountCountry?: Country;
    bankName?: string;
    bankAccountIBAN?: string;
    bankAccountSWIFT?: string;
}

export namespace Account {

    export enum type {
        ASSETS = 'ASSETS',
        EQUITY = 'EQUITY',
        LIABILITIES = 'LIABILITIES',
        OPERATING_REVENUES = 'OPERATING_REVENUES',
        OPERATING_EXPENSES = 'OPERATING_EXPENSES',
        INVESTMENT_INCOME = 'INVESTMENT_INCOME',
        COST_OF_CAPITAL = 'COST_OF_CAPITAL',
        TAX_ON_ORDINARY_ACTIVITIES = 'TAX_ON_ORDINARY_ACTIVITIES',
        EXTRAORDINARY_INCOME = 'EXTRAORDINARY_INCOME',
        EXTRAORDINARY_COST = 'EXTRAORDINARY_COST',
        TAX_ON_EXTRAORDINARY_ACTIVITIES = 'TAX_ON_EXTRAORDINARY_ACTIVITIES',
        ANNUAL_RESULT = 'ANNUAL_RESULT',
        TRANSFERS_AND_ALLOCATIONS = 'TRANSFERS_AND_ALLOCATIONS',
    }


}
