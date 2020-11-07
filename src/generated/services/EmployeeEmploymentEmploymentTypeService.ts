/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseEmploymentType } from '../models/ListResponseEmploymentType';
import { request as __request } from '../core/request';

export class EmployeeEmploymentEmploymentTypeService {

    /**
     * [BETA] Find all employment type IDs.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseEmploymentType successful operation
     * @throws ApiError
     */
    public static async employeeEmploymentEmploymentTypeSearch({
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
): Promise<ListResponseEmploymentType> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/employmentType`,
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
 * [BETA] Find all maritime employment type IDs.
 * @param type maritimeEmploymentType
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseEmploymentType successful operation
 * @throws ApiError
 */
public static async employeeEmploymentEmploymentTypeMaritimeEmploymentTypeGetMaritimeEmploymentType({
    type,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    type: 'SHIP_REGISTER' | 'SHIP_TYPE' | 'TRADE_AREA',
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseEmploymentType> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/employmentType/maritimeEmploymentType`,
        query: {
            'type': type,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Find all salary type IDs.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseEmploymentType successful operation
 * @throws ApiError
 */
public static async employeeEmploymentEmploymentTypeSalaryTypeGetSalaryType({
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
): Promise<ListResponseEmploymentType> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/employmentType/salaryType`,
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
 * [BETA] Find all schedule type IDs.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseEmploymentType successful operation
 * @throws ApiError
 */
public static async employeeEmploymentEmploymentTypeScheduleTypeGetScheduleType({
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
): Promise<ListResponseEmploymentType> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/employmentType/scheduleType`,
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