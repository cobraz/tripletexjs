/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTimesheetSalaryTypeSpecification } from '../models/ListResponseTimesheetSalaryTypeSpecification';
import type { ResponseWrapperTimesheetSalaryTypeSpecification } from '../models/ResponseWrapperTimesheetSalaryTypeSpecification';
import type { TimesheetSalaryTypeSpecification } from '../models/TimesheetSalaryTypeSpecification';
import { request as __request } from '../core/request';

export class TimesheetSalaryTypeSpecificationService {

    /**
     * [BETA] Get list of timesheet SalaryType Specifications
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param employeeId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTimesheetSalaryTypeSpecification successful operation
     * @throws ApiError
     */
    public static async timesheetSalaryTypeSpecificationSearch({
        dateFrom,
        dateTo,
        employeeId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom?: string,
        dateTo?: string,
        employeeId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTimesheetSalaryTypeSpecification> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/salaryTypeSpecification`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'employeeId': employeeId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create a timesheet SalaryType Specification. Only one entry per employee/date/SalaryType
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperTimesheetSalaryTypeSpecification successfully created
 * @throws ApiError
 */
public static async timesheetSalaryTypeSpecificationPost({
    body,
}: {
    body?: TimesheetSalaryTypeSpecification,
}
): Promise<ResponseWrapperTimesheetSalaryTypeSpecification> {
    const result = await __request({
        method: 'POST',
        path: `/timesheet/salaryTypeSpecification`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get timesheet SalaryType Specification for a specific ID
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTimesheetSalaryTypeSpecification successful operation
 * @throws ApiError
 */
public static async timesheetSalaryTypeSpecificationGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTimesheetSalaryTypeSpecification> {
    const result = await __request({
        method: 'GET',
        path: `/timesheet/salaryTypeSpecification/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update a timesheet SalaryType Specification
 * @param id Element ID
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperTimesheetSalaryTypeSpecification successful operation
 * @throws ApiError
 */
public static async timesheetSalaryTypeSpecificationPut({
    id,
    body,
}: {
    id: number,
    body?: TimesheetSalaryTypeSpecification,
}
): Promise<ResponseWrapperTimesheetSalaryTypeSpecification> {
    const result = await __request({
        method: 'PUT',
        path: `/timesheet/salaryTypeSpecification/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete a timesheet SalaryType Specification
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async timesheetSalaryTypeSpecificationDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/timesheet/salaryTypeSpecification/${id}`,
    });
    return result.body;
}

}