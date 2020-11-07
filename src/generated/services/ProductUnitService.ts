/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProductUnit } from '../models/ListResponseProductUnit';
import type { ProductUnit } from '../models/ProductUnit';
import type { ResponseWrapperProductUnit } from '../models/ResponseWrapperProductUnit';
import { request as __request } from '../core/request';

export class ProductUnitService {

    /**
     * Find product units corresponding with sent data.
     * @param id List of IDs
     * @param name Names
     * @param nameShort Short names
     * @param commonCode Common codes
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProductUnit successful operation
     * @throws ApiError
     */
    public static async productUnitSearch({
        id,
        name,
        nameShort,
        commonCode,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        nameShort?: string,
        commonCode?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProductUnit> {
    const result = await __request({
        method: 'GET',
        path: `/product/unit`,
        query: {
            'id': id,
            'name': name,
            'nameShort': nameShort,
            'commonCode': commonCode,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new product unit.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProductUnit successfully created
 * @throws ApiError
 */
public static async productUnitPost({
    body,
}: {
    body?: ProductUnit,
}
): Promise<ResponseWrapperProductUnit> {
    const result = await __request({
        method: 'POST',
        path: `/product/unit`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple product units.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProductUnit successfully created
 * @throws ApiError
 */
public static async productUnitListPostList({
    body,
}: {
    body?: Array<ProductUnit>,
}
): Promise<ListResponseProductUnit> {
    const result = await __request({
        method: 'POST',
        path: `/product/unit/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update list of product units.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseProductUnit successful operation
 * @throws ApiError
 */
public static async productUnitListPutList({
    body,
}: {
    body?: Array<ProductUnit>,
}
): Promise<ListResponseProductUnit> {
    const result = await __request({
        method: 'PUT',
        path: `/product/unit/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get product unit by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProductUnit successful operation
 * @throws ApiError
 */
public static async productUnitGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProductUnit> {
    const result = await __request({
        method: 'GET',
        path: `/product/unit/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update product unit.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProductUnit successful operation
 * @throws ApiError
 */
public static async productUnitPut({
    id,
    body,
}: {
    id: number,
    body?: ProductUnit,
}
): Promise<ResponseWrapperProductUnit> {
    const result = await __request({
        method: 'PUT',
        path: `/product/unit/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete product unit by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async productUnitDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/product/unit/${id}`,
    });
    return result.body;
}

}