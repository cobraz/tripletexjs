/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseLeaveOfAbsenceType } from '../models/ListResponseLeaveOfAbsenceType';
import { request as __request } from '../core/request';

export class EmployeeEmploymentLeaveOfAbsenceTypeService {

    /**
     * [BETA] Find all leave of absence type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseLeaveOfAbsenceType successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentLeaveOfAbsenceTypeSearch({
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
): Promise<ListResponseLeaveOfAbsenceType> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/leaveOfAbsenceType`,
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