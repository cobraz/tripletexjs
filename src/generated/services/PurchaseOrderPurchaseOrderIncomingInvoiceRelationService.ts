/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePurchaseOrderIncomingInvoiceRelation } from '../models/ListResponsePurchaseOrderIncomingInvoiceRelation';
import type { PurchaseOrderIncomingInvoiceRelation } from '../models/PurchaseOrderIncomingInvoiceRelation';
import type { ResponseWrapperPurchaseOrderIncomingInvoiceRelation } from '../models/ResponseWrapperPurchaseOrderIncomingInvoiceRelation';
import { request as __request } from '../core/request';

export class PurchaseOrderPurchaseOrderIncomingInvoiceRelationService {

    /**
     * [BETA] Find purchase order relation to voucher with sent data. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
     * @param id List of IDs
     * @param orderOutId List of IDs
     * @param voucherId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePurchaseOrderIncomingInvoiceRelation successful operation
     * @throws ApiError
     */
    public static async purchaseOrderPurchaseOrderIncomingInvoiceRelationSearch({
        id,
        orderOutId,
        voucherId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        orderOutId?: string,
        voucherId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePurchaseOrderIncomingInvoiceRelation> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/purchaseOrderIncomingInvoiceRelation`,
        query: {
            'id': id,
            'orderOutId': orderOutId,
            'voucherId': voucherId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new relation between purchase order and a voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperPurchaseOrderIncomingInvoiceRelation successfully created
 * @throws ApiError
 */
public static async purchaseOrderPurchaseOrderIncomingInvoiceRelationPost({
    body,
}: {
    body?: PurchaseOrderIncomingInvoiceRelation,
}
): Promise<ResponseWrapperPurchaseOrderIncomingInvoiceRelation> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/purchaseOrderIncomingInvoiceRelation`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create a new list of relations between purchase order and voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ListResponsePurchaseOrderIncomingInvoiceRelation successfully created
 * @throws ApiError
 */
public static async purchaseOrderPurchaseOrderIncomingInvoiceRelationListPostList({
    body,
}: {
    body?: Array<PurchaseOrderIncomingInvoiceRelation>,
}
): Promise<ListResponsePurchaseOrderIncomingInvoiceRelation> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete multiple purchase order voucher relations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderPurchaseOrderIncomingInvoiceRelationListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * [BETA] Find purchase order relation to voucher by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPurchaseOrderIncomingInvoiceRelation successful operation
 * @throws ApiError
 */
public static async purchaseOrderPurchaseOrderIncomingInvoiceRelationGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPurchaseOrderIncomingInvoiceRelation> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/purchaseOrderIncomingInvoiceRelation/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete purchase order voucher relation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderPurchaseOrderIncomingInvoiceRelationDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/purchaseOrderIncomingInvoiceRelation/${id}`,
    });
    return result.body;
}

}