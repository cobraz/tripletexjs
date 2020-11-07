/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTravelExpenseZone } from '../models/ListResponseTravelExpenseZone';
import type { ResponseWrapperTravelExpenseZone } from '../models/ResponseWrapperTravelExpenseZone';
import { request as __request } from '../core/request';

export class TravelExpensezoneService {

    /**
     * Find travel expense zones corresponding with sent data.
     * @param id List of IDs
     * @param code List of IDs
     * @param isDisabled Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelExpenseZone successful operation
     * @throws ApiError
     */
    public static async travelExpenseZoneSearch({
        id,
        code,
        isDisabled,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        code?: string,
        isDisabled?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTravelExpenseZone> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/zone`,
        query: {
            'id': id,
            'code': code,
            'isDisabled': isDisabled,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get travel expense zone by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelExpenseZone successful operation
 * @throws ApiError
 */
public static async travelExpenseZoneGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelExpenseZone> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/zone/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}