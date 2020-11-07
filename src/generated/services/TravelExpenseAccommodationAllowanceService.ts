/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccommodationAllowance } from '../models/AccommodationAllowance';
import type { ListResponseAccommodationAllowance } from '../models/ListResponseAccommodationAllowance';
import type { ResponseWrapperAccommodationAllowance } from '../models/ResponseWrapperAccommodationAllowance';
import { request as __request } from '../core/request';

export class TravelExpenseAccommodationAllowanceService {

    /**
     * [BETA] Find accommodation allowances corresponding with sent data.
     * @param travelExpenseId Equals
     * @param rateTypeId Equals
     * @param rateCategoryId Equals
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
     * @result ListResponseAccommodationAllowance successful operation
     * @throws ApiError
     */
    public static async travelExpenseAccommodationAllowanceSearch({
        travelExpenseId,
        rateTypeId,
        rateCategoryId,
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
        rateTypeId?: string,
        rateCategoryId?: string,
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
): Promise<ListResponseAccommodationAllowance> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/accommodationAllowance`,
        query: {
            'travelExpenseId': travelExpenseId,
            'rateTypeId': rateTypeId,
            'rateCategoryId': rateCategoryId,
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
 * [BETA] Create accommodation allowance.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperAccommodationAllowance successfully created
 * @throws ApiError
 */
public static async travelExpenseAccommodationAllowancePost({
    body,
}: {
    body?: AccommodationAllowance,
}
): Promise<ResponseWrapperAccommodationAllowance> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/accommodationAllowance`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get travel accommodation allowance by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperAccommodationAllowance successful operation
 * @throws ApiError
 */
public static async travelExpenseAccommodationAllowanceGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperAccommodationAllowance> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/accommodationAllowance/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update accommodation allowance.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperAccommodationAllowance successful operation
 * @throws ApiError
 */
public static async travelExpenseAccommodationAllowancePut({
    id,
    body,
}: {
    id: number,
    body?: AccommodationAllowance,
}
): Promise<ResponseWrapperAccommodationAllowance> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/accommodationAllowance/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete accommodation allowance.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseAccommodationAllowanceDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/accommodationAllowance/${id}`,
    });
    return result.body;
}

}