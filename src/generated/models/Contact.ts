/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Country } from './Country';
import type { Customer } from './Customer';

export interface Contact {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    /**
     * The country of the mobile phone number. If not set, the country is derived as best as possible from phoneNumberMobile. NB! 8 digit numbers are assumed to be Norwegian.
     */
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    phoneNumberWork?: string;
    customer?: Customer;
}
