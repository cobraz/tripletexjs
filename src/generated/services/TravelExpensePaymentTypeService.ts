/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTravelPaymentType } from '../models/ListResponseTravelPaymentType';
import type { ResponseWrapperTravelPaymentType } from '../models/ResponseWrapperTravelPaymentType';
import { request as __request } from '../core/request';

export class TravelExpensePaymentTypeService {

    /**
     * [BETA] Find payment type corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param isInactive Equals
     * @param showOnEmployeeExpenses Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelPaymentType successful operation
     * @throws ApiError
     */
    public static async travelExpensePaymentTypeSearch({
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
): Promise<ListResponseTravelPaymentType> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/paymentType`,
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
 * [BETA] Get payment type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelPaymentType successful operation
 * @throws ApiError
 */
public static async travelExpensePaymentTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelPaymentType> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/paymentType/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}