/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePurchaseOrder } from '../models/ListResponsePurchaseOrder';
import type { PurchaseOrder } from '../models/PurchaseOrder';
import type { ResponseWrapperPurchaseOrder } from '../models/ResponseWrapperPurchaseOrder';
import { request as __request } from '../core/request';

export class PurchaseOrderService {

    /**
     * [BETA] Find purchase orders with send data
     * @param number Equals
     * @param deliveryDateFrom Format is yyyy-MM-dd (from and incl.).
     * @param deliveryDateTo Format is yyyy-MM-dd (to and incl.).
     * @param creationDateFrom Format is yyyy-MM-dd (from and incl.).
     * @param creationDateTo Format is yyyy-MM-dd (to and incl.).
     * @param id List of IDs
     * @param supplierId List of IDs
     * @param projectId List of IDs
     * @param isClosed Equals
     * @param withDeviationOnly Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePurchaseOrder successful operation
     * @throws ApiError
     */
    public static async purchaseOrderSearch({
        number,
        deliveryDateFrom,
        deliveryDateTo,
        creationDateFrom,
        creationDateTo,
        id,
        supplierId,
        projectId,
        isClosed,
        withDeviationOnly = false,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        number?: string,
        deliveryDateFrom?: string,
        deliveryDateTo?: string,
        creationDateFrom?: string,
        creationDateTo?: string,
        id?: string,
        supplierId?: string,
        projectId?: string,
        isClosed?: boolean,
        withDeviationOnly?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePurchaseOrder> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder`,
        query: {
            'number': number,
            'deliveryDateFrom': deliveryDateFrom,
            'deliveryDateTo': deliveryDateTo,
            'creationDateFrom': creationDateFrom,
            'creationDateTo': creationDateTo,
            'id': id,
            'supplierId': supplierId,
            'projectId': projectId,
            'isClosed': isClosed,
            'withDeviationOnly': withDeviationOnly,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Creates a new purchase order
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperPurchaseOrder successfully created
 * @throws ApiError
 */
public static async purchaseOrderPost({
    body,
}: {
    body?: PurchaseOrder,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder`,
        body: body,
    });
    return result.body;
}

/**
 *  [BETA] Find purchase order by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 *  [BETA] Update purchase order.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderPut({
    id,
    body,
}: {
    id: number,
    body?: PurchaseOrder,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/${id}`,
        body: body,
    });
    return result.body;
}

/**
 *  [BETA] Delete purchase order.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/${id}`,
    });
    return result.body;
}

/**
 * [BETA] Send purchase order by id and sendType.
 * @param id Element ID
 * @param sendType Send type.DEFAULT will determine the send parameter based on the supplier type.
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderSendSend({
    id,
    sendType = 'DEFAULT',
}: {
    id: number,
    sendType?: 'DEFAULT' | 'EMAIL' | 'FTP',
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/${id}/:send`,
        query: {
            'sendType': sendType,
        },
    });
    return result.body;
}

/**
 * [BETA] Send purchase order by customisable email.
 * @param id Element ID
 * @param emailAddress Email address
 * @param subject Subject
 * @param message Message
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderSendByEmailSendByEmail({
    id,
    emailAddress,
    subject,
    message,
}: {
    id: number,
    emailAddress: string,
    subject: string,
    message?: string,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/${id}/:sendByEmail`,
        query: {
            'emailAddress': emailAddress,
            'subject': subject,
            'message': message,
        },
    });
    return result.body;
}

}