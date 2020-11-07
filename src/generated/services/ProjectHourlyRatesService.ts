/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectHourlyRate } from '../models/ListResponseProjectHourlyRate';
import type { ProjectHourlyRate } from '../models/ProjectHourlyRate';
import type { ResponseWrapperProjectHourlyRate } from '../models/ResponseWrapperProjectHourlyRate';
import { request as __request } from '../core/request';

export class ProjectHourlyRatesService {

    /**
     * Find project hourly rates corresponding with sent data.
     * @param id List of IDs
     * @param projectId List of IDs
     * @param type Equals
     * @param startDateFrom From and including
     * @param startDateTo To and excluding
     * @param showInProjectOrder Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProjectHourlyRate successful operation
     * @throws ApiError
     */
    public static async projectHourlyRatesSearch({
        id,
        projectId,
        type,
        startDateFrom,
        startDateTo,
        showInProjectOrder,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        projectId?: string,
        type?: 'TYPE_PREDEFINED_HOURLY_RATES' | 'TYPE_PROJECT_SPECIFIC_HOURLY_RATES' | 'TYPE_FIXED_HOURLY_RATE',
        startDateFrom?: string,
        startDateTo?: string,
        showInProjectOrder?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProjectHourlyRate> {
    const result = await __request({
        method: 'GET',
        path: `/project/hourlyRates`,
        query: {
            'id': id,
            'projectId': projectId,
            'type': type,
            'startDateFrom': startDateFrom,
            'startDateTo': startDateTo,
            'showInProjectOrder': showInProjectOrder,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create a project hourly rate.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProjectHourlyRate successfully created
 * @throws ApiError
 */
public static async projectHourlyRatesPost({
    body,
}: {
    body?: ProjectHourlyRate,
}
): Promise<ResponseWrapperProjectHourlyRate> {
    const result = await __request({
        method: 'POST',
        path: `/project/hourlyRates`,
        body: body,
    });
    return result.body;
}

/**
 * Create multiple project hourly rates.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProjectHourlyRate successfully created
 * @throws ApiError
 */
public static async projectHourlyRatesListPostList({
    body,
}: {
    body?: Array<ProjectHourlyRate>,
}
): Promise<ListResponseProjectHourlyRate> {
    const result = await __request({
        method: 'POST',
        path: `/project/hourlyRates/list`,
        body: body,
    });
    return result.body;
}

/**
 * Update multiple project hourly rates.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseProjectHourlyRate successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesListPutList({
    body,
}: {
    body?: Array<ProjectHourlyRate>,
}
): Promise<ListResponseProjectHourlyRate> {
    const result = await __request({
        method: 'PUT',
        path: `/project/hourlyRates/list`,
        body: body,
    });
    return result.body;
}

/**
 * Delete project hourly rates.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/hourlyRates/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * Find project hourly rate by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectHourlyRate successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectHourlyRate> {
    const result = await __request({
        method: 'GET',
        path: `/project/hourlyRates/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update a project hourly rate.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProjectHourlyRate successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesPut({
    id,
    body,
}: {
    id: number,
    body?: ProjectHourlyRate,
}
): Promise<ResponseWrapperProjectHourlyRate> {
    const result = await __request({
        method: 'PUT',
        path: `/project/hourlyRates/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * Delete Project Hourly Rate
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async projectHourlyRatesDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/hourlyRates/${id}`,
    });
    return result.body;
}

}