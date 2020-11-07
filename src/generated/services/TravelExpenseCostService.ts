/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cost } from '../models/Cost';
import type { ListResponseCost } from '../models/ListResponseCost';
import type { ResponseWrapperCost } from '../models/ResponseWrapperCost';
import { request as __request } from '../core/request';

export class TravelExpenseCostService {

    /**
     * [BETA] Find costs corresponding with sent data.
     * @param travelExpenseId Equals
     * @param vatTypeId Equals
     * @param currencyId Equals
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param countFrom From and including
     * @param countTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param location Containing
     * @param address Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCost successful operation
     * @throws ApiError
     */
    public static async travelExpenseCostSearch({
        travelExpenseId,
        vatTypeId,
        currencyId,
        rateFrom,
        rateTo,
        countFrom,
        countTo,
        amountFrom,
        amountTo,
        location,
        address,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        travelExpenseId?: string,
        vatTypeId?: string,
        currencyId?: string,
        rateFrom?: string,
        rateTo?: string,
        countFrom?: number,
        countTo?: number,
        amountFrom?: string,
        amountTo?: string,
        location?: string,
        address?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseCost> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/cost`,
        query: {
            'travelExpenseId': travelExpenseId,
            'vatTypeId': vatTypeId,
            'currencyId': currencyId,
            'rateFrom': rateFrom,
            'rateTo': rateTo,
            'countFrom': countFrom,
            'countTo': countTo,
            'amountFrom': amountFrom,
            'amountTo': amountTo,
            'location': location,
            'address': address,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create cost.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperCost successfully created
 * @throws ApiError
 */
public static async travelExpenseCostPost({
    body,
}: {
    body?: Cost,
}
): Promise<ResponseWrapperCost> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/cost`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get cost by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCost successful operation
 * @throws ApiError
 */
public static async travelExpenseCostGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCost> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/cost/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update cost.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperCost successful operation
 * @throws ApiError
 */
public static async travelExpenseCostPut({
    id,
    body,
}: {
    id: number,
    body?: Cost,
}
): Promise<ResponseWrapperCost> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/cost/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete cost.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseCostDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/cost/${id}`,
    });
    return result.body;
}

}