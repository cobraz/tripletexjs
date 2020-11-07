/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface SearchCompletionDTO {
    name?: string;
    alternateName?: string;
    address?: string;
    postalCode?: string;
    postalArea?: string;
    latitude?: number;
    longitude?: number;
    score?: number;
    sources?: Array<'SEARCH1881' | 'TRIPLETEX' | 'NICKNAME' | 'EMPLOYEE' | 'CONTACT' | 'ACTIVITY' | 'PROJECT' | 'ORDER' | 'OFFER' | 'CUSTOMER' | 'COMPANY' | 'CONTROLSCHEMA' | 'HOUR' | 'TRAVELEXPENSE'>;
    id?: string;
    category?: string;
}
