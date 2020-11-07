/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Division } from './Division';
import type { Employee } from './Employee';
import type { EmploymentDetails } from './EmploymentDetails';

export interface Employment {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee?: Employee;
    /**
     * Existing employment ID used by the current accounting system
     */
    employmentId?: string;
    startDate: string;
    endDate?: string;
    division?: Division;
    lastSalaryChangeDate?: string;
    /**
     * Activate pensions and other benefits with no employment relationship.
     */
    noEmploymentRelationship?: boolean;
    /**
     * Determines if company is main employer for the employee. Default value is true.<br />Some values will be default set if not sent upon creation of employment: <br/> If isMainEmployer is NOT sent and tax deduction code loennFraHovedarbeidsgiver is sent, isMainEmployer will be set to true. <br /> If isMainEmployer is NOT sent and tax deduction code loennFraBiarbeidsgiver is sent, isMainEmployer will be set to false. <br /> If true and deduction code is NOT sent, value of tax deduction code will be set to loennFraHovedarbeidsgiver. <br /> If false and deduction code is NOT sent, value of tax deduction code will be set to loennFraBiarbeidsgiver. <br /> For other types of Tax Deduction Codes, isMainEmployer does not influence anything.
     */
    isMainEmployer?: boolean;
    /**
     * EMPTY - represents that a tax deduction code is not set on the employment. It is illegal to set the field to this value.  <br /> Default value of this field is loennFraHovedarbeidsgiver or loennFraBiarbeidsgiver depending on boolean isMainEmployer
     */
    taxDeductionCode?: Employment.taxDeductionCode;
    /**
     * Employment types tied to the employment
     */
    employmentDetails?: Array<EmploymentDetails>;
}

export namespace Employment {

    /**
     * EMPTY - represents that a tax deduction code is not set on the employment. It is illegal to set the field to this value.  <br /> Default value of this field is loennFraHovedarbeidsgiver or loennFraBiarbeidsgiver depending on boolean isMainEmployer
     */
    export enum taxDeductionCode {
        LOENN_FRA_HOVEDARBEIDSGIVER = 'loennFraHovedarbeidsgiver',
        LOENN_FRA_BIARBEIDSGIVER = 'loennFraBiarbeidsgiver',
        PENSJON = 'pensjon',
        LOENN_TIL_UTENRIKSTJENESTEMANN = 'loennTilUtenrikstjenestemann',
        LOENN_KUN_TRYGDEAVGIFT_TIL_UTENLANDSK_BORGER = 'loennKunTrygdeavgiftTilUtenlandskBorger',
        LOENN_KUN_TRYGDEAVGIFT_TIL_UTENLANDSK_BORGER_SOM_GRENSEGJENGER = 'loennKunTrygdeavgiftTilUtenlandskBorgerSomGrensegjenger',
        INTRODUKSJONSSTOENAD = 'introduksjonsstoenad',
        UFOEREYTELSER_FRA_ANDRE = 'ufoereytelserFraAndre',
        EMPTY = 'EMPTY',
    }


}
