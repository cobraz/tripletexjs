/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProductGroup } from '../models/ListResponseProductGroup';
import type { ProductGroup } from '../models/ProductGroup';
import type { ResponseWrapperProductGroup } from '../models/ResponseWrapperProductGroup';
import { request as __request } from '../core/request';

export class ProductGroupService {

    /**
     * [BETA] Find product group with sent data
     * @param id List of IDs
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProductGroup successful operation
     * @throws ApiError
     */
    public static async productGroupSearch({
        id,
        name,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProductGroup> {
    const result = await __request({
        method: 'GET',
        path: `/product/group`,
        query: {
            'id': id,
            'name': name,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new product group.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProductGroup successfully created
 * @throws ApiError
 */
public static async productGroupPost({
    body,
}: {
    body?: ProductGroup,
}
): Promise<ResponseWrapperProductGroup> {
    const result = await __request({
        method: 'POST',
        path: `/product/group`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Add multiple products groups.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProductGroup successfully created
 * @throws ApiError
 */
public static async productGroupListPostList({
    body,
}: {
    body?: Array<ProductGroup>,
}
): Promise<ListResponseProductGroup> {
    const result = await __request({
        method: 'POST',
        path: `/product/group/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update a list of product groups.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseProductGroup successful operation
 * @throws ApiError
 */
public static async productGroupListPutList({
    body,
}: {
    body?: Array<ProductGroup>,
}
): Promise<ListResponseProductGroup> {
    const result = await __request({
        method: 'PUT',
        path: `/product/group/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete multiple product groups.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async productGroupListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/product/group/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * [BETA] Find product group by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProductGroup successful operation
 * @throws ApiError
 */
public static async productGroupGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProductGroup> {
    const result = await __request({
        method: 'GET',
        path: `/product/group/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update product group.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProductGroup successful operation
 * @throws ApiError
 */
public static async productGroupPut({
    id,
    body,
}: {
    id: number,
    body?: ProductGroup,
}
): Promise<ResponseWrapperProductGroup> {
    const result = await __request({
        method: 'PUT',
        path: `/product/group/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete product group.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async productGroupDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/product/group/${id}`,
    });
    return result.body;
}

}