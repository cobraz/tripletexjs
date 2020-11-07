/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LeaveOfAbsence } from '../models/LeaveOfAbsence';
import type { ListResponseLeaveOfAbsence } from '../models/ListResponseLeaveOfAbsence';
import type { ResponseWrapperLeaveOfAbsence } from '../models/ResponseWrapperLeaveOfAbsence';
import { request as __request } from '../core/request';

export class EmployeeEmploymentLeaveOfAbsenceService {

    /**
     * [BETA] Create leave of absence.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @result ResponseWrapperLeaveOfAbsence successfully created
     * @throws ApiError
     */
    public static async employeeEmploymentLeaveOfAbsencePost({
        body,
    }: {
        body?: LeaveOfAbsence,
    }
): Promise<ResponseWrapperLeaveOfAbsence> {
    const result = await __request({
        method: 'POST',
        path: `/employee/employment/leaveOfAbsence`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple leave of absences.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseLeaveOfAbsence successfully created
 * @throws ApiError
 */
public static async employeeEmploymentLeaveOfAbsenceListPostList({
    body,
}: {
    body?: Array<LeaveOfAbsence>,
}
): Promise<ListResponseLeaveOfAbsence> {
    const result = await __request({
        method: 'POST',
        path: `/employee/employment/leaveOfAbsence/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find leave of absence by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperLeaveOfAbsence successful operation
 * @throws ApiError
 */
public static async employeeEmploymentLeaveOfAbsenceGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperLeaveOfAbsence> {
    const result = await __request({
        method: 'GET',
        path: `/employee/employment/leaveOfAbsence/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update leave of absence.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperLeaveOfAbsence successful operation
 * @throws ApiError
 */
public static async employeeEmploymentLeaveOfAbsencePut({
    id,
    body,
}: {
    id: number,
    body?: LeaveOfAbsence,
}
): Promise<ResponseWrapperLeaveOfAbsence> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/employment/leaveOfAbsence/${id}`,
        body: body,
    });
    return result.body;
}

}