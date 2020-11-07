/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProductLine } from '../models/ListResponseProductLine';
import type { ProductLine } from '../models/ProductLine';
import type { ResponseWrapperProductLine } from '../models/ResponseWrapperProductLine';
import { request as __request } from '../core/request';

export class InventoryStocktakingProductlineService {

    /**
     * [BETA] Find all product lines by stocktaking ID.
     * @param stocktakingId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProductLine successful operation
     * @throws ApiError
     */
    public static async inventoryStocktakingProductlineSearch({
        stocktakingId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        stocktakingId: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProductLine> {
    const result = await __request({
        method: 'GET',
        path: `/inventory/stocktaking/productline`,
        query: {
            'stocktakingId': stocktakingId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create product line. When creating several product lines, use /list for better performance.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProductLine successfully created
 * @throws ApiError
 */
public static async inventoryStocktakingProductlinePost({
    body,
}: {
    body?: ProductLine,
}
): Promise<ResponseWrapperProductLine> {
    const result = await __request({
        method: 'POST',
        path: `/inventory/stocktaking/productline`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get product line by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProductLine successful operation
 * @throws ApiError
 */
public static async inventoryStocktakingProductlineGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProductLine> {
    const result = await __request({
        method: 'GET',
        path: `/inventory/stocktaking/productline/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update product line.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProductLine successful operation
 * @throws ApiError
 */
public static async inventoryStocktakingProductlinePut({
    id,
    body,
}: {
    id: number,
    body?: ProductLine,
}
): Promise<ResponseWrapperProductLine> {
    const result = await __request({
        method: 'PUT',
        path: `/inventory/stocktaking/productline/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete product line.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async inventoryStocktakingProductlineDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/inventory/stocktaking/productline/${id}`,
    });
    return result.body;
}

}