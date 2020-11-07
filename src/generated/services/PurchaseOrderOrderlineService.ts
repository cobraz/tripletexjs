/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PurchaseOrderline } from '../models/PurchaseOrderline';
import type { ResponseWrapperPurchaseOrderline } from '../models/ResponseWrapperPurchaseOrderline';
import { request as __request } from '../core/request';

export class PurchaseOrderOrderlineService {

    /**
     *  [BETA] Creates purchase order line.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @result ResponseWrapperPurchaseOrderline successfully created
     * @throws ApiError
     */
    public static async purchaseOrderOrderlinePost({
        body,
    }: {
        body?: PurchaseOrderline,
    }
): Promise<ResponseWrapperPurchaseOrderline> {
    const result = await __request({
        method: 'POST',
        path: `/purchaseOrder/orderline`,
        body: body,
    });
    return result.body;
}

/**
 *  [BETA] Find purchase order line by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPurchaseOrderline successful operation
 * @throws ApiError
 */
public static async purchaseOrderOrderlineGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPurchaseOrderline> {
    const result = await __request({
        method: 'GET',
        path: `/purchaseOrder/orderline/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 *  [BETA] Updates purchase order line
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperPurchaseOrderline successful operation
 * @throws ApiError
 */
public static async purchaseOrderOrderlinePut({
    id,
    body,
}: {
    id: number,
    body?: PurchaseOrderline,
}
): Promise<ResponseWrapperPurchaseOrderline> {
    const result = await __request({
        method: 'PUT',
        path: `/purchaseOrder/orderline/${id}`,
        body: body,
    });
    return result.body;
}

/**
 *  [BETA] Delete purchase order line.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async purchaseOrderOrderlineDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/purchaseOrder/orderline/${id}`,
    });
    return result.body;
}

}