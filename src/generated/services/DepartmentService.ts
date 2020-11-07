/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Department } from '../models/Department';
import type { ListResponseDepartment } from '../models/ListResponseDepartment';
import type { ResponseWrapperDepartment } from '../models/ResponseWrapperDepartment';
import { request as __request } from '../core/request';

export class DepartmentService {

    /**
     * Find department corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param departmentNumber Containing
     * @param departmentManagerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseDepartment successful operation
     * @throws ApiError
     */
    public static async departmentSearch({
        id,
        name,
        departmentNumber,
        departmentManagerId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        departmentNumber?: string,
        departmentManagerId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseDepartment> {
    const result = await __request({
        method: 'GET',
        path: `/department`,
        query: {
            'id': id,
            'name': name,
            'departmentNumber': departmentNumber,
            'departmentManagerId': departmentManagerId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Add new department.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperDepartment successfully created
 * @throws ApiError
 */
public static async departmentPost({
    body,
}: {
    body?: Department,
}
): Promise<ResponseWrapperDepartment> {
    const result = await __request({
        method: 'POST',
        path: `/department`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Register new departments.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseDepartment successfully created
 * @throws ApiError
 */
public static async departmentListPostList({
    body,
}: {
    body?: Array<Department>,
}
): Promise<ListResponseDepartment> {
    const result = await __request({
        method: 'POST',
        path: `/department/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple departments.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseDepartment successful operation
 * @throws ApiError
 */
public static async departmentListPutList({
    body,
}: {
    body?: Array<Department>,
}
): Promise<ListResponseDepartment> {
    const result = await __request({
        method: 'PUT',
        path: `/department/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get department by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperDepartment successful operation
 * @throws ApiError
 */
public static async departmentGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperDepartment> {
    const result = await __request({
        method: 'GET',
        path: `/department/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update department.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperDepartment successful operation
 * @throws ApiError
 */
public static async departmentPut({
    id,
    body,
}: {
    id: number,
    body?: Department,
}
): Promise<ResponseWrapperDepartment> {
    const result = await __request({
        method: 'PUT',
        path: `/department/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * Delete department by ID
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async departmentDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/department/${id}`,
    });
    return result.body;
}

}