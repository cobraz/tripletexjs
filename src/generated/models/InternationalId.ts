/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';

export interface InternationalId {
    /**
     * Define the employee's International Identificator.<br>PASSPORT_NO<br>NATIONAL_INSURANCE_NO<br>TAX_IDENTIFICATION_NO<br>VALUE_ADDED_TAX_IDENTIFICATION_NO
     */
    intAmeldingType?: InternationalId.intAmeldingType;
    country?: Country;
    number?: string;
}

export namespace InternationalId {

    /**
     * Define the employee's International Identificator.<br>PASSPORT_NO<br>NATIONAL_INSURANCE_NO<br>TAX_IDENTIFICATION_NO<br>VALUE_ADDED_TAX_IDENTIFICATION_NO
     */
    export enum intAmeldingType {
        PASSPORT_NO = 'PASSPORT_NO',
        NATIONAL_INSURANCE_NO = 'NATIONAL_INSURANCE_NO',
        TAX_IDENTIFICATION_NO = 'TAX_IDENTIFICATION_NO',
        VALUE_ADDED_TAX_IDENTIFICATION_NO = 'VALUE_ADDED_TAX_IDENTIFICATION_NO',
    }


}
