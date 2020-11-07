/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Activity } from '../models/Activity';
import type { ListResponseActivity } from '../models/ListResponseActivity';
import type { ResponseWrapperActivity } from '../models/ResponseWrapperActivity';
import { request as __request } from '../core/request';

export class ActivityService {

    /**
     * Find activities corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param description Containing
     * @param isProjectActivity Equals
     * @param isGeneral Equals
     * @param isChargeable Equals
     * @param isTask Equals
     * @param isInactive Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseActivity successful operation
     * @throws ApiError
     */
    public static async activitySearch({
        id,
        name,
        number,
        description,
        isProjectActivity,
        isGeneral,
        isChargeable,
        isTask,
        isInactive,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        number?: string,
        description?: string,
        isProjectActivity?: boolean,
        isGeneral?: boolean,
        isChargeable?: boolean,
        isTask?: boolean,
        isInactive?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseActivity> {
    const result = await __request({
        method: 'GET',
        path: `/activity`,
        query: {
            'id': id,
            'name': name,
            'number': number,
            'description': description,
            'isProjectActivity': isProjectActivity,
            'isGeneral': isGeneral,
            'isChargeable': isChargeable,
            'isTask': isTask,
            'isInactive': isInactive,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add activity.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperActivity successfully created
 * @throws ApiError
 */
public static async activityPost({
    body,
}: {
    body?: Activity,
}
): Promise<ResponseWrapperActivity> {
    const result = await __request({
        method: 'POST',
        path: `/activity`,
        body: body,
    });
    return result.body;
}

/**
 * Find applicable time sheet activities for an employee on a specific day.
 * @param projectId Project ID
 * @param employeeId Employee ID. Defaults to ID of token owner.
 * @param date yyyy-MM-dd. Defaults to today.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseActivity successful operation
 * @throws ApiError
 */
public static async activityForTimeSheetGetForTimeSheet({
    projectId,
    employeeId,
    date,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    projectId: number,
    employeeId?: number,
    date?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseActivity> {
    const result = await __request({
        method: 'GET',
        path: `/activity/>forTimeSheet`,
        query: {
            'projectId': projectId,
            'employeeId': employeeId,
            'date': date,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add multiple activities.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseActivity successfully created
 * @throws ApiError
 */
public static async activityListPostList({
    body,
}: {
    body?: Array<Activity>,
}
): Promise<ListResponseActivity> {
    const result = await __request({
        method: 'POST',
        path: `/activity/list`,
        body: body,
    });
    return result.body;
}

/**
 * Find activity by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperActivity successful operation
 * @throws ApiError
 */
public static async activityGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperActivity> {
    const result = await __request({
        method: 'GET',
        path: `/activity/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}