/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTravelExpenseRate } from '../models/ListResponseTravelExpenseRate';
import type { ResponseWrapperTravelExpenseRate } from '../models/ResponseWrapperTravelExpenseRate';
import { request as __request } from '../core/request';

export class TravelExpenseRateService {

    /**
     * [BETA] Find rates corresponding with sent data.
     * @param rateCategoryId Equals
     * @param type Equals
     * @param isValidDayTrip Equals
     * @param isValidAccommodation Equals
     * @param isValidDomestic Equals
     * @param isValidForeignTravel Equals
     * @param requiresZone Equals
     * @param requiresOvernightAccommodation Equals
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelExpenseRate successful operation
     * @throws ApiError
     */
    public static async travelExpenseRateSearch({
        rateCategoryId,
        type,
        isValidDayTrip,
        isValidAccommodation,
        isValidDomestic,
        isValidForeignTravel,
        requiresZone,
        requiresOvernightAccommodation,
        dateFrom,
        dateTo,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        rateCategoryId?: string,
        type?: 'PER_DIEM' | 'ACCOMMODATION_ALLOWANCE' | 'MILEAGE_ALLOWANCE',
        isValidDayTrip?: boolean,
        isValidAccommodation?: boolean,
        isValidDomestic?: boolean,
        isValidForeignTravel?: boolean,
        requiresZone?: boolean,
        requiresOvernightAccommodation?: boolean,
        dateFrom?: string,
        dateTo?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTravelExpenseRate> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/rate`,
        query: {
            'rateCategoryId': rateCategoryId,
            'type': type,
            'isValidDayTrip': isValidDayTrip,
            'isValidAccommodation': isValidAccommodation,
            'isValidDomestic': isValidDomestic,
            'isValidForeignTravel': isValidForeignTravel,
            'requiresZone': requiresZone,
            'requiresOvernightAccommodation': requiresOvernightAccommodation,
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
 * [BETA] Get travel expense rate by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelExpenseRate successful operation
 * @throws ApiError
 */
public static async travelExpenseRateGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelExpenseRate> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/rate/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}