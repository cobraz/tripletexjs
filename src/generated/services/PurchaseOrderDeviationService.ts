/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Deviation } from '../models/Deviation';
import type { ListResponseDeviation } from '../models/ListResponseDeviation';
import type { ResponseWrapperDeviation } from '../models/ResponseWrapperDeviation';
import type { ResponseWrapperPurchaseOrder } from '../models/ResponseWrapperPurchaseOrder';
import { request as __request } from '../core/request';

export class PurchaseOrderDeviationService {

    /**
     * [BETA] Find handled deviations for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
     * @param purchaseOrderId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseDeviation successful operation
     * @throws ApiError
     */
    public static async purchaseOrderDeviationSearch({
        purchaseOrderId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        purchaseOrderId: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseDeviation> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/deviation`,
        query: {
            'purchaseOrderId': purchaseOrderId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Register deviation on goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperDeviation successfully created
 * @throws ApiError
 */
public static async purchaseOrderDeviationPost({
    body,
}: {
    body?: Deviation,
}
): Promise<ResponseWrapperDeviation> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/deviation`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Register multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseDeviation successfully created
 * @throws ApiError
 */
public static async purchaseOrderDeviationListPostList({
    body,
}: {
    body?: Array<Deviation>,
}
): Promise<ListResponseDeviation> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/deviation/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseDeviation successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationListPutList({
    body,
}: {
    body?: Array<Deviation>,
}
): Promise<ListResponseDeviation> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/deviation/list`,
        body: body,
    });
    return result.body;
}

/**
 *  [BETA] Get deviation by order line ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperDeviation successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperDeviation> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/deviation/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update deviation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperDeviation successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationPut({
    id,
    body,
}: {
    id: number,
    body?: Deviation,
}
): Promise<ResponseWrapperDeviation> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/deviation/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/deviation/${id}`,
    });
    return result.body;
}

/**
 * [BETA] Approve deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order ID.
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationApproveApprove({
    id,
}: {
    id: number,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/deviation/${id}/:approve`,
    });
    return result.body;
}

/**
 * [BETA] Send deviations to approval. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order ID.
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationDeliverDeliver({
    id,
}: {
    id: number,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/deviation/${id}/:deliver`,
    });
    return result.body;
}

/**
 * [BETA] Undeliver the deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order ID.
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderDeviationUndeliverUndeliver({
    id,
}: {
    id: number,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/deviation/${id}/:undeliver`,
    });
    return result.body;
}

}