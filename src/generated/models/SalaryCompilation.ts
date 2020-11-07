/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SalaryCompilationLine } from './SalaryCompilationLine';

export interface SalaryCompilation {
    readonly employee?: number;
    readonly year?: number;
    readonly vacationPayBasis?: number;
    readonly wages?: Array<SalaryCompilationLine>;
    readonly expenses?: Array<SalaryCompilationLine>;
    readonly deductions?: Array<SalaryCompilationLine>;
}
