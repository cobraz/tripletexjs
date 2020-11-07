/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseNextOfKin } from '../models/ListResponseNextOfKin';
import type { NextOfKin } from '../models/NextOfKin';
import type { ResponseWrapperNextOfKin } from '../models/ResponseWrapperNextOfKin';
import { request as __request } from '../core/request';

export class EmployeeNextOfKinService {

    /**
     * Find all next of kin for employee.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseNextOfKin successful operation
     * @throws ApiError
     */
    public static async employeeNextOfKinSearch({
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
): Promise<ListResponseNextOfKin> {
    const result = await __request({
        method: 'GET',
        path: `/employee/nextOfKin`,
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
 * [BETA] Create next of kin.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperNextOfKin successfully created
 * @throws ApiError
 */
public static async employeeNextOfKinPost({
    body,
}: {
    body?: NextOfKin,
}
): Promise<ResponseWrapperNextOfKin> {
    const result = await __request({
        method: 'POST',
        path: `/employee/nextOfKin`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find next of kin by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperNextOfKin successful operation
 * @throws ApiError
 */
public static async employeeNextOfKinGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperNextOfKin> {
    const result = await __request({
        method: 'GET',
        path: `/employee/nextOfKin/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update next of kin.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperNextOfKin successful operation
 * @throws ApiError
 */
public static async employeeNextOfKinPut({
    id,
    body,
}: {
    id: number,
    body?: NextOfKin,
}
): Promise<ResponseWrapperNextOfKin> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/nextOfKin/${id}`,
        body: body,
    });
    return result.body;
}

}