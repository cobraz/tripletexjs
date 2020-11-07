/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperTravelExpenseSettings } from '../models/ResponseWrapperTravelExpenseSettings';
import { request as __request } from '../core/request';

export class TravelExpenseSettingsService {

    /**
     * [BETA] Get travel expense settings of logged in company.
     * @param fields Fields filter pattern
     * @result ResponseWrapperTravelExpenseSettings successful operation
     * @throws ApiError
     */
    public static async travelExpenseSettingsGet({
        fields,
    }: {
        fields?: string,
    }
): Promise<ResponseWrapperTravelExpenseSettings> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/settings`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}