/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProductGroupRelation } from '../models/ListResponseProductGroupRelation';
import type { ProductGroupRelation } from '../models/ProductGroupRelation';
import type { ResponseWrapperProductGroupRelation } from '../models/ResponseWrapperProductGroupRelation';
import { request as __request } from '../core/request';

export class ProductGroupRelationService {

    /**
     * [BETA] Find product group relation with sent data.
     * @param id List of IDs
     * @param productId List of IDs
     * @param productGroupId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProductGroupRelation successful operation
     * @throws ApiError
     */
    public static async productGroupRelationSearch({
        id,
        productId,
        productGroupId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        productId?: string,
        productGroupId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProductGroupRelation> {
    const result = await __request({
        method: 'GET',
        path: `/product/groupRelation`,
        query: {
            'id': id,
            'productId': productId,
            'productGroupId': productGroupId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new product group relation.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProductGroupRelation successfully created
 * @throws ApiError
 */
public static async productGroupRelationPost({
    body,
}: {
    body?: ProductGroupRelation,
}
): Promise<ResponseWrapperProductGroupRelation> {
    const result = await __request({
        method: 'POST',
        path: `/product/groupRelation`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Add multiple products group relations.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProductGroupRelation successfully created
 * @throws ApiError
 */
public static async productGroupRelationListPostList({
    body,
}: {
    body?: Array<ProductGroupRelation>,
}
): Promise<ListResponseProductGroupRelation> {
    const result = await __request({
        method: 'POST',
        path: `/product/groupRelation/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete multiple product group relations.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async productGroupRelationListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/product/groupRelation/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * [BETA] Find product group relation by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProductGroupRelation successful operation
 * @throws ApiError
 */
public static async productGroupRelationGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProductGroupRelation> {
    const result = await __request({
        method: 'GET',
        path: `/product/groupRelation/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete product group relation.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async productGroupRelationDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/product/groupRelation/${id}`,
    });
    return result.body;
}

}