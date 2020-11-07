/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperTimesheetSettings } from '../models/ResponseWrapperTimesheetSettings';
import { request as __request } from '../core/request';

export class TimesheetSettingsService {

    /**
     * [BETA] Get timesheet settings of logged in company.
     * @param fields Fields filter pattern
     * @result ResponseWrapperTimesheetSettings successful operation
     * @throws ApiError
     */
    public static async timesheetSettingsGet({
        fields,
    }: {
        fields?: string,
    }
): Promise<ResponseWrapperTimesheetSettings> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/settings`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}