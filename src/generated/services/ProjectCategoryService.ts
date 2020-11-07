/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectCategory } from '../models/ListResponseProjectCategory';
import type { ProjectCategory } from '../models/ProjectCategory';
import type { ResponseWrapperProjectCategory } from '../models/ResponseWrapperProjectCategory';
import { request as __request } from '../core/request';

export class ProjectCategoryService {

    /**
     * Find project categories corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProjectCategory successful operation
     * @throws ApiError
     */
    public static async projectCategorySearch({
        id,
        name,
        number,
        description,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        number?: string,
        description?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProjectCategory> {
    const result = await __request({
        method: 'GET',
        path: `/project/category`,
        query: {
            'id': id,
            'name': name,
            'number': number,
            'description': description,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add new project category.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProjectCategory successfully created
 * @throws ApiError
 */
public static async projectCategoryPost({
    body,
}: {
    body?: ProjectCategory,
}
): Promise<ResponseWrapperProjectCategory> {
    const result = await __request({
        method: 'POST',
        path: `/project/category`,
        body: body,
    });
    return result.body;
}

/**
 * Find project category by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectCategory successful operation
 * @throws ApiError
 */
public static async projectCategoryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectCategory> {
    const result = await __request({
        method: 'GET',
        path: `/project/category/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update project category.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProjectCategory successful operation
 * @throws ApiError
 */
public static async projectCategoryPut({
    id,
    body,
}: {
    id: number,
    body?: ProjectCategory,
}
): Promise<ResponseWrapperProjectCategory> {
    const result = await __request({
        method: 'PUT',
        path: `/project/category/${id}`,
        body: body,
    });
    return result.body;
}

}