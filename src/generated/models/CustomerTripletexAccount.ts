/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee } from './Employee';
import type { Modules } from './Modules';

export interface CustomerTripletexAccount {
    /**
     * Administrator user to create in the new company. Leave empty if calling this enpoint as an auditor og accountant company
     */
    administrator?: Employee;
    /**
     * The customer id to an already created customer to create a Tripletex account for.
     */
    customerId?: number;
    accountType: CustomerTripletexAccount.accountType;
    modules: Modules;
    type: CustomerTripletexAccount.type;
    /**
     * Should the emails normally sent during creation be sent in this case?
     */
    sendEmails?: boolean;
    /**
     * Should the user be automatically validated?
     */
    autoValidateUserLogin?: boolean;
    /**
     * Creates a token for the admin user. The accounting office could also use their tokens so you might not need this.
     */
    createApiToken?: boolean;
    /**
     * Should the invoices for this account be sent to the customer?
     */
    sendInvoiceToCustomer?: boolean;
    /**
     * The address to send the invoice to at the customer.
     */
    customerInvoiceEmail?: string;
    /**
     * The number of employees in the customer company. Is used for calculating prices and setting some default settings, i.e. approval settings for timesheet.
     */
    numberOfEmployees?: number;
    /**
     * Number of vouchers each year. Used to calculate prices.
     */
    numberOfVouchers: CustomerTripletexAccount.numberOfVouchers;
    /**
     * The password of the administrator user.
     */
    administratorPassword?: string;
    /**
     * The chart of accounts to use for the new company
     */
    chartOfAccountsType?: CustomerTripletexAccount.chartOfAccountsType;
}

export namespace CustomerTripletexAccount {

    export enum accountType {
        TEST = 'TEST',
        PAYING = 'PAYING',
    }

    export enum type {
        NONE = 'NONE',
        ENK = 'ENK',
        AS = 'AS',
        NUF = 'NUF',
        ANS = 'ANS',
        DA = 'DA',
        PRE = 'PRE',
        KS = 'KS',
        ASA = 'ASA',
        BBL = 'BBL',
        BRL = 'BRL',
        GFS = 'GFS',
        SPA = 'SPA',
        SF = 'SF',
        IKS = 'IKS',
        KF_FKF = 'KF_FKF',
        FCD = 'FCD',
        EOFG = 'EOFG',
        BA = 'BA',
        STI = 'STI',
        ORG = 'ORG',
        ESEK = 'ESEK',
        SA = 'SA',
        SAM = 'SAM',
        BO = 'BO',
        VPFO = 'VPFO',
        OS = 'OS',
        OTHER = 'Other',
    }

    /**
     * Number of vouchers each year. Used to calculate prices.
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


}
