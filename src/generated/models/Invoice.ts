/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Customer } from './Customer';
import type { Order } from './Order';
import type { Posting } from './Posting';
import type { ProjectInvoiceDetails } from './ProjectInvoiceDetails';
import type { Reminder } from './Reminder';
import type { Voucher } from './Voucher';

export interface Invoice {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * If value is set to 0, the invoice number will be generated.
     */
    invoiceNumber?: number;
    invoiceDate: string;
    /**
     * The invoice customer
     */
    readonly customer?: Customer;
    invoiceDueDate: string;
    /**
     * KID - Kundeidentifikasjonsnummer.
     */
    kid?: string;
    /**
     * Comment text for the invoice. This was specified on the order as invoiceComment.
     */
    readonly invoiceComment?: string;
    /**
     * Comment text for the specific invoice.
     */
    comment?: string;
    /**
     * Related orders. Only one order per invoice is supported at the moment.
     */
    orders: Array<Order>;
    /**
     * ProjectInvoiceDetails contains additional information about the invoice, in particular invoices for projects. It contains information about the charged project, the fee amount, extra percent and amount, extra costs, travel expenses, invoice and project comments, akonto amount and values determining if extra costs, akonto and hours should be included. ProjectInvoiceDetails is an object which represents the relation between an invoice and a Project, Orderline and OrderOut object.
     */
    readonly projectInvoiceDetails?: Array<ProjectInvoiceDetails>;
    /**
     * The invoice voucher.
     */
    readonly voucher?: Voucher;
    /**
     * The delivery date.
     */
    readonly deliveryDate?: string;
    /**
     * In the company’s currency, typically NOK.
     */
    readonly amount?: number;
    /**
     * In the specified currency.
     */
    readonly amountCurrency?: number;
    /**
     * Amount excluding VAT (NOK).
     */
    readonly amountExcludingVat?: number;
    /**
     * Amount excluding VAT in the specified currency.
     */
    readonly amountExcludingVatCurrency?: number;
    /**
     * Amount of round off to nearest integer.
     */
    readonly amountRoundoff?: number;
    /**
     * Amount of round off to nearest integer in the specified currency.
     */
    readonly amountRoundoffCurrency?: number;
    /**
     * The amount outstanding based on the history collection, excluding reminders and any existing remits, in the invoice currency.
     */
    readonly amountOutstanding?: number;
    /**
     * The amount outstanding based on the history collection and including the last reminder and any existing remits. This is the total invoice balance including reminders and remittances, in the invoice currency.
     */
    readonly amountOutstandingTotal?: number;
    /**
     * The sum of all open remittances of the invoice. Remittances are reimbursement payments back to the customer and are therefore relevant to the bookkeeping of the invoice in the accounts.
     */
    readonly sumRemits?: number;
    readonly currency?: Currency;
    readonly isCreditNote?: boolean;
    readonly isCharged?: boolean;
    readonly isApproved?: boolean;
    /**
     * The invoice postings, which includes a posting for the invoice with a positive amount, and one or more posting for the payments with negative amounts.
     */
    readonly postings?: Array<Posting>;
    /**
     * Invoice debt collection and reminders.
     */
    readonly reminders?: Array<Reminder>;
    /**
     * Invoice remarks - automatically stops reminder/notice of debt collection if specified.
     */
    invoiceRemarks?: string;
    /**
     * [BETA] Optional. Used to specify payment type for prepaid invoices. Payment type can be specified here, or as a parameter to the /invoice API endpoint.
     */
    paymentTypeId?: number;
    /**
     * [BETA] Optional. Used to specify the prepaid amount of the invoice. The paid amount can be specified here, or as a parameter to the /invoice API endpoint.
     */
    paidAmount?: number;
    /**
     * [Deprecated] EHF (Peppol) send status. This only shows status for historic EHFs.
     */
    ehfSendStatus?: Invoice.ehfSendStatus;
}

export namespace Invoice {

    /**
     * [Deprecated] EHF (Peppol) send status. This only shows status for historic EHFs.
     */
    export enum ehfSendStatus {
        DO_NOT_SEND = 'DO_NOT_SEND',
        SEND = 'SEND',
        SENT = 'SENT',
        SEND_FAILURE_RECIPIENT_NOT_FOUND = 'SEND_FAILURE_RECIPIENT_NOT_FOUND',
    }


}
