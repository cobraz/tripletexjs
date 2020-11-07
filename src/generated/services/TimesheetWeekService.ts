/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseWeek } from '../models/ListResponseWeek';
import type { ResponseWrapperWeek } from '../models/ResponseWrapperWeek';
import { request as __request } from '../core/request';

export class TimesheetWeekService {

    /**
     * Find weekly status By ID, week/year combination, employeeId. or an approver
     * @param ids List of IDs
     * @param employeeIds List of IDs
     * @param weekYear ISO-8601 week-year
     * @param approvedBy Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseWeek successful operation
     * @throws ApiError
     */
    public static async timesheetWeekSearch({
        ids,
        employeeIds,
        weekYear,
        approvedBy,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        ids?: string,
        employeeIds?: string,
        weekYear?: string,
        approvedBy?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseWeek> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/week`,
        query: {
            'ids': ids,
            'employeeIds': employeeIds,
            'weekYear': weekYear,
            'approvedBy': approvedBy,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Approve week. By ID or (ISO-8601 week and employeeId combination).
 * @param id Equals
 * @param employeeId Equals
 * @param weekYear ISO-8601 week-year
 * @result ResponseWrapperWeek successful operation
 * @throws ApiError
 */
public static async timesheetWeekApproveApprove({
    id,
    employeeId,
    weekYear,
}: {
    id?: number,
    employeeId?: number,
    weekYear?: string,
}
): Promise<ResponseWrapperWeek> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/week/:approve`,
        query: {
            'id': id,
            'employeeId': employeeId,
            'weekYear': weekYear,
        },
    });
    return result.body;
}

/**
 * Complete week. By ID or (ISO-8601 week and employeeId combination).
 * @param id Equals
 * @param employeeId Equals
 * @param weekYear ISO-8601 week-year
 * @result ResponseWrapperWeek successful operation
 * @throws ApiError
 */
public static async timesheetWeekCompleteComplete({
    id,
    employeeId,
    weekYear,
}: {
    id?: number,
    employeeId?: number,
    weekYear?: string,
}
): Promise<ResponseWrapperWeek> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/week/:complete`,
        query: {
            'id': id,
            'employeeId': employeeId,
            'weekYear': weekYear,
        },
    });
    return result.body;
}

/**
 * Reopen week. By ID or (ISO-8601 week and employeeId combination).
 * @param id Equals
 * @param employeeId Equals
 * @param weekYear ISO-8601 week-year
 * @result ResponseWrapperWeek successful operation
 * @throws ApiError
 */
public static async timesheetWeekReopenReopen({
    id,
    employeeId,
    weekYear,
}: {
    id?: number,
    employeeId?: number,
    weekYear?: string,
}
): Promise<ResponseWrapperWeek> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/week/:reopen`,
        query: {
            'id': id,
            'employeeId': employeeId,
            'weekYear': weekYear,
        },
    });
    return result.body;
}

/**
 * Unapprove week. By ID or (ISO-8601 week and employeeId combination).
 * @param id Equals
 * @param employeeId Equals
 * @param weekYear ISO-8601 week-year
 * @result ResponseWrapperWeek successful operation
 * @throws ApiError
 */
public static async timesheetWeekUnapproveUnapprove({
    id,
    employeeId,
    weekYear,
}: {
    id?: number,
    employeeId?: number,
    weekYear?: string,
}
): Promise<ResponseWrapperWeek> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/week/:unapprove`,
        query: {
            'id': id,
            'employeeId': employeeId,
            'weekYear': weekYear,
        },
    });
    return result.body;
}

}