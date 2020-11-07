/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseMileageAllowance } from '../models/ListResponseMileageAllowance';
import type { MileageAllowance } from '../models/MileageAllowance';
import type { ResponseWrapperMileageAllowance } from '../models/ResponseWrapperMileageAllowance';
import { request as __request } from '../core/request';

export class TravelExpenseMileageAllowanceService {

    /**
     * [BETA] Find mileage allowances corresponding with sent data.
     * @param travelExpenseId Equals
     * @param rateTypeId Equals
     * @param rateCategoryId Equals
     * @param kmFrom From and including
     * @param kmTo To and excluding
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param departureLocation Containing
     * @param destination Containing
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param isCompanyCar Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseMileageAllowance successful operation
     * @throws ApiError
     */
    public static async travelExpenseMileageAllowanceSearch({
        travelExpenseId,
        rateTypeId,
        rateCategoryId,
        kmFrom,
        kmTo,
        rateFrom,
        rateTo,
        amountFrom,
        amountTo,
        departureLocation,
        destination,
        dateFrom,
        dateTo,
        isCompanyCar,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        travelExpenseId?: string,
        rateTypeId?: string,
        rateCategoryId?: string,
        kmFrom?: string,
        kmTo?: string,
        rateFrom?: string,
        rateTo?: string,
        amountFrom?: string,
        amountTo?: string,
        departureLocation?: string,
        destination?: string,
        dateFrom?: string,
        dateTo?: string,
        isCompanyCar?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseMileageAllowance> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/mileageAllowance`,
        query: {
            'travelExpenseId': travelExpenseId,
            'rateTypeId': rateTypeId,
            'rateCategoryId': rateCategoryId,
            'kmFrom': kmFrom,
            'kmTo': kmTo,
            'rateFrom': rateFrom,
            'rateTo': rateTo,
            'amountFrom': amountFrom,
            'amountTo': amountTo,
            'departureLocation': departureLocation,
            'destination': destination,
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'isCompanyCar': isCompanyCar,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create mileage allowance.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperMileageAllowance successfully created
 * @throws ApiError
 */
public static async travelExpenseMileageAllowancePost({
    body,
}: {
    body?: MileageAllowance,
}
): Promise<ResponseWrapperMileageAllowance> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/mileageAllowance`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get mileage allowance by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperMileageAllowance successful operation
 * @throws ApiError
 */
public static async travelExpenseMileageAllowanceGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperMileageAllowance> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/mileageAllowance/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update mileage allowance.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperMileageAllowance successful operation
 * @throws ApiError
 */
public static async travelExpenseMileageAllowancePut({
    id,
    body,
}: {
    id: number,
    body?: MileageAllowance,
}
): Promise<ResponseWrapperMileageAllowance> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/mileageAllowance/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete mileage allowance.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseMileageAllowanceDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/mileageAllowance/${id}`,
    });
    return result.body;
}

}