/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Municipality } from './Municipality';

export interface SalarySettings {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    municipality?: Municipality;
    /**
     * Define the Payroll Tax Calculation Method. AA General industries,BB Central government administration and health trusts, CC Exempted business sectors (and undertakings in economic difficulty),DD Agriculture and forestry, fisheries etc., EE Reporting of payroll withholding tax only,GG Road freight transport
     */
    payrollTaxCalcMethod: SalarySettings.payrollTaxCalcMethod;
}

export namespace SalarySettings {

    /**
     * Define the Payroll Tax Calculation Method. AA General industries,BB Central government administration and health trusts, CC Exempted business sectors (and undertakings in economic difficulty),DD Agriculture and forestry, fisheries etc., EE Reporting of payroll withholding tax only,GG Road freight transport
     */
    export enum payrollTaxCalcMethod {
        AA = 'AA',
        BB = 'BB',
        CC = 'CC',
        DD = 'DD',
        EE = 'EE',
        GG = 'GG',
        JJ = 'JJ',
        EMPTY = 'EMPTY',
    }


}
