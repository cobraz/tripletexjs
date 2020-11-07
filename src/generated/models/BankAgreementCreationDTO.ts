/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';

export interface BankAgreementCreationDTO {
    /**
     * Bank ID
     */
    bankId: number;
    /**
     * Customer number in bank
     */
    accountInBankId?: string;
    /**
     * Customer Id from Bank
     */
    ccmAgreementId?: string;
    /**
     * Division (DNB only)
     */
    division?: string;
    /**
     * Organization number
     */
    organizationNumber?: string;
    /**
     * Electronic agreement creation initiated.
     */
    electronicCreation?: boolean;
    /**
     * JSON representing a list of new object to be created. Should not have ID and version set.
     */
    bankAccounts: Array<Account>;
}
