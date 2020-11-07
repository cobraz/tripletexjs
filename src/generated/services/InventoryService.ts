/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Inventory } from '../models/Inventory';
import type { ListResponseInventory } from '../models/ListResponseInventory';
import type { ResponseWrapperInventory } from '../models/ResponseWrapperInventory';
import { request as __request } from '../core/request';

export class InventoryService {

    /**
     * Find inventory corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param isMainInventory Equals
     * @param isInactive Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseInventory successful operation
     * @throws ApiError
     */
    public static async inventorySearch({
        id,
        name,
        isMainInventory,
        isInactive,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        isMainInventory?: boolean,
        isInactive?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseInventory> {
    const result = await __request({
        method: 'GET',
        path: `/inventory`,
        query: {
            'id': id,
            'name': name,
            'isMainInventory': isMainInventory,
            'isInactive': isInactive,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new inventory.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperInventory successfully created
 * @throws ApiError
 */
public static async inventoryPost({
    body,
}: {
    body?: Inventory,
}
): Promise<ResponseWrapperInventory> {
    const result = await __request({
        method: 'POST',
        path: `/inventory`,
        body: body,
    });
    return result.body;
}

/**
 * Get inventory by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperInventory successful operation
 * @throws ApiError
 */
public static async inventoryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperInventory> {
    const result = await __request({
        method: 'GET',
        path: `/inventory/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update inventory.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperInventory successful operation
 * @throws ApiError
 */
public static async inventoryPut({
    id,
    body,
}: {
    id: number,
    body?: Inventory,
}
): Promise<ResponseWrapperInventory> {
    const result = await __request({
        method: 'PUT',
        path: `/inventory/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete inventory.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async inventoryDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/inventory/${id}`,
    });
    return result.body;
}

}