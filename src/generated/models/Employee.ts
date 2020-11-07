/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Change } from './Change';
import type { Country } from './Country';
import type { Department } from './Department';
import type { Employment } from './Employment';
import type { HolidayAllowanceEarned } from './HolidayAllowanceEarned';
import type { InternationalId } from './InternationalId';

export interface Employee {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    firstName: string;
    lastName: string;
    employeeNumber?: string;
    dateOfBirth?: string;
    email?: string;
    /**
     * The country of the mobile phone number. If not set, the country is derived as best as possible from phoneNumberMobile. NB! 8 digit numbers are assumed to be Norwegian.
     */
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    phoneNumberHome?: string;
    phoneNumberWork?: string;
    nationalIdentityNumber?: string;
    dnumber?: string;
    internationalId?: InternationalId;
    bankAccountNumber?: string;
    /**
     * IBAN field -- pilot program
     */
    iban?: string;
    /**
     * Bic (swift) field -- pilot program
     */
    bic?: string;
    /**
     * Country of creditor bank field -- pilot program
     */
    creditorBankCountryId?: number;
    /**
     * UsesAbroadPayment field -- pilot program. Determines if we should use domestic or abroad remittance. To be able to use abroad remittance, one has to: 1: have Autopay 2: have valid combination of the fields Iban, Bic (swift) and Country of creditor bank.
     */
    usesAbroadPayment?: boolean;
    /**
     * Define the employee's user type.<br>STANDARD: Reduced access. Users with limited system entitlements.<br>EXTENDED: Users can be given all system entitlements.<br>NO_ACCESS: User with no log on access.<br>Users with access to Tripletex must confirm the email address.
     */
    userType?: Employee.userType;
    /**
     * Determines if salary information can be registered on the user including hours, travel expenses and employee expenses. The user may also be selected as a project member on projects.
     */
    readonly allowInformationRegistration?: boolean;
    readonly isContact?: boolean;
    comments?: string;
    /**
     * Address tied to the employee
     */
    address?: Address;
    department?: Department;
    /**
     * Employments tied to the employee
     */
    employments?: Array<Employment>;
    holidayAllowanceEarned?: HolidayAllowanceEarned;
}

export namespace Employee {

    /**
     * Define the employee's user type.<br>STANDARD: Reduced access. Users with limited system entitlements.<br>EXTENDED: Users can be given all system entitlements.<br>NO_ACCESS: User with no log on access.<br>Users with access to Tripletex must confirm the email address.
     */
    export enum userType {
        STANDARD = 'STANDARD',
        EXTENDED = 'EXTENDED',
        NO_ACCESS = 'NO_ACCESS',
    }


}
