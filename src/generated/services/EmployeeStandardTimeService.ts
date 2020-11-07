/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseStandardTime } from '../models/ListResponseStandardTime';
import type { ResponseWrapperStandardTime } from '../models/ResponseWrapperStandardTime';
import type { StandardTime } from '../models/StandardTime';
import { request as __request } from '../core/request';

export class EmployeeStandardTimeService {

    /**
     * [BETA] Find all standard times for employee.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseStandardTime successful operation
     * @throws ApiError
     */
    public static async employeeStandardTimeSearch({
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
): Promise<ListResponseStandardTime> {
    const result = await __request({
        method: 'GET',
        path: `/employee/standardTime`,
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
 * [BETA] Create standard time.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperStandardTime successfully created
 * @throws ApiError
 */
public static async employeeStandardTimePost({
    body,
}: {
    body?: StandardTime,
}
): Promise<ResponseWrapperStandardTime> {
    const result = await __request({
        method: 'POST',
        path: `/employee/standardTime`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find standard time by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperStandardTime successful operation
 * @throws ApiError
 */
public static async employeeStandardTimeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperStandardTime> {
    const result = await __request({
        method: 'GET',
        path: `/employee/standardTime/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update standard time.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperStandardTime successful operation
 * @throws ApiError
 */
public static async employeeStandardTimePut({
    id,
    body,
}: {
    id: number,
    body?: StandardTime,
}
): Promise<ResponseWrapperStandardTime> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/standardTime/${id}`,
        body: body,
    });
    return result.body;
}

}