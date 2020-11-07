/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EmploymentDetails } from '../models/EmploymentDetails';
import type { ListResponseEmploymentDetails } from '../models/ListResponseEmploymentDetails';
import type { ResponseWrapperEmploymentDetails } from '../models/ResponseWrapperEmploymentDetails';
import { request as __request } from '../core/request';

export class EmployeeEmploymentDetailsService {

    /**
     * [BETA] Find all employmentdetails for employment.
     * @param employmentId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseEmploymentDetails successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentDetailsSearch({
        employmentId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        employmentId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseEmploymentDetails> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/details`,
        query: {
            'employmentId': employmentId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create employment details.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperEmploymentDetails successfully created
 * @throws ApiError
 */
public static async employeeEmploymentDetailsPost({
    body,
}: {
    body?: EmploymentDetails,
}
): Promise<ResponseWrapperEmploymentDetails> {
    const result = await __request({
        method: 'POST',
        path: `/employee/employment/details`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find employment details by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperEmploymentDetails successful operation
 * @throws ApiError
 */
public static async employeeEmploymentDetailsGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperEmploymentDetails> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/details/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update employment details.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperEmploymentDetails successful operation
 * @throws ApiError
 */
public static async employeeEmploymentDetailsPut({
    id,
    body,
}: {
    id: number,
    body?: EmploymentDetails,
}
): Promise<ResponseWrapperEmploymentDetails> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/employment/details/${id}`,
        body: body,
    });
    return result.body;
}

}