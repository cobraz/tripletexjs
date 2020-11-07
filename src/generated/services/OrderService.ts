/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseOrder } from '../models/ListResponseOrder';
import type { Order } from '../models/Order';
import type { ResponseWrapperDocumentArchive } from '../models/ResponseWrapperDocumentArchive';
import type { ResponseWrapperInvoice } from '../models/ResponseWrapperInvoice';
import type { ResponseWrapperOrder } from '../models/ResponseWrapperOrder';
import { request as __request } from '../core/request';

export class OrderService {

    /**
     * Find orders corresponding with sent data.
     * @param orderDateFrom From and including
     * @param orderDateTo To and excluding
     * @param id List of IDs
     * @param number Equals
     * @param customerId List of IDs
     * @param isClosed Equals
     * @param isSubscription Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseOrder successful operation
     * @throws ApiError
     */
    public static async orderSearch({
        orderDateFrom,
        orderDateTo,
        id,
        number,
        customerId,
        isClosed,
        isSubscription,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        orderDateFrom: string,
        orderDateTo: string,
        id?: string,
        number?: string,
        customerId?: string,
        isClosed?: boolean,
        isSubscription?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseOrder> {
    const result = await __request({
        method: 'GET',
        path: `/order`,
        query: {
            'orderDateFrom': orderDateFrom,
            'orderDateTo': orderDateTo,
            'id': id,
            'number': number,
            'customerId': customerId,
            'isClosed': isClosed,
            'isSubscription': isSubscription,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create order.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperOrder successfully created
 * @throws ApiError
 */
public static async orderPost({
    body,
}: {
    body?: Order,
}
): Promise<ResponseWrapperOrder> {
    const result = await __request({
        method: 'POST',
        path: `/order`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Charges a single customer invoice from multiple orders. The orders must be to the same customer, currency, due date, receiver email and attn.
 * @param id List of Order IDs - to the same customer, separated by comma.
 * @param invoiceDate The invoice date
 * @result ResponseWrapperInvoice successful operation
 * @throws ApiError
 */
public static async orderInvoiceMultipleOrdersInvoiceMultipleOrders({
    id,
    invoiceDate,
}: {
    id: string,
    invoiceDate: string,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/order/:invoiceMultipleOrders`,
        query: {
            'id': id,
            'invoiceDate': invoiceDate,
        },
    });
    return result.body;
}

/**
 * [BETA] Create multiple Orders with OrderLines. Max 100 at a time.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseOrder successfully created
 * @throws ApiError
 */
public static async orderListPostList({
    body,
}: {
    body?: Array<Order>,
}
): Promise<ListResponseOrder> {
    const result = await __request({
        method: 'POST',
        path: `/order/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get order by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperOrder successful operation
 * @throws ApiError
 */
public static async orderGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperOrder> {
    const result = await __request({
        method: 'GET',
        path: `/order/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update order.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperOrder successful operation
 * @throws ApiError
 */
public static async orderPut({
    id,
    body,
}: {
    id: number,
    body?: Order,
}
): Promise<ResponseWrapperOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/order/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * To create a subscription invoice, first create a order with the subscription enabled, then approve it with this method. This approves the order for subscription invoicing.
 * @param id ID of order to approve for subscription invoicing.
 * @param invoiceDate The approval date for the subscription.
 * @result ResponseWrapperInvoice successful operation
 * @throws ApiError
 */
public static async orderApproveSubscriptionInvoiceApproveSubscriptionInvoice({
    id,
    invoiceDate,
}: {
    id: number,
    invoiceDate: string,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/order/${id}/:approveSubscriptionInvoice`,
        query: {
            'invoiceDate': invoiceDate,
        },
    });
    return result.body;
}

/**
 * Attach document to specified order ID.
 * @param file The file
 * @param id Element ID
 * @result ResponseWrapperDocumentArchive successful operation
 * @throws ApiError
 */
public static async orderAttachAttach({
    file,
    id,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    id: number,
}
): Promise<ResponseWrapperDocumentArchive> {
    const result = await __request({
        method: 'PUT',
        path: `/order/${id}/:attach`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * Create new invoice from order.
 * @param id ID of order to invoice.
 * @param invoiceDate The invoice date
 * @param sendToCustomer Send invoice to customer
 * @param paymentTypeId Payment type to register prepayment of the invoice. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid. The payment type must be related to an account with the same currency as the invoice.
 * @param paidAmount Paid amount to register prepayment of the invoice, in invoice currency. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid. This amount is in the invoice currency.
 * @result ResponseWrapperInvoice successful operation
 * @throws ApiError
 */
public static async orderInvoiceInvoice({
    id,
    invoiceDate,
    sendToCustomer = true,
    paymentTypeId,
    paidAmount,
}: {
    id: number,
    invoiceDate: string,
    sendToCustomer?: boolean,
    paymentTypeId?: number,
    paidAmount?: number,
}
): Promise<ResponseWrapperInvoice> {
    const result = await __request({
        method: 'PUT',
        path: `/order/${id}/:invoice`,
        query: {
            'invoiceDate': invoiceDate,
            'sendToCustomer': sendToCustomer,
            'paymentTypeId': paymentTypeId,
            'paidAmount': paidAmount,
        },
    });
    return result.body;
}

/**
 * Unapproves the order for subscription invoicing.
 * @param id ID of order to unapprove for subscription invoicing.
 * @result any successful operation
 * @throws ApiError
 */
public static async orderUnApproveSubscriptionInvoiceUnApproveSubscriptionInvoice({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/order/${id}/:unApproveSubscriptionInvoice`,
    });
    return result.body;
}

}