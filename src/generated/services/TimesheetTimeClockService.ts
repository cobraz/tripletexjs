/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTimeClock } from '../models/ListResponseTimeClock';
import type { ResponseWrapperTimeClock } from '../models/ResponseWrapperTimeClock';
import type { TimeClock } from '../models/TimeClock';
import { request as __request } from '../core/request';

export class TimesheetTimeClockService {

    /**
     * Find time clock entries corresponding with sent data.
     * @param id List of IDs
     * @param employeeId List of IDs
     * @param projectId List of IDs
     * @param activityId List of IDs
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param hourId List of IDs
     * @param isRunning Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTimeClock successful operation
     * @throws ApiError
     */
    public static async timesheetTimeClockSearch({
        id,
        employeeId,
        projectId,
        activityId,
        dateFrom,
        dateTo,
        hourId,
        isRunning,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        employeeId?: string,
        projectId?: string,
        activityId?: string,
        dateFrom?: string,
        dateTo?: string,
        hourId?: string,
        isRunning?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTimeClock> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/timeClock`,
        query: {
            'id': id,
            'employeeId': employeeId,
            'projectId': projectId,
            'activityId': activityId,
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'hourId': hourId,
            'isRunning': isRunning,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Start time clock.
 * @param activityId Activity ID
 * @param employeeId Employee ID. Defaults to ID of token owner.
 * @param projectId Project ID
 * @param date Optional. Default is today’s date
 * @result ResponseWrapperTimeClock successful operation
 * @throws ApiError
 */
public static async timesheetTimeClockStartStart({
    activityId,
    employeeId,
    projectId,
    date,
}: {
    activityId: number,
    employeeId?: number,
    projectId?: number,
    date?: string,
}
): Promise<ResponseWrapperTimeClock> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/timeClock/:start`,
        query: {
            'activityId': activityId,
            'employeeId': employeeId,
            'projectId': projectId,
            'date': date,
        },
    });
    return result.body;
}

/**
 * Find a user’s present running time clock.
 * @param employeeId Employee ID. Defaults to ID of token owner.
 * @param fields Fields filter pattern
 * @result ResponseWrapperTimeClock successful operation
 * @throws ApiError
 */
public static async timesheetTimeClockPresentGetPresent({
    employeeId,
    fields,
}: {
    employeeId?: number,
    fields?: string,
}
): Promise<ResponseWrapperTimeClock> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/timeClock/present`,
        query: {
            'employeeId': employeeId,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find time clock entry by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTimeClock successful operation
 * @throws ApiError
 */
public static async timesheetTimeClockGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTimeClock> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/timeClock/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update time clock by ID.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperTimeClock successful operation
 * @throws ApiError
 */
public static async timesheetTimeClockPut({
    id,
    body,
}: {
    id: number,
    body?: TimeClock,
}
): Promise<ResponseWrapperTimeClock> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/timeClock/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * Stop time clock.
 * @param id Element ID
 * @param version Number of current version
 * @result any successful operation
 * @throws ApiError
 */
public static async timesheetTimeClockStopStop({
    id,
    version,
}: {
    id: number,
    version?: number,
}
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/timeClock/${id}/:stop`,
        query: {
            'version': version,
        },
    });
    return result.body;
}

}