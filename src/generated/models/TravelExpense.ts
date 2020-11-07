/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccommodationAllowance } from './AccommodationAllowance';
import type { Change } from './Change';
import type { Cost } from './Cost';
import type { Currency } from './Currency';
import type { Department } from './Department';
import type { Document } from './Document';
import type { Employee } from './Employee';
import type { Invoice } from './Invoice';
import type { Link } from './Link';
import type { MileageAllowance } from './MileageAllowance';
import type { Payslip } from './Payslip';
import type { PerDiemCompensation } from './PerDiemCompensation';
import type { Project } from './Project';
import type { TravelDetails } from './TravelDetails';
import type { VatType } from './VatType';
import type { Voucher } from './Voucher';

export interface TravelExpense {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    project?: Project;
    employee: Employee;
    readonly approvedBy?: Employee;
    readonly completedBy?: Employee;
    department?: Department;
    readonly payslip?: Payslip;
    vatType?: VatType;
    paymentCurrency?: Currency;
    travelDetails?: TravelDetails;
    readonly voucher?: Voucher;
    readonly attachment?: Document;
    readonly isCompleted?: boolean;
    readonly isApproved?: boolean;
    isChargeable?: boolean;
    isFixedInvoicedAmount?: boolean;
    isIncludeAttachedReceiptsWhenReinvoicing?: boolean;
    readonly completedDate?: string;
    readonly approvedDate?: string;
    readonly date?: string;
    travelAdvance?: number;
    fixedInvoicedAmount?: number;
    readonly amount?: number;
    readonly paymentAmount?: number;
    readonly chargeableAmount?: number;
    readonly lowRateVAT?: number;
    readonly mediumRateVAT?: number;
    readonly highRateVAT?: number;
    readonly paymentAmountCurrency?: number;
    readonly number?: number;
    readonly invoice?: Invoice;
    title?: string;
    /**
     * Link to individual per diem compensations.
     */
    perDiemCompensations?: Array<PerDiemCompensation>;
    /**
     * Link to individual mileage allowances.
     */
    readonly mileageAllowances?: Array<MileageAllowance>;
    /**
     * Link to individual accommodation allowances.
     */
    readonly accommodationAllowances?: Array<AccommodationAllowance>;
    /**
     * Link to individual costs.
     */
    costs?: Array<Cost>;
    readonly attachmentCount?: number;
    readonly state?: TravelExpense.state;
    readonly actions?: Array<Link>;
    readonly isSalaryAdmin?: boolean;
    readonly showPayslip?: boolean;
    readonly accountingPeriodClosed?: boolean;
    readonly accountingPeriodVATClosed?: boolean;
}

export namespace TravelExpense {

    export enum state {
        ALL = 'ALL',
        OPEN = 'OPEN',
        APPROVED = 'APPROVED',
        SALARY_PAID = 'SALARY_PAID',
        DELIVERED = 'DELIVERED',
    }


}
