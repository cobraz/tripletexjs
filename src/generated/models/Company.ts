/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Change } from './Change';

export interface Company {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    email?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    faxNumber?: string;
    address: Address;
    type: Company.type;
}

export namespace Company {

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


}
