/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerCategory } from '../models/CustomerCategory';
import type { ListResponseCustomerCategory } from '../models/ListResponseCustomerCategory';
import type { ResponseWrapperCustomerCategory } from '../models/ResponseWrapperCustomerCategory';
import { request as __request } from '../core/request';

export class CustomerCategoryService {

    /**
     * Find customer/supplier categories corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param type List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCustomerCategory successful operation
     * @throws ApiError
     */
    public static async customerCategorySearch({
        id,
        name,
        number,
        description,
        type,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        number?: string,
        description?: string,
        type?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseCustomerCategory> {
    const result = await __request({
        method: 'GET',
        path: `/customer/category`,
        query: {
            'id': id,
            'name': name,
            'number': number,
            'description': description,
            'type': type,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add new customer/supplier category.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperCustomerCategory successfully created
 * @throws ApiError
 */
public static async customerCategoryPost({
    body,
}: {
    body?: CustomerCategory,
}
): Promise<ResponseWrapperCustomerCategory> {
    const result = await __request({
        method: 'POST',
        path: `/customer/category`,
        body: body,
    });
    return result.body;
}

/**
 * Find customer/supplier category by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCustomerCategory successful operation
 * @throws ApiError
 */
public static async customerCategoryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCustomerCategory> {
    const result = await __request({
        method: 'GET',
        path: `/customer/category/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update customer/supplier category.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperCustomerCategory successful operation
 * @throws ApiError
 */
public static async customerCategoryPut({
    id,
    body,
}: {
    id: number,
    body?: CustomerCategory,
}
): Promise<ResponseWrapperCustomerCategory> {
    const result = await __request({
        method: 'PUT',
        path: `/customer/category/${id}`,
        body: body,
    });
    return result.body;
}

}