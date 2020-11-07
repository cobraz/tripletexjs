/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectSpecificRate } from '../models/ListResponseProjectSpecificRate';
import type { ProjectSpecificRate } from '../models/ProjectSpecificRate';
import type { ResponseWrapperProjectSpecificRate } from '../models/ResponseWrapperProjectSpecificRate';
import { request as __request } from '../core/request';

export class ProjectHourlyRatesProjectSpecificRatesService {

    /**
     * Find project specific rates corresponding with sent data.
     * @param id List of IDs
     * @param projectHourlyRateId List of IDs
     * @param employeeId List of IDs
     * @param activityId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProjectSpecificRate successful operation
     * @throws ApiError
     */
    public static async projectHourlyRatesProjectSpecificRatesSearch({
        id,
        projectHourlyRateId,
        employeeId,
        activityId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        projectHourlyRateId?: string,
        employeeId?: string,
        activityId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProjectSpecificRate> {
    const result = await __request({
        method: 'GET',
        path: `/project/hourlyRates/projectSpecificRates`,
        query: {
            'id': id,
            'projectHourlyRateId': projectHourlyRateId,
            'employeeId': employeeId,
            'activityId': activityId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create new project specific rate.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProjectSpecificRate successfully created
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesPost({
    body,
}: {
    body?: ProjectSpecificRate,
}
): Promise<ResponseWrapperProjectSpecificRate> {
    const result = await __request({
        method: 'POST',
        path: `/project/hourlyRates/projectSpecificRates`,
        body: body,
    });
    return result.body;
}

/**
 * Create multiple new project specific rates.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProjectSpecificRate successfully created
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesListPostList({
    body,
}: {
    body?: Array<ProjectSpecificRate>,
}
): Promise<ListResponseProjectSpecificRate> {
    const result = await __request({
        method: 'POST',
        path: `/project/hourlyRates/projectSpecificRates/list`,
        body: body,
    });
    return result.body;
}

/**
 * Update multiple project specific rates.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseProjectSpecificRate successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesListPutList({
    body,
}: {
    body?: Array<ProjectSpecificRate>,
}
): Promise<ListResponseProjectSpecificRate> {
    const result = await __request({
        method: 'PUT',
        path: `/project/hourlyRates/projectSpecificRates/list`,
        body: body,
    });
    return result.body;
}

/**
 * Delete project specific rates.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/hourlyRates/projectSpecificRates/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * Find project specific rate by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectSpecificRate successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectSpecificRate> {
    const result = await __request({
        method: 'GET',
        path: `/project/hourlyRates/projectSpecificRates/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update a project specific rate.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProjectSpecificRate successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesPut({
    id,
    body,
}: {
    id: number,
    body?: ProjectSpecificRate,
}
): Promise<ResponseWrapperProjectSpecificRate> {
    const result = await __request({
        method: 'PUT',
        path: `/project/hourlyRates/projectSpecificRates/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * Delete project specific rate
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesProjectSpecificRatesDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/hourlyRates/projectSpecificRates/${id}`,
    });
    return result.body;
}

}