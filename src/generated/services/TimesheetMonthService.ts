/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseMonthlyStatus } from '../models/ListResponseMonthlyStatus';
import type { ResponseWrapperMonthlyStatus } from '../models/ResponseWrapperMonthlyStatus';
import { request as __request } from '../core/request';

export class TimesheetMonthService {

    /**
     * approve month(s).  If id is provided the other args are ignored
     * @param id Element ID
     * @param employeeIds List of IDs. Defaults to ID of token owner.
     * @param monthYear 2020-01
     * @param approvedUntilDate yyyy-MM-dd. Defaults to today.. Defaults to end of month
     * @result ListResponseMonthlyStatus successful operation
     * @throws ApiError
     */
    public static async timesheetMonthApproveApprove({
        id,
        employeeIds,
        monthYear,
        approvedUntilDate,
    }: {
        id?: number,
        employeeIds?: string,
        monthYear?: string,
        approvedUntilDate?: string,
    }
): Promise<ListResponseMonthlyStatus> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/month/:approve`,
        query: {
            'id': id,
            'employeeIds': employeeIds,
            'monthYear': monthYear,
            'approvedUntilDate': approvedUntilDate,
        },
    });
    return result.body;
}

/**
 * complete month(s).  If id is provided the other args are ignored
 * @param id Element ID
 * @param employeeIds List of IDs. Defaults to ID of token owner.
 * @param monthYear 2020-01
 * @result ListResponseMonthlyStatus successful operation
 * @throws ApiError
 */
public static async timesheetMonthCompleteComplete({
    id,
    employeeIds,
    monthYear,
}: {
    id?: number,
    employeeIds?: string,
    monthYear?: string,
}
): Promise<ListResponseMonthlyStatus> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/month/:complete`,
        query: {
            'id': id,
            'employeeIds': employeeIds,
            'monthYear': monthYear,
        },
    });
    return result.body;
}

/**
 * reopen month(s).  If id is provided the other args are ignored
 * @param id Element ID
 * @param employeeIds List of IDs. Defaults to ID of token owner.
 * @param monthYear 2020-01
 * @result ListResponseMonthlyStatus successful operation
 * @throws ApiError
 */
public static async timesheetMonthReopenReopen({
    id,
    employeeIds,
    monthYear,
}: {
    id?: number,
    employeeIds?: string,
    monthYear?: string,
}
): Promise<ListResponseMonthlyStatus> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/month/:reopen`,
        query: {
            'id': id,
            'employeeIds': employeeIds,
            'monthYear': monthYear,
        },
    });
    return result.body;
}

/**
 * unapprove month(s).  If id is provided the other args are ignored
 * @param id Element ID
 * @param employeeIds List of IDs. Defaults to ID of token owner.
 * @param monthYear 2020-01
 * @result ListResponseMonthlyStatus successful operation
 * @throws ApiError
 */
public static async timesheetMonthUnapproveUnapprove({
    id,
    employeeIds,
    monthYear,
}: {
    id?: number,
    employeeIds?: string,
    monthYear?: string,
}
): Promise<ListResponseMonthlyStatus> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/month/:unapprove`,
        query: {
            'id': id,
            'employeeIds': employeeIds,
            'monthYear': monthYear,
        },
    });
    return result.body;
}

/**
 * Find monthly status for given month.
 * @param employeeIds List of IDs. Defaults to ID of token owner.
 * @param monthYear 2020-01
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseMonthlyStatus successful operation
 * @throws ApiError
 */
public static async timesheetMonthByMonthNumberGetByMonthNumber({
    employeeIds,
    monthYear,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    employeeIds: string,
    monthYear: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseMonthlyStatus> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/month/byMonthNumber`,
        query: {
            'employeeIds': employeeIds,
            'monthYear': monthYear,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find monthly status entry by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperMonthlyStatus successful operation
 * @throws ApiError
 */
public static async timesheetMonthGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperMonthlyStatus> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/month/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}