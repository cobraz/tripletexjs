/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';
import type { OrderLine } from './OrderLine';
import type { Posting } from './Posting';
import type { Supplier } from './Supplier';
import type { Voucher } from './Voucher';
import type { VoucherApprovalListElement } from './VoucherApprovalListElement';

export interface SupplierInvoice {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Invoice number
     */
    invoiceNumber?: string;
    invoiceDate: string;
    /**
     * The invoice supplier
     */
    supplier?: Supplier;
    invoiceDueDate: string;
    /**
     * KID or message
     */
    kidOrReceiverReference?: string;
    /**
     * The invoice voucher.
     */
    voucher?: Voucher;
    /**
     * In the company’s currency, typically NOK. Is 0 if value is missing.
     */
    readonly amount?: number;
    /**
     * In the specified currency.
     */
    amountCurrency?: number;
    /**
     * Amount excluding VAT (NOK). Is 0 if value is missing.
     */
    readonly amountExcludingVat?: number;
    /**
     * Amount excluding VAT in the specified currency. Is 0 if value is missing.
     */
    readonly amountExcludingVatCurrency?: number;
    currency?: Currency;
    readonly isCreditNote?: boolean;
    readonly orderLines?: Array<OrderLine>;
    readonly payments?: Array<Posting>;
    readonly originalInvoiceDocumentId?: number;
    readonly approvalListElements?: Array<VoucherApprovalListElement>;
}
