/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTravelCostCategory } from '../models/ListResponseTravelCostCategory';
import type { ResponseWrapperTravelCostCategory } from '../models/ResponseWrapperTravelCostCategory';
import { request as __request } from '../core/request';

export class TravelExpenseCostCategoryService {

    /**
     * [BETA] Find cost category corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param isInactive Equals
     * @param showOnEmployeeExpenses Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelCostCategory successful operation
     * @throws ApiError
     */
    public static async travelExpenseCostCategorySearch({
        id,
        description,
        isInactive,
        showOnEmployeeExpenses,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        description?: string,
        isInactive?: boolean,
        showOnEmployeeExpenses?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTravelCostCategory> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/costCategory`,
        query: {
            'id': id,
            'description': description,
            'isInactive': isInactive,
            'showOnEmployeeExpenses': showOnEmployeeExpenses,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get cost category by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelCostCategory successful operation
 * @throws ApiError
 */
public static async travelExpenseCostCategoryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelCostCategory> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/costCategory/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}