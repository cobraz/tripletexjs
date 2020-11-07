/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Employee } from '../models/Employee';
import type { ListResponseEmployee } from '../models/ListResponseEmployee';
import type { ResponseWrapperEmployee } from '../models/ResponseWrapperEmployee';
import { request as __request } from '../core/request';

export class EmployeeService {

    /**
     * Find employees corresponding with sent data.
     * @param id List of IDs
     * @param firstName Containing
     * @param lastName Containing
     * @param employeeNumber Containing
     * @param allowInformationRegistration Equals
     * @param includeContacts Equals
     * @param departmentId List of IDs
     * @param onlyProjectManagers Equals
     * @param periodStart Equals
     * @param periodEnd Equals
     * @param hasSystemAccess Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseEmployee successful operation
     * @throws ApiError
     */
    public static async employeeSearch({
        id,
        firstName,
        lastName,
        employeeNumber,
        allowInformationRegistration,
        includeContacts = false,
        departmentId,
        onlyProjectManagers,
        periodStart,
        periodEnd,
        hasSystemAccess,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        firstName?: string,
        lastName?: string,
        employeeNumber?: string,
        allowInformationRegistration?: boolean,
        includeContacts?: boolean,
        departmentId?: string,
        onlyProjectManagers?: boolean,
        periodStart?: string,
        periodEnd?: string,
        hasSystemAccess?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseEmployee> {
    const result = await __request({
        method: 'GET',
        path: `/employee`,
        query: {
            'id': id,
            'firstName': firstName,
            'lastName': lastName,
            'employeeNumber': employeeNumber,
            'allowInformationRegistration': allowInformationRegistration,
            'includeContacts': includeContacts,
            'departmentId': departmentId,
            'onlyProjectManagers': onlyProjectManagers,
            'periodStart': periodStart,
            'periodEnd': periodEnd,
            'hasSystemAccess': hasSystemAccess,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create one employee.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperEmployee successfully created
 * @throws ApiError
 */
public static async employeePost({
    body,
}: {
    body?: Employee,
}
): Promise<ResponseWrapperEmployee> {
    const result = await __request({
        method: 'POST',
        path: `/employee`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create several employees.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseEmployee successfully created
 * @throws ApiError
 */
public static async employeeListPostList({
    body,
}: {
    body?: Array<Employee>,
}
): Promise<ListResponseEmployee> {
    const result = await __request({
        method: 'POST',
        path: `/employee/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get employee by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperEmployee successful operation
 * @throws ApiError
 */
public static async employeeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperEmployee> {
    const result = await __request({
        method: 'GET',
        path: `/employee/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update employee.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperEmployee successful operation
 * @throws ApiError
 */
public static async employeePut({
    id,
    body,
}: {
    id: number,
    body?: Employee,
}
): Promise<ResponseWrapperEmployee> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/${id}`,
        body: body,
    });
    return result.body;
}

}