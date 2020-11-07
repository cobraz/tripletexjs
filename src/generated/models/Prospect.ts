/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Customer } from './Customer';
import type { Employee } from './Employee';
import type { Project } from './Project';

export interface Prospect {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
    description?: string;
    createdDate: string;
    customer?: Customer;
    salesEmployee?: Employee;
    isClosed?: boolean;
    closedReason?: number;
    closedDate?: string;
    competitor?: string;
    prospectType?: number;
    /**
     * The project connected to this prospect.
     */
    project?: Project;
    /**
     * The project offer connected to this prospect.
     */
    projectOffer?: Project;
    /**
     * The estimated start date for income on the prospect.
     */
    finalIncomeDate?: string;
    /**
     * The estimated startup fee on this prospect.
     */
    finalInitialValue?: number;
    /**
     * The estimated monthly fee on this prospect.
     */
    finalMonthlyValue?: number;
    /**
     * Tripletex specific.
     */
    finalAdditionalServicesValue?: number;
    /**
     * The estimated total fee on this prospect.
     */
    readonly totalValue?: number;
}
