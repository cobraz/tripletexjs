/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface PersonAutoCompleteDTO {
    name?: string;
    alternateName?: string;
    address?: string;
    postalCode?: string;
    postalArea?: string;
    latitude?: number;
    longitude?: number;
    score?: number;
    sources?: Array<'SEARCH1881' | 'TRIPLETEX' | 'NICKNAME' | 'EMPLOYEE' | 'CONTACT' | 'ACTIVITY' | 'PROJECT' | 'ORDER' | 'OFFER' | 'CUSTOMER' | 'COMPANY' | 'CONTROLSCHEMA' | 'HOUR' | 'TRAVELEXPENSE'>;
    firstname?: string;
    lastname?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    email?: string;
    url?: string;
    countryId?: number;
    reserved?: boolean;
}
