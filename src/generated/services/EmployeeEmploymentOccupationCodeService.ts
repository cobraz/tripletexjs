/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseOccupationCode } from '../models/ListResponseOccupationCode';
import { request as __request } from '../core/request';

export class EmployeeEmploymentOccupationCodeService {

    /**
     * [BETA] Find all profession codes.
     * @param nameNo Containing
     * @param code Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseOccupationCode successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentOccupationCodeSearch({
        nameNo,
        code,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        nameNo?: string,
        code?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseOccupationCode> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/occupationCode`,
        query: {
            'nameNO': nameNo,
            'code': code,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

}