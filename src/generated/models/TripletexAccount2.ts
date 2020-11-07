/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Company } from './Company';
import type { Employee } from './Employee';
import type { SalesModuleDTO } from './SalesModuleDTO';

export interface TripletexAccount2 {
    /**
     * Information about the company to create. Supply as much info as you have, but at least name, type and address.
     */
    company: Company;
    /**
     * Employee to create. Department on this object will also be created if supplied. If null a dummy user and department will be created instead
     */
    administrator?: Employee;
    /**
     * Is this a test account or a paying account?
     */
    accountType: TripletexAccount2.accountType;
    /**
     * Sales modules (functionality in the application) to activate for the newly created account. Some modules have extra costs.
     */
    modules: Array<SalesModuleDTO>;
    /**
     * Password for the administrator user to create. Not a part of the administrator employee object since this is a value that never can be read (it is salted and hashed before storing)
     */
    administratorPassword: string;
    /**
     * Should the regular creation emails be sent to the company created and its users? If false you probably want to set autoValidateUserLogin to true
     */
    sendEmails?: boolean;
    /**
     * If true, the users created will be allowed to log in without validating their email address. ONLY USE THIS IF YOU ALREADY HAVE VALIDATED THE USER EMAILS.
     */
    autoValidateUserLogin?: boolean;
    /**
     * Create an API token for the administrator user for the consumer token used during this call. The token will be returned in the response.
     */
    createAdministratorApiToken?: boolean;
    /**
     * Create an API token for the company to use to call their clients, only possible for accounting and auditor accounts. The token will be returned in the response.
     */
    createCompanyOwnedApiToken?: boolean;
    /**
     * Should the company we are creating be able to create new Tripletex accounts?
     */
    mayCreateTripletexAccounts?: boolean;
    /**
     * Used to calculate prices.
     */
    numberOfVouchers: TripletexAccount2.numberOfVouchers;
    /**
     * The chart of accounts to use for the new company
     */
    chartOfAccountsType?: TripletexAccount2.chartOfAccountsType;
    /**
     * VAT type
     */
    vatStatusType?: TripletexAccount2.vatStatusType;
    /**
     * Main bank account
     */
    bankAccount?: string;
    /**
     * Swedish post account number (PlusGirot)
     */
    postAccount?: string;
    auditor?: boolean;
    reseller?: boolean;
    accountingOffice?: boolean;
}

export namespace TripletexAccount2 {

    /**
     * Is this a test account or a paying account?
     */
    export enum accountType {
        TEST = 'TEST',
        PAYING = 'PAYING',
    }

    /**
     * Used to calculate prices.
     */
    export enum numberOfVouchers {
        INTERVAL_0_100 = 'INTERVAL_0_100',
        INTERVAL_101_500 = 'INTERVAL_101_500',
        INTERVAL_0_500 = 'INTERVAL_0_500',
        INTERVAL_501_1000 = 'INTERVAL_501_1000',
        INTERVAL_1001_2000 = 'INTERVAL_1001_2000',
        INTERVAL_2001_3500 = 'INTERVAL_2001_3500',
        INTERVAL_3501_5000 = 'INTERVAL_3501_5000',
        INTERVAL_5001_10000 = 'INTERVAL_5001_10000',
        INTERVAL_UNLIMITED = 'INTERVAL_UNLIMITED',
    }

    /**
     * The chart of accounts to use for the new company
     */
    export enum chartOfAccountsType {
        DEFAULT = 'DEFAULT',
        MAMUT_STD_PAYROLL = 'MAMUT_STD_PAYROLL',
        MAMUT_NARF_PAYROLL = 'MAMUT_NARF_PAYROLL',
        AGRO_FORRETNING_PAYROLL = 'AGRO_FORRETNING_PAYROLL',
        AGRO_LANDBRUK_PAYROLL = 'AGRO_LANDBRUK_PAYROLL',
        AGRO_FISKE_PAYROLL = 'AGRO_FISKE_PAYROLL',
        AGRO_FORSOKSRING_PAYROLL = 'AGRO_FORSOKSRING_PAYROLL',
        AGRO_IDRETTSLAG_PAYROLL = 'AGRO_IDRETTSLAG_PAYROLL',
        AGRO_FORENING_PAYROLL = 'AGRO_FORENING_PAYROLL',
    }

    /**
     * VAT type
     */
    export enum vatStatusType {
        VAT_REGISTERED = 'VAT_REGISTERED',
        VAT_NOT_REGISTERED = 'VAT_NOT_REGISTERED',
        VAT_APPLICANT = 'VAT_APPLICANT',
    }


}
