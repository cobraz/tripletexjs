/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseOrderGroup } from '../models/ListResponseOrderGroup';
import type { OrderGroup } from '../models/OrderGroup';
import type { ResponseWrapperOrderGroup } from '../models/ResponseWrapperOrderGroup';
import { request as __request } from '../core/request';

export class OrderOrderGroupService {

    /**
     * [BETA] Find orderGroups corresponding with sent data.
     * @param ids List of IDs
     * @param orderIds List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseOrderGroup successful operation
     * @throws ApiError
     */
    public static async orderOrderGroupSearch({
        ids,
        orderIds,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        ids?: string,
        orderIds?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseOrderGroup> {
    const result = await __request({
        method: 'GET',
        path: `/order/orderGroup`,
        query: {
            'ids': ids,
            'orderIds': orderIds,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [Beta] Post orderGroup.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @param orderLineIds List of IDs
 * @result ResponseWrapperOrderGroup successfully created
 * @throws ApiError
 */
public static async orderOrderGroupPost({
    body,
    orderLineIds,
}: {
    body?: OrderGroup,
    orderLineIds?: string,
}
): Promise<ResponseWrapperOrderGroup> {
    const result = await __request({
        method: 'POST',
        path: `/order/orderGroup`,
        query: {
            'orderLineIds': orderLineIds,
        },
        body: body,
    });
    return result.body;
}

/**
 * [Beta] Put orderGroup.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @param orderLineIds List of IDs
 * @param removeExistingOrderLines Should existing orderLines be removed from this orderGroup
 * @result ResponseWrapperOrderGroup successful operation
 * @throws ApiError
 */
public static async orderOrderGroupPut({
    body,
    orderLineIds,
    removeExistingOrderLines = false,
}: {
    body?: OrderGroup,
    orderLineIds?: string,
    removeExistingOrderLines?: boolean,
}
): Promise<ResponseWrapperOrderGroup> {
    const result = await __request({
        method: 'PUT',
        path: `/order/orderGroup`,
        query: {
            'OrderLineIds': orderLineIds,
            'removeExistingOrderLines': removeExistingOrderLines,
        },
        body: body,
    });
    return result.body;
}

/**
 * [Beta] Get orderGroup by ID. A orderGroup is a way to group orderLines, and add comments and subtotals
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperOrderGroup successful operation
 * @throws ApiError
 */
public static async orderOrderGroupGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperOrderGroup> {
    const result = await __request({
        method: 'GET',
        path: `/order/orderGroup/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [Beta] Delete orderGroup by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async orderOrderGroupDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/order/orderGroup/${id}`,
    });
    return result.body;
}

}