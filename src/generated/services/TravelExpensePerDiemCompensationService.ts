/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePerDiemCompensation } from '../models/ListResponsePerDiemCompensation';
import type { PerDiemCompensation } from '../models/PerDiemCompensation';
import type { ResponseWrapperPerDiemCompensation } from '../models/ResponseWrapperPerDiemCompensation';
import { request as __request } from '../core/request';

export class TravelExpensePerDiemCompensationService {

    /**
     * [BETA] Find per diem compensations corresponding with sent data.
     * @param travelExpenseId Equals
     * @param rateTypeId Equals
     * @param rateCategoryId Equals
     * @param overnightAccommodation Equals
     * @param countFrom From and including
     * @param countTo To and excluding
     * @param rateFrom From and including
     * @param rateTo To and excluding
     * @param amountFrom From and including
     * @param amountTo To and excluding
     * @param location Containing
     * @param address Containing
     * @param isDeductionForBreakfast Equals
     * @param isLunchDeduction Equals
     * @param isDinnerDeduction Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePerDiemCompensation successful operation
     * @throws ApiError
     */
    public static async travelExpensePerDiemCompensationSearch({
        travelExpenseId,
        rateTypeId,
        rateCategoryId,
        overnightAccommodation,
        countFrom,
        countTo,
        rateFrom,
        rateTo,
        amountFrom,
        amountTo,
        location,
        address,
        isDeductionForBreakfast,
        isLunchDeduction,
        isDinnerDeduction,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        travelExpenseId?: string,
        rateTypeId?: string,
        rateCategoryId?: string,
        overnightAccommodation?: 'NONE' | 'HOTEL' | 'BOARDING_HOUSE_WITHOUT_COOKING' | 'BOARDING_HOUSE_WITH_COOKING',
        countFrom?: number,
        countTo?: number,
        rateFrom?: string,
        rateTo?: string,
        amountFrom?: string,
        amountTo?: string,
        location?: string,
        address?: string,
        isDeductionForBreakfast?: boolean,
        isLunchDeduction?: boolean,
        isDinnerDeduction?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePerDiemCompensation> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/perDiemCompensation`,
        query: {
            'travelExpenseId': travelExpenseId,
            'rateTypeId': rateTypeId,
            'rateCategoryId': rateCategoryId,
            'overnightAccommodation': overnightAccommodation,
            'countFrom': countFrom,
            'countTo': countTo,
            'rateFrom': rateFrom,
            'rateTo': rateTo,
            'amountFrom': amountFrom,
            'amountTo': amountTo,
            'location': location,
            'address': address,
            'isDeductionForBreakfast': isDeductionForBreakfast,
            'isLunchDeduction': isLunchDeduction,
            'isDinnerDeduction': isDinnerDeduction,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create per diem compensation.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperPerDiemCompensation successfully created
 * @throws ApiError
 */
public static async travelExpensePerDiemCompensationPost({
    body,
}: {
    body?: PerDiemCompensation,
}
): Promise<ResponseWrapperPerDiemCompensation> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/perDiemCompensation`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get per diem compensation by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPerDiemCompensation successful operation
 * @throws ApiError
 */
public static async travelExpensePerDiemCompensationGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPerDiemCompensation> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/perDiemCompensation/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update per diem compensation.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperPerDiemCompensation successful operation
 * @throws ApiError
 */
public static async travelExpensePerDiemCompensationPut({
    id,
    body,
}: {
    id: number,
    body?: PerDiemCompensation,
}
): Promise<ResponseWrapperPerDiemCompensation> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/perDiemCompensation/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete per diem compensation.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpensePerDiemCompensationDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/perDiemCompensation/${id}`,
    });
    return result.body;
}

}