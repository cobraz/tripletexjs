/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseWorkingHoursScheme } from '../models/ListResponseWorkingHoursScheme';
import { request as __request } from '../core/request';

export class EmployeeEmploymentWorkingHoursSchemeService {

    /**
     * [BETA] Find working hours scheme ID.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseWorkingHoursScheme successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentWorkingHoursSchemeSearch({
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
): Promise<ListResponseWorkingHoursScheme> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/workingHoursScheme`,
        query: {
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

}