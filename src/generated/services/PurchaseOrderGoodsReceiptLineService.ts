/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoodsReceiptLine } from '../models/GoodsReceiptLine';
import type { ListResponseGoodsReceiptLine } from '../models/ListResponseGoodsReceiptLine';
import type { ResponseWrapperGoodsReceiptLine } from '../models/ResponseWrapperGoodsReceiptLine';
import { request as __request } from '../core/request';

export class PurchaseOrderGoodsReceiptLineService {

    /**
     * [BETA] Find goods receipt lines for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
     * @param purchaseOrderId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseGoodsReceiptLine successful operation
     * @throws ApiError
     */
    public static async purchaseOrderGoodsReceiptLineSearch({
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
): Promise<ListResponseGoodsReceiptLine> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/goodsReceiptLine`,
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
 * [BETA] Register new goods receipt; new product on an existing purchase order. When registration of several goods receipt, use /list for better performance. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperGoodsReceiptLine successfully created
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptLinePost({
    body,
}: {
    body?: GoodsReceiptLine,
}
): Promise<ResponseWrapperGoodsReceiptLine> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/goodsReceiptLine`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Register multiple new goods receipt on an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseGoodsReceiptLine successfully created
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptLineListPostList({
    body,
}: {
    body?: Array<GoodsReceiptLine>,
}
): Promise<ListResponseGoodsReceiptLine> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/goodsReceiptLine/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get goods receipt line by purchase order line ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperGoodsReceiptLine successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptLineGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperGoodsReceiptLine> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/goodsReceiptLine/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Enter goods receipt on purchase order line. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Purchase Order Line ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperGoodsReceiptLine successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptLinePut({
    id,
    body,
}: {
    id: number,
    body?: GoodsReceiptLine,
}
): Promise<ResponseWrapperGoodsReceiptLine> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/goodsReceiptLine/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete goods receipt line by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderGoodsReceiptLineDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/goodsReceiptLine/${id}`,
    });
    return result.body;
}

}