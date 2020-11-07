/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseStocktaking } from '../models/ListResponseStocktaking';
import type { ResponseWrapperStocktaking } from '../models/ResponseWrapperStocktaking';
import type { Stocktaking } from '../models/Stocktaking';
import { request as __request } from '../core/request';

export class InventoryStocktakingService {

    /**
     * [BETA] Find stocktaking corresponding with sent data.
     * @param id List of IDs
     * @param isCompleted Equals
     * @param inventoryId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseStocktaking successful operation
     * @throws ApiError
     */
    public static async inventoryStocktakingSearch({
        id,
        isCompleted,
        inventoryId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        isCompleted?: boolean,
        inventoryId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseStocktaking> {
    const result = await __request({
        method: 'GET',
        path: `/inventory/stocktaking`,
        query: {
            'id': id,
            'isCompleted': isCompleted,
            'inventoryId': inventoryId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new stocktaking.
 * @param typeOfStocktaking
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperStocktaking successfully created
 * @throws ApiError
 */
public static async inventoryStocktakingPost({
    typeOfStocktaking,
    body,
}: {
    typeOfStocktaking?: 'ALL_PRODUCTS_WITH_INVENTORIES' | 'INCLUDE_PRODUCTS' | 'NO_PRODUCTS',
    body?: Stocktaking,
}
): Promise<ResponseWrapperStocktaking> {
    const result = await __request({
        method: 'POST',
        path: `/inventory/stocktaking`,
        query: {
            'typeOfStocktaking': typeOfStocktaking,
        },
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get stocktaking by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperStocktaking successful operation
 * @throws ApiError
 */
public static async inventoryStocktakingGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperStocktaking> {
    const result = await __request({
        method: 'GET',
        path: `/inventory/stocktaking/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update stocktaking.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperStocktaking successful operation
 * @throws ApiError
 */
public static async inventoryStocktakingPut({
    id,
    body,
}: {
    id: number,
    body?: Stocktaking,
}
): Promise<ResponseWrapperStocktaking> {
    const result = await __request({
        method: 'PUT',
        path: `/inventory/stocktaking/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete stocktaking.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async inventoryStocktakingDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/inventory/stocktaking/${id}`,
    });
    return result.body;
}

}