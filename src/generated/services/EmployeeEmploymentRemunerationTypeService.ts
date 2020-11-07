/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseRemunerationType } from '../models/ListResponseRemunerationType';
import { request as __request } from '../core/request';

export class EmployeeEmploymentRemunerationTypeService {

    /**
     * [BETA] Find all remuneration type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseRemunerationType successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentRemunerationTypeSearch({
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
): Promise<ListResponseRemunerationType> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/remunerationType`,
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