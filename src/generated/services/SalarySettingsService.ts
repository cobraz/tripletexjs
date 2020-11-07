/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperSalarySettings } from '../models/ResponseWrapperSalarySettings';
import type { SalarySettings } from '../models/SalarySettings';
import { request as __request } from '../core/request';

export class SalarySettingsService {

    /**
     * [BETA] Get salary settings of logged in company.
     * @param fields Fields filter pattern
     * @result ResponseWrapperSalarySettings successful operation
     * @throws ApiError
     */
    public static async salarySettingsGet({
        fields,
    }: {
        fields?: string,
    }
): Promise<ResponseWrapperSalarySettings> {
    const result = await __request({
        method: 'GET',
        path: `/salary/settings`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update settings of logged in company.
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperSalarySettings successful operation
 * @throws ApiError
 */
public static async salarySettingsPut({
    body,
}: {
    body?: SalarySettings,
}
): Promise<ResponseWrapperSalarySettings> {
    const result = await __request({
        method: 'PUT',
        path: `/salary/settings`,
        body: body,
    });
    return result.body;
}

}