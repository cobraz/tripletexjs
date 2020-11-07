/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Invoice } from './Invoice';
import type { Project } from './Project';
import type { VatType } from './VatType';

export interface ProjectInvoiceDetails {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The Project related to the Invoice and ProjectInvoiceAdditionalInfo.
     */
    readonly project?: Project;
    /**
     * Fee amount of the project. For example: 100 NOK.
     */
    readonly feeAmount?: number;
    /**
     * Fee amount of the project in the invoice currency.
     */
    readonly feeAmountCurrency?: number;
    /**
     * The percentage value of mark-up of amountFee. For example: 10%.
     */
    readonly markupPercent?: number;
    /**
     * The amount value of mark-up of amountFee on the project invoice. For example: 10 NOK.
     */
    readonly markupAmount?: number;
    /**
     * The amount value of mark-up of amountFee on the project invoice, in the invoice currency.
     */
    readonly markupAmountCurrency?: number;
    /**
     * The amount of chargeable manual order lines and vendor invoices on the project invoice.
     */
    readonly amountOrderLinesAndReinvoicing?: number;
    /**
     * The amount of chargeable manual order lines and vendor invoices on the project invoice, in the invoice currency.
     */
    readonly amountOrderLinesAndReinvoicingCurrency?: number;
    /**
     * The amount of travel costs and expenses on the project invoice.
     */
    readonly amountTravelReportsAndExpenses?: number;
    /**
     * The amount of travel costs and expenses on the project invoice, in the invoice currency.
     */
    readonly amountTravelReportsAndExpensesCurrency?: number;
    /**
     * The fee comment on the project invoice.
     */
    readonly feeInvoiceText?: string;
    /**
     * The comment on the project invoice.
     */
    readonly invoiceText?: string;
    /**
     * Determines if extra costs should be included on the project invoice.
     */
    readonly includeOrderLinesAndReinvoicing?: boolean;
    /**
     * Determines if hours should be included on the project invoice.
     */
    readonly includeHours?: boolean;
    /**
     * Determines if akonto should be included on the project invoice.
     */
    readonly includeOnAccountBalance?: boolean;
    /**
     * The akonto amount on the project invoice.
     */
    readonly onAccountBalanceAmount?: number;
    /**
     * The akonto amount on the project invoice in the invoice currency.
     */
    readonly onAccountBalanceAmountCurrency?: number;
    /**
     * The VAT type of the project invoice.
     */
    readonly vatType?: VatType;
    readonly invoice?: Invoice;
}
