/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Invoice } from '../models/Invoice';
import type { ListResponseInvoice } from '../models/ListResponseInvoice';
import type { ResponseWrapperInvoice } from '../models/ResponseWrapperInvoice';
import { request as __request } from '../core/request';

export class InvoiceService {

    /**
     * Find invoices corresponding with sent data. Includes charged outgoing invoices only.
     * @param invoiceDateFrom From and including
     * @param invoiceDateTo To and excluding
     * @param id List of IDs
     * @param invoiceNumber Equals
     * @param kid Equals
     * @param voucherId Equals
     * @param customerId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseInvoice successful operation
     * @throws ApiError
     */
    public static async invoiceSearch({
        invoiceDateFrom,
        invoiceDateTo,
        id,
        invoiceNumber,
        kid,
        voucherId,
        customerId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        invoiceDateFrom: string,
        invoiceDateTo: string,
        id?: string,
        invoiceNumber?: string,
        kid?: string,
        voucherId?: string,
        customerId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseInvoice> {
    const result = await __request({
        method: 'GET',
        path: `/invoice`,
        query: {
            'invoiceDateFrom': invoiceDateFrom,
            'invoiceDateTo': invoiceDateTo,
            'id': id,
            'invoiceNumber': invoiceNumber,
            'kid': kid,
            'voucherId': voucherId,
            'customerId': customerId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create invoice. Related Order and OrderLines can be created first, or included as new objects inside the Invoice.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @param sendToCustomer Equals
 * @param paymentTypeId Payment type to register prepayment of the invoice. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid.
 * @param paidAmount Paid amount to register prepayment of the invoice, in invoice currency. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid.
 * @result ResponseWrapperInvoice successfully created
 * @throws ApiError
 */
public static async invoicePost({
    body,
    sendToCustomer = true,
    paymentTypeId,
    paidAmount,
}: {
    body?: Invoice,
    sendToCustomer?: boolean,
    paymentTypeId?: number,
    paidAmount?: number,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'POST',
        path: `/invoice`,
        query: {
            'sendToCustomer': sendToCustomer,
            'paymentTypeId': paymentTypeId,
            'paidAmount': paidAmount,
        },
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple invoices. Max 100 at a time.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @param sendToCustomer Equals
 * @result ListResponseInvoice successfully created
 * @throws ApiError
 */
public static async invoiceListPostList({
    body,
    sendToCustomer = true,
}: {
    body?: Array<Invoice>,
    sendToCustomer?: boolean,
}
): Promise<ListResponseInvoice> {
    const result = await __request({
        method: 'POST',
        path: `/invoice/list`,
        query: {
            'sendToCustomer': sendToCustomer,
        },
        body: body,
    });
    return result.body;
}

/**
 * Get invoice by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperInvoice successful operation
 * @throws ApiError
 */
public static async invoiceGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'GET',
        path: `/invoice/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Creates a new Invoice representing a credit memo that nullifies the given invoice. Updates this invoice and any pre-existing inverse invoice.
 * @param id Invoice id
 * @param date Credit note date
 * @param comment Comment
 * @param creditNoteEmail The credit note will be sent electronically if this field is filled out
 * @result ResponseWrapperInvoice successful operation
 * @throws ApiError
 */
public static async invoiceCreateCreditNoteCreateCreditNote({
    id,
    date,
    comment,
    creditNoteEmail,
}: {
    id: number,
    date: string,
    comment?: string,
    creditNoteEmail?: string,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/invoice/${id}/:createCreditNote`,
        query: {
            'date': date,
            'comment': comment,
            'creditNoteEmail': creditNoteEmail,
        },
    });
    return result.body;
}

/**
 * Create invoice reminder and sends it by the given dispatch type. Supports the reminder types SOFT_REMINDER, REMINDER and NOTICE_OF_DEBT_COLLECTION. DispatchType NETS_PRINT must have type NOTICE_OF_DEBT_COLLECTION. SMS and NETS_PRINT must be activated prior to usage in the API.
 * @param id Element ID
 * @param type type
 * @param date yyyy-MM-dd. Defaults to today.
 * @param dispatchType dispatchType
 * @param includeCharge Equals
 * @param includeInterest Equals
 * @param smsNumber SMS number (must be a valid Norwegian telephone number)
 * @result any successful operation
 * @throws ApiError
 */
public static async invoiceCreateReminderCreateReminder({
    id,
    type,
    date,
    dispatchType,
    includeCharge = false,
    includeInterest = false,
    smsNumber,
}: {
    id: number,
    type: 'SOFT_REMINDER' | 'REMINDER' | 'NOTICE_OF_DEBT_COLLECTION' | 'DEBT_COLLECTION',
    date: string,
    dispatchType: 'NETS_PRINT' | 'EMAIL' | 'SMS',
    includeCharge?: boolean,
    includeInterest?: boolean,
    smsNumber?: string,
}
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/invoice/${id}/:createReminder`,
        query: {
            'type': type,
            'date': date,
            'dispatchType': dispatchType,
            'includeCharge': includeCharge,
            'includeInterest': includeInterest,
            'smsNumber': smsNumber,
        },
    });
    return result.body;
}

/**
 * Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.
 * @param id Invoice id
 * @param paymentDate Payment date
 * @param paymentTypeId PaymentType id
 * @param paidAmount Amount paid by customer in the company currency, typically NOK.
 * @param paidAmountCurrency Amount paid by customer in the invoice currency. Optional, but required for invoices in alternate currencies.
 * @result ResponseWrapperInvoice successful operation
 * @throws ApiError
 */
public static async invoicePaymentPayment({
    id,
    paymentDate,
    paymentTypeId,
    paidAmount,
    paidAmountCurrency,
}: {
    id: number,
    paymentDate: string,
    paymentTypeId: number,
    paidAmount: number,
    paidAmountCurrency?: number,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/invoice/${id}/:payment`,
        query: {
            'paymentDate': paymentDate,
            'paymentTypeId': paymentTypeId,
            'paidAmount': paidAmount,
            'paidAmountCurrency': paidAmountCurrency,
        },
    });
    return result.body;
}

/**
 * Send invoice by ID and sendType. Optionally override email recipient.
 * @param id Element ID
 * @param sendType SendType
 * @param overrideEmailAddress Will override email address if sendType = EMAIL
 * @result any successful operation
 * @throws ApiError
 */
public static async invoiceSendSend({
    id,
    sendType,
    overrideEmailAddress,
}: {
    id: number,
    sendType: 'EMAIL' | 'EHF' | 'EFAKTURA' | 'VIPPS' | 'PAPER',
    overrideEmailAddress?: string,
}
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/invoice/${id}/:send`,
        query: {
            'sendType': sendType,
            'overrideEmailAddress': overrideEmailAddress,
        },
    });
    return result.body;
}

/**
 * Get invoice document by invoice ID.
 * @param invoiceId Invoice ID from which PDF is downloaded.
 * @result string successful operation
 * @throws ApiError
 */
public static async invoicePdfDownloadPdf({
    invoiceId,
}: {
    invoiceId: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/invoice/${invoiceId}/pdf`,
    });
    return result.body;
}

}