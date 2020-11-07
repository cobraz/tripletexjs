/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyHoliday } from '../models/CompanyHoliday';
import type { ListResponseCompanyHoliday } from '../models/ListResponseCompanyHoliday';
import type { ResponseWrapperCompanyHoliday } from '../models/ResponseWrapperCompanyHoliday';
import { request as __request } from '../core/request';

export class SalarySettingsHolidayService {

    /**
     * [BETA] Find holiday settings of current logged in company.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCompanyHoliday successful operation
     * @throws ApiError
     */
    public static async salarySettingsHolidaySearch({
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseCompanyHoliday> {
    const result = await __request({
        method: 'GET',
        path: `/salary/settings/holiday`,
        query: {
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create a holiday setting of current logged in company.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperCompanyHoliday successfully created
 * @throws ApiError
 */
public static async salarySettingsHolidayPost({
    body,
}: {
    body?: CompanyHoliday,
}
): Promise<ResponseWrapperCompanyHoliday> {
    const result = await __request({
        method: 'POST',
        path: `/salary/settings/holiday`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple holiday settings of current logged in company.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseCompanyHoliday successfully created
 * @throws ApiError
 */
public static async salarySettingsHolidayListPostList({
    body,
}: {
    body?: Array<CompanyHoliday>,
}
): Promise<ListResponseCompanyHoliday> {
    const result = await __request({
        method: 'POST',
        path: `/salary/settings/holiday/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] update multiple holiday settings of current logged in company.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseCompanyHoliday successful operation
 * @throws ApiError
 */
public static async salarySettingsHolidayListPutList({
    body,
}: {
    body?: Array<CompanyHoliday>,
}
): Promise<ListResponseCompanyHoliday> {
    const result = await __request({
        method: 'PUT',
        path: `/salary/settings/holiday/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] delete multiple holiday settings of current logged in company.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async salarySettingsHolidayListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/salary/settings/holiday/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * [BETA] update a holiday setting of current logged in company.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperCompanyHoliday successful operation
 * @throws ApiError
 */
public static async salarySettingsHolidayPut({
    id,
    body,
}: {
    id: number,
    body?: CompanyHoliday,
}
): Promise<ResponseWrapperCompanyHoliday> {
    const result = await __request({
        method: 'PUT',
        path: `/salary/settings/holiday/${id}`,
        body: body,
    });
    return result.body;
}

}