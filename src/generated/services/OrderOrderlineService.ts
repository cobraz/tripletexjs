/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseOrderLine } from '../models/ListResponseOrderLine';
import type { OrderLine } from '../models/OrderLine';
import type { ResponseWrapperOrderLine } from '../models/ResponseWrapperOrderLine';
import { request as __request } from '../core/request';

export class OrderOrderlineService {

    /**
     * Create order line. When creating several order lines, use /list for better performance.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @result ResponseWrapperOrderLine successfully created
     * @throws ApiError
     */
    public static async orderOrderlinePost({
        body,
    }: {
        body?: OrderLine,
    }
): Promise<ResponseWrapperOrderLine> {
    const result = await __request({
        method: 'POST',
        path: `/order/orderline`,
        body: body,
    });
    return result.body;
}

/**
 * Create multiple order lines.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseOrderLine successfully created
 * @throws ApiError
 */
public static async orderOrderlineListPostList({
    body,
}: {
    body?: Array<OrderLine>,
}
): Promise<ListResponseOrderLine> {
    const result = await __request({
        method: 'POST',
        path: `/order/orderline/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get order line by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperOrderLine successful operation
 * @throws ApiError
 */
public static async orderOrderlineGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperOrderLine> {
    const result = await __request({
        method: 'GET',
        path: `/order/orderline/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete order line by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async orderOrderlineDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/order/orderline/${id}`,
    });
    return result.body;
}

}