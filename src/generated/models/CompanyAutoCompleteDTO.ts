/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface CompanyAutoCompleteDTO {
    name?: string;
    alternateName?: string;
    address?: string;
    postalCode?: string;
    postalArea?: string;
    latitude?: number;
    longitude?: number;
    score?: number;
    sources?: Array<'SEARCH1881' | 'TRIPLETEX' | 'NICKNAME' | 'EMPLOYEE' | 'CONTACT' | 'ACTIVITY' | 'PROJECT' | 'ORDER' | 'OFFER' | 'CUSTOMER' | 'COMPANY' | 'CONTROLSCHEMA' | 'HOUR' | 'TRAVELEXPENSE'>;
    companyCode?: string;
    companyType?: number;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    email?: string;
    url?: string;
    countryId?: number;
}
