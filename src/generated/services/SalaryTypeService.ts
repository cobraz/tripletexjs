/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseSalaryType } from '../models/ListResponseSalaryType';
import type { ResponseWrapperSalaryType } from '../models/ResponseWrapperSalaryType';
import { request as __request } from '../core/request';

export class SalaryTypeService {

    /**
     * [BETA] Find salary type corresponding with sent data.
     * @param id List of IDs
     * @param number Containing
     * @param name Containing
     * @param description Containing
     * @param showInTimesheet Equals
     * @param isInactive Equals
     * @param employeeIds Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseSalaryType successful operation
     * @throws ApiError
     */
    public static async salaryTypeSearch({
        id,
        number,
        name,
        description,
        showInTimesheet,
        isInactive,
        employeeIds,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        number?: string,
        name?: string,
        description?: string,
        showInTimesheet?: boolean,
        isInactive?: boolean,
        employeeIds?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseSalaryType> {
    const result = await __request({
        method: 'GET',
        path: `/salary/type`,
        query: {
            'id': id,
            'number': number,
            'name': name,
            'description': description,
            'showInTimesheet': showInTimesheet,
            'isInactive': isInactive,
            'employeeIds': employeeIds,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Find salary type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperSalaryType successful operation
 * @throws ApiError
 */
public static async salaryTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperSalaryType> {
    const result = await __request({
        method: 'GET',
        path: `/salary/type/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}