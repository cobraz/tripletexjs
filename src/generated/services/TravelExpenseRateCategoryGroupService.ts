/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTravelExpenseRateCategoryGroup } from '../models/ListResponseTravelExpenseRateCategoryGroup';
import type { ResponseWrapperTravelExpenseRateCategoryGroup } from '../models/ResponseWrapperTravelExpenseRateCategoryGroup';
import { request as __request } from '../core/request';

export class TravelExpenseRateCategoryGroupService {

    /**
     * [BETA] Find rate categoriy groups corresponding with sent data.
     * @param name Containing
     * @param isForeignTravel Equals
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelExpenseRateCategoryGroup successful operation
     * @throws ApiError
     */
    public static async travelExpenseRateCategoryGroupSearch({
        name,
        isForeignTravel,
        dateFrom,
        dateTo,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        name?: string,
        isForeignTravel?: boolean,
        dateFrom?: string,
        dateTo?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTravelExpenseRateCategoryGroup> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/rateCategoryGroup`,
        query: {
            'name': name,
            'isForeignTravel': isForeignTravel,
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get travel report rate category group by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelExpenseRateCategoryGroup successful operation
 * @throws ApiError
 */
public static async travelExpenseRateCategoryGroupGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelExpenseRateCategoryGroup> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/rateCategoryGroup/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}