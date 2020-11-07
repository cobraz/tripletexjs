/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { SalesForceAddress } from './SalesForceAddress';

export interface SalesForceEmployee {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly firstName?: string;
    readonly lastName?: string;
    readonly email?: string;
    readonly phoneNumberMobile?: string;
    readonly phoneNumberHome?: string;
    readonly phoneNumberWork?: string;
    readonly userId?: number;
    readonly companyId?: number;
    readonly customerId?: number;
    readonly phoneNumberSmsCertified?: string;
    readonly isUserAdministrator?: boolean;
    readonly isAccountAdministrator?: boolean;
    readonly allowLogin?: boolean;
    readonly isExternal?: boolean;
    readonly isTripletexCertified?: boolean;
    readonly isDefaultLogin?: boolean;
    /**
     * Login end date
     */
    readonly loginEndDate?: string;
    readonly address?: SalesForceAddress;
}
