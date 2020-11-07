/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseActivity } from '../models/ListResponseActivity';
import type { ListResponseProject } from '../models/ListResponseProject';
import type { ListResponseTimesheetEntry } from '../models/ListResponseTimesheetEntry';
import type { ResponseWrapperBigDecimal } from '../models/ResponseWrapperBigDecimal';
import type { ResponseWrapperTimesheetEntry } from '../models/ResponseWrapperTimesheetEntry';
import type { TimesheetEntry } from '../models/TimesheetEntry';
import type { TimesheetEntrySearchResponse } from '../models/TimesheetEntrySearchResponse';
import { request as __request } from '../core/request';

export class TimesheetEntryService {

    /**
     * Find timesheet entry corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param employeeId List of IDs
     * @param projectId List of IDs
     * @param activityId List of IDs
     * @param comment Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result TimesheetEntrySearchResponse successful operation
     * @throws ApiError
     */
    public static async timesheetEntrySearch({
        dateFrom,
        dateTo,
        id,
        employeeId,
        projectId,
        activityId,
        comment,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        id?: string,
        employeeId?: string,
        projectId?: string,
        activityId?: string,
        comment?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<TimesheetEntrySearchResponse> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/entry`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'id': id,
            'employeeId': employeeId,
            'projectId': projectId,
            'activityId': activityId,
            'comment': comment,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperTimesheetEntry successfully created
 * @throws ApiError
 */
public static async timesheetEntryPost({
    body,
}: {
    body?: TimesheetEntry,
}
): Promise<ResponseWrapperTimesheetEntry> {
    const result = await __request({
        method: 'POST',
        path: `/timesheet/entry`,
        body: body,
    });
    return result.body;
}

/**
 * Find recently used timesheet activities.
 * @param projectId ID of project to find activities for
 * @param employeeId ID of employee to find activities for. Defaults to ID of token owner.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseActivity successful operation
 * @throws ApiError
 */
public static async timesheetEntryRecentActivitiesGetRecentActivities({
    projectId,
    employeeId,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    projectId: number,
    employeeId?: number,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseActivity> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/entry/>recentActivities`,
        query: {
            'projectId': projectId,
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
 * Find projects with recent activities (timesheet entry registered).
 * @param employeeId ID of employee with recent project hours Defaults to ID of token owner.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseProject successful operation
 * @throws ApiError
 */
public static async timesheetEntryRecentProjectsGetRecentProjects({
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
): Promise<ListResponseProject> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/entry/>recentProjects`,
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
 * Find total hours registered on an employee in a specific period.
 * @param employeeId ID of employee to find hours for. Defaults to ID of token owner.
 * @param startDate Format is yyyy-MM-dd (from and incl.). Defaults to today.
 * @param endDate Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow.
 * @param fields Fields filter pattern
 * @result ResponseWrapperBigDecimal successful operation
 * @throws ApiError
 */
public static async timesheetEntryTotalHoursGetTotalHours({
    employeeId,
    startDate,
    endDate,
    fields,
}: {
    employeeId?: number,
    startDate?: string,
    endDate?: string,
    fields?: string,
}
): Promise<ResponseWrapperBigDecimal> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/entry/>totalHours`,
        query: {
            'employeeId': employeeId,
            'startDate': startDate,
            'endDate': endDate,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add new timesheet entry. Multiple objects for several users can be sent in the same request.
 * @param body List of timesheet entry objects
 * @result ListResponseTimesheetEntry successfully created
 * @throws ApiError
 */
public static async timesheetEntryListPostList({
    body,
}: {
    body?: Array<TimesheetEntry>,
}
): Promise<ListResponseTimesheetEntry> {
    const result = await __request({
        method: 'POST',
        path: `/timesheet/entry/list`,
        body: body,
    });
    return result.body;
}

/**
 * Update timesheet entry. Multiple objects for different users can be sent in the same request.
 * @param body List of timesheet entry objects to update
 * @result ListResponseTimesheetEntry successful operation
 * @throws ApiError
 */
public static async timesheetEntryListPutList({
    body,
}: {
    body?: Array<TimesheetEntry>,
}
): Promise<ListResponseTimesheetEntry> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/entry/list`,
        body: body,
    });
    return result.body;
}

/**
 * Find timesheet entry by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTimesheetEntry successful operation
 * @throws ApiError
 */
public static async timesheetEntryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTimesheetEntry> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/entry/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperTimesheetEntry successful operation
 * @throws ApiError
 */
public static async timesheetEntryPut({
    id,
    body,
}: {
    id: number,
    body?: TimesheetEntry,
}
): Promise<ResponseWrapperTimesheetEntry> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/entry/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * Delete timesheet entry by ID.
 * @param id Element ID
 * @param version Number of current version
 * @result any successful operation
 * @throws ApiError
 */
public static async timesheetEntryDelete({
    id,
    version,
}: {
    id: number,
    version?: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/timesheet/entry/${id}`,
        query: {
            'version': version,
        },
    });
    return result.body;
}

}