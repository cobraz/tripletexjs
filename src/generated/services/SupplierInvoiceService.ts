/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseSupplierInvoice } from '../models/ListResponseSupplierInvoice';
import type { OrderLinePostingDTO } from '../models/OrderLinePostingDTO';
import type { ResponseWrapperSupplierInvoice } from '../models/ResponseWrapperSupplierInvoice';
import type { ResponseWrapperVoucher } from '../models/ResponseWrapperVoucher';
import { request as __request } from '../core/request';

export class SupplierInvoiceService {

    /**
     * [BETA] Find supplierInvoices corresponding with sent data.
     * @param invoiceDateFrom From and including
     * @param invoiceDateTo To and excluding
     * @param id List of IDs
     * @param invoiceNumber Equals
     * @param kid Equals
     * @param voucherId Equals
     * @param supplierId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseSupplierInvoice successful operation
     * @throws ApiError
     */
    public static async supplierInvoiceSearch({
        invoiceDateFrom,
        invoiceDateTo,
        id,
        invoiceNumber,
        kid,
        voucherId,
        supplierId,
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
        supplierId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseSupplierInvoice> {
    const result = await __request({
        method: 'GET',
        path: `/supplierInvoice`,
        query: {
            'invoiceDateFrom': invoiceDateFrom,
            'invoiceDateTo': invoiceDateTo,
            'id': id,
            'invoiceNumber': invoiceNumber,
            'kid': kid,
            'voucherId': voucherId,
            'supplierId': supplierId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Add recipient.
 * @param employeeId Element ID
 * @param invoiceIds ID of the elements
 * @param comment comment
 * @result ListResponseSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceAddRecipientAddRecipientToMany({
    employeeId,
    invoiceIds,
    comment,
}: {
    employeeId: number,
    invoiceIds?: string,
    comment?: string,
}
): Promise<ListResponseSupplierInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/:addRecipient`,
        query: {
            'employeeId': employeeId,
            'invoiceIds': invoiceIds,
            'comment': comment,
        },
    });
    return result.body;
}

/**
 * [BETA] Approve supplier invoices.
 * @param invoiceIds ID of the elements
 * @param comment comment
 * @result ListResponseSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceApproveApproveMany({
    invoiceIds,
    comment,
}: {
    invoiceIds?: string,
    comment?: string,
}
): Promise<ListResponseSupplierInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/:approve`,
        query: {
            'invoiceIds': invoiceIds,
            'comment': comment,
        },
    });
    return result.body;
}

/**
 * [BETA] reject supplier invoices.
 * @param comment
 * @param invoiceIds ID of the elements
 * @result ListResponseSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceRejectRejectMany({
    comment,
    invoiceIds,
}: {
    comment: string,
    invoiceIds?: string,
}
): Promise<ListResponseSupplierInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/:reject`,
        query: {
            'comment': comment,
            'invoiceIds': invoiceIds,
        },
    });
    return result.body;
}

/**
 * [BETA] Get supplierInvoices for approval
 * @param searchText Search for department, employee, project and more
 * @param showAll Show all or just your own
 * @param employeeId Default is logged in employee
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceForApprovalGetApprovalInvoices({
    searchText,
    showAll = false,
    employeeId,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    searchText?: string,
    showAll?: boolean,
    employeeId?: number,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseSupplierInvoice> {
    const result = await __request({
        method: 'GET',
        path: `/supplierInvoice/forApproval`,
        query: {
            'searchText': searchText,
            'showAll': showAll,
            'employeeId': employeeId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Put debit postings.
 * @param id Voucher id
 * @param body Postings
 * @param sendToLedger Equals
 * @result ResponseWrapperVoucher successful operation
 * @throws ApiError
 */
public static async supplierInvoiceVoucherPostingsPutPostings({
    id,
    body,
    sendToLedger = false,
}: {
    id: number,
    body?: Array<OrderLinePostingDTO>,
    sendToLedger?: boolean,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/voucher/${id}/postings`,
        query: {
            'sendToLedger': sendToLedger,
        },
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get supplierInvoice by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperSupplierInvoice> {
    const result = await __request({
        method: 'GET',
        path: `/supplierInvoice/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Add recipient to supplier invoices.
 * @param invoiceId Invoice ID.
 * @param employeeId ID of the elements
 * @param comment comment
 * @result ResponseWrapperSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceAddRecipientAddRecipient({
    invoiceId,
    employeeId,
    comment,
}: {
    invoiceId: number,
    employeeId: number,
    comment?: string,
}
): Promise<ResponseWrapperSupplierInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/${invoiceId}/:addRecipient`,
        query: {
            'employeeId': employeeId,
            'comment': comment,
        },
    });
    return result.body;
}

/**
 * [BETA] Approve supplier invoice.
 * @param invoiceId ID of the elements
 * @param comment comment
 * @result ResponseWrapperSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceApproveApprove({
    invoiceId,
    comment,
}: {
    invoiceId: number,
    comment?: string,
}
): Promise<ResponseWrapperSupplierInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/${invoiceId}/:approve`,
        query: {
            'comment': comment,
        },
    });
    return result.body;
}

/**
 * [BETA] reject supplier invoice.
 * @param invoiceId Invoice ID.
 * @param comment
 * @result ResponseWrapperSupplierInvoice successful operation
 * @throws ApiError
 */
public static async supplierInvoiceRejectReject({
    invoiceId,
    comment,
}: {
    invoiceId: number,
    comment: string,
}
): Promise<ResponseWrapperSupplierInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/supplierInvoice/${invoiceId}/:reject`,
        query: {
            'comment': comment,
        },
    });
    return result.body;
}

/**
 * [BETA] Get supplierInvoice document by invoice ID.
 * @param invoiceId Invoice ID from which document is downloaded.
 * @result string successful operation
 * @throws ApiError
 */
public static async supplierInvoicePdfDownloadPdf({
    invoiceId,
}: {
    invoiceId: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/supplierInvoice/${invoiceId}/pdf`,
    });
    return result.body;
}

}