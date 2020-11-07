/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTravelExpenseRateCategory } from '../models/ListResponseTravelExpenseRateCategory';
import type { ResponseWrapperTravelExpenseRateCategory } from '../models/ResponseWrapperTravelExpenseRateCategory';
import { request as __request } from '../core/request';

export class TravelExpenseRateCategoryService {

    /**
     * [BETA] Find rate categories corresponding with sent data.
     * @param type Equals
     * @param name Containing
     * @param travelReportRateCategoryGroupId Equals
     * @param ameldingWageCode Containing
     * @param wageCodeNumber Equals
     * @param isValidDayTrip Equals
     * @param isValidAccommodation Equals
     * @param isValidDomestic Equals
     * @param requiresZone Equals
     * @param isRequiresOvernightAccommodation Equals
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelExpenseRateCategory successful operation
     * @throws ApiError
     */
    public static async travelExpenseRateCategorySearch({
        type,
        name,
        travelReportRateCategoryGroupId,
        ameldingWageCode,
        wageCodeNumber,
        isValidDayTrip,
        isValidAccommodation,
        isValidDomestic,
        requiresZone,
        isRequiresOvernightAccommodation,
        dateFrom,
        dateTo,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        type?: 'PER_DIEM' | 'ACCOMMODATION_ALLOWANCE' | 'MILEAGE_ALLOWANCE',
        name?: string,
        travelReportRateCategoryGroupId?: number,
        ameldingWageCode?: string,
        wageCodeNumber?: string,
        isValidDayTrip?: boolean,
        isValidAccommodation?: boolean,
        isValidDomestic?: boolean,
        requiresZone?: boolean,
        isRequiresOvernightAccommodation?: boolean,
        dateFrom?: string,
        dateTo?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTravelExpenseRateCategory> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/rateCategory`,
        query: {
            'type': type,
            'name': name,
            'travelReportRateCategoryGroupId': travelReportRateCategoryGroupId,
            'ameldingWageCode': ameldingWageCode,
            'wageCodeNumber': wageCodeNumber,
            'isValidDayTrip': isValidDayTrip,
            'isValidAccommodation': isValidAccommodation,
            'isValidDomestic': isValidDomestic,
            'requiresZone': requiresZone,
            'isRequiresOvernightAccommodation': isRequiresOvernightAccommodation,
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
 * [BETA] Get travel expense rate category by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelExpenseRateCategory successful operation
 * @throws ApiError
 */
public static async travelExpenseRateCategoryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelExpenseRateCategory> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/rateCategory/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}