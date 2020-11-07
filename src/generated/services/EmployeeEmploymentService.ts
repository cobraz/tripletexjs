/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employment } from '../models/Employment';
import type { ListResponseEmployment } from '../models/ListResponseEmployment';
import type { ResponseWrapperEmployment } from '../models/ResponseWrapperEmployment';
import { request as __request } from '../core/request';

export class EmployeeEmploymentService {

    /**
     * Find all employments for employee.
     * @param employeeId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseEmployment successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentSearch({
        employeeId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        employeeId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseEmployment> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment`,
        query: {
            'employeeId': employeeId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create employment.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperEmployment successfully created
 * @throws ApiError
 */
public static async employeeEmploymentPost({
    body,
}: {
    body?: Employment,
}
): Promise<ResponseWrapperEmployment> {
    const result = await __request({
        method: 'POST',
        path: `/employee/employment`,
        body: body,
    });
    return result.body;
}

/**
 * Find employment by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperEmployment successful operation
 * @throws ApiError
 */
public static async employeeEmploymentGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperEmployment> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update employemnt.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperEmployment successful operation
 * @throws ApiError
 */
public static async employeeEmploymentPut({
    id,
    body,
}: {
    id: number,
    body?: Employment,
}
): Promise<ResponseWrapperEmployment> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/employment/${id}`,
        body: body,
    });
    return result.body;
}

}