/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoodsReceipt } from '../models/GoodsReceipt';
import type { ListResponseGoodsReceipt } from '../models/ListResponseGoodsReceipt';
import type { ResponseWrapperGoodsReceipt } from '../models/ResponseWrapperGoodsReceipt';
import type { ResponseWrapperPurchaseOrder } from '../models/ResponseWrapperPurchaseOrder';
import { request as __request } from '../core/request';

export class PurchaseOrderGoodsReceiptService {

    /**
     * [BETA] Get goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
     * @param receivedDateFrom Format is yyyy-MM-dd (from and incl.).
     * @param receivedDateTo Format is yyyy-MM-dd (to and incl.).
     * @param status Equals
     * @param withoutPurchase Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseGoodsReceipt successful operation
     * @throws ApiError
     */
    public static async purchaseOrderGoodsReceiptSearch({
        receivedDateFrom,
        receivedDateTo,
        status,
        withoutPurchase = false,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        receivedDateFrom?: string,
        receivedDateTo?: string,
        status?: 'STATUS_OPEN' | 'STATUS_CONFIRMED',
        withoutPurchase?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseGoodsReceipt> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/goodsReceipt`,
        query: {
            'receivedDateFrom': receivedDateFrom,
            'receivedDateTo': receivedDateTo,
            'status': status,
            'withoutPurchase': withoutPurchase,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Register goods receipt without an existing purchase order. When registration of several goods receipt, use /list for better performance. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperGoodsReceipt successfully created
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptPost({
    body,
}: {
    body?: GoodsReceipt,
}
): Promise<ResponseWrapperGoodsReceipt> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/goodsReceipt`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Register multiple goods receipt without an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseGoodsReceipt successfully created
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptListPostList({
    body,
}: {
    body?: Array<GoodsReceipt>,
}
): Promise<ListResponseGoodsReceipt> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/goodsReceipt/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete multiple goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/goodsReceipt/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * [BETA] Get goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperGoodsReceipt successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperGoodsReceipt> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/goodsReceipt/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Goods Receipt ID.
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperGoodsReceipt successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptPut({
    id,
    body,
}: {
    id: number,
    body?: GoodsReceipt,
}
): Promise<ResponseWrapperGoodsReceipt> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/goodsReceipt/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/goodsReceipt/${id}`,
    });
    return result.body;
}

/**
 * [BETA] Confirm goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order ID.
 * @param createRestOrder Create restorder if quantity received is less than ordered
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptConfirmConfirm({
    id,
    createRestOrder = false,
}: {
    id: number,
    createRestOrder?: boolean,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/goodsReceipt/${id}/:confirm`,
        query: {
            'createRestOrder': createRestOrder,
        },
    });
    return result.body;
}

/**
 * [BETA]  Receive all ordered products and approve goods receipt. Only available for users that have activated the Logistics/Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order ID.
 * @param receivedDate The approval date for the subscription.
 * @param inventoryId ID of inventory. Main inventory is set as default
 * @result ResponseWrapperPurchaseOrder successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptReceiveAndConfirmReceiveAndConfirm({
    id,
    receivedDate,
    inventoryId,
}: {
    id: number,
    receivedDate: string,
    inventoryId?: number,
}
): Promise<ResponseWrapperPurchaseOrder> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/goodsReceipt/${id}/:receiveAndConfirm`,
        query: {
            'receivedDate': receivedDate,
            'inventoryId': inventoryId,
        },
    });
    return result.body;
}

/**
 * [BETA] Register goods receipt. Quantity received on the products is set to the same as quantity ordered. To update the quantity received, use PUT /purchaseOrder/goodsReceiptLine/{id}. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order ID.
 * @param registrationDate yyyy-MM-dd. Defaults to today.
 * @param inventoryId ID of inventory. Main inventory is set as default
 * @result ResponseWrapperGoodsReceipt successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptRegisterGoodsReceiptRegisterGoodsReceipt({
    id,
    registrationDate,
    inventoryId,
}: {
    id: number,
    registrationDate: string,
    inventoryId?: number,
}
): Promise<ResponseWrapperGoodsReceipt> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/goodsReceipt/${id}/:registerGoodsReceipt`,
        query: {
            'registrationDate': registrationDate,
            'inventoryId': inventoryId,
        },
    });
    return result.body;
}

}