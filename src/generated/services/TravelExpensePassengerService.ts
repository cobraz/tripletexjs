/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePassenger } from '../models/ListResponsePassenger';
import type { Passenger } from '../models/Passenger';
import type { ResponseWrapperPassenger } from '../models/ResponseWrapperPassenger';
import { request as __request } from '../core/request';

export class TravelExpensePassengerService {

    /**
     * [BETA] Find passengers corresponding with sent data.
     * @param mileageAllowance Equals
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePassenger successful operation
     * @throws ApiError
     */
    public static async travelExpensePassengerSearch({
        mileageAllowance,
        name,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        mileageAllowance?: string,
        name?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePassenger> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/passenger`,
        query: {
            'mileageAllowance': mileageAllowance,
            'name': name,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create passenger.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperPassenger successfully created
 * @throws ApiError
 */
public static async travelExpensePassengerPost({
    body,
}: {
    body?: Passenger,
}
): Promise<ResponseWrapperPassenger> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/passenger`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get passenger by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPassenger successful operation
 * @throws ApiError
 */
public static async travelExpensePassengerGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPassenger> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/passenger/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update passenger.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperPassenger successful operation
 * @throws ApiError
 */
public static async travelExpensePassengerPut({
    id,
    body,
}: {
    id: number,
    body?: Passenger,
}
): Promise<ResponseWrapperPassenger> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/passenger/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete passenger.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpensePassengerDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/passenger/${id}`,
    });
    return result.body;
}

}