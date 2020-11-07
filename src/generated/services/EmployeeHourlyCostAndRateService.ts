/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HourlyCostAndRate } from '../models/HourlyCostAndRate';
import type { ListResponseHourlyCostAndRate } from '../models/ListResponseHourlyCostAndRate';
import type { ResponseWrapperHourlyCostAndRate } from '../models/ResponseWrapperHourlyCostAndRate';
import { request as __request } from '../core/request';

export class EmployeeHourlyCostAndRateService {

    /**
     * Find all hourly cost and rates for employee.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseHourlyCostAndRate successful operation
     * @throws ApiError
     */
    public static async employeeHourlyCostAndRateSearch({
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
): Promise<ListResponseHourlyCostAndRate> {
    const result = await __request({
        method: 'GET',
        path: `/employee/hourlyCostAndRate`,
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
 * [BETA] Create hourly cost and rate.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperHourlyCostAndRate successfully created
 * @throws ApiError
 */
public static async employeeHourlyCostAndRatePost({
    body,
}: {
    body?: HourlyCostAndRate,
}
): Promise<ResponseWrapperHourlyCostAndRate> {
    const result = await __request({
        method: 'POST',
        path: `/employee/hourlyCostAndRate`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find hourly cost and rate by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperHourlyCostAndRate successful operation
 * @throws ApiError
 */
public static async employeeHourlyCostAndRateGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperHourlyCostAndRate> {
    const result = await __request({
        method: 'GET',
        path: `/employee/hourlyCostAndRate/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update hourly cost and rate.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperHourlyCostAndRate successful operation
 * @throws ApiError
 */
public static async employeeHourlyCostAndRatePut({
    id,
    body,
}: {
    id: number,
    body?: HourlyCostAndRate,
}
): Promise<ResponseWrapperHourlyCostAndRate> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/hourlyCostAndRate/${id}`,
        body: body,
    });
    return result.body;
}

}