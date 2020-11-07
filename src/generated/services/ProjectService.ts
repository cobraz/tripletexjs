/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProject } from '../models/ListResponseProject';
import type { Project } from '../models/Project';
import type { ResponseWrapperProject } from '../models/ResponseWrapperProject';
import { request as __request } from '../core/request';

export class ProjectService {

    /**
     * Find projects corresponding with sent data.
     * @param id List of IDs
     * @param name Containing
     * @param number Equals
     * @param isOffer Equals
     * @param projectManagerId List of IDs
     * @param employeeInProjectId List of IDs
     * @param departmentId List of IDs
     * @param startDateFrom From and including
     * @param startDateTo To and excluding
     * @param endDateFrom From and including
     * @param endDateTo To and excluding
     * @param isClosed Equals
     * @param customerId Equals
     * @param externalAccountsNumber Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProject successful operation
     * @throws ApiError
     */
    public static async projectSearch({
        id,
        name,
        number,
        isOffer,
        projectManagerId,
        employeeInProjectId,
        departmentId,
        startDateFrom,
        startDateTo,
        endDateFrom,
        endDateTo,
        isClosed,
        customerId,
        externalAccountsNumber,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        number?: string,
        isOffer?: boolean,
        projectManagerId?: string,
        employeeInProjectId?: string,
        departmentId?: string,
        startDateFrom?: string,
        startDateTo?: string,
        endDateFrom?: string,
        endDateTo?: string,
        isClosed?: boolean,
        customerId?: string,
        externalAccountsNumber?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProject> {
    const result = await __request({
        method: 'GET',
        path: `/project`,
        query: {
            'id': id,
            'name': name,
            'number': number,
            'isOffer': isOffer,
            'projectManagerId': projectManagerId,
            'employeeInProjectId': employeeInProjectId,
            'departmentId': departmentId,
            'startDateFrom': startDateFrom,
            'startDateTo': startDateTo,
            'endDateFrom': endDateFrom,
            'endDateTo': endDateTo,
            'isClosed': isClosed,
            'customerId': customerId,
            'externalAccountsNumber': externalAccountsNumber,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Add new project.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProject successfully created
 * @throws ApiError
 */
public static async projectPost({
    body,
}: {
    body?: Project,
}
): Promise<ResponseWrapperProject> {
    const result = await __request({
        method: 'POST',
        path: `/project`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete multiple projects.
 * @param body JSON representing objects to delete. Should have ID and version set.
 * @result any successful operation
 * @throws ApiError
 */
public static async projectDeleteList({
    body,
}: {
    body?: Array<Project>,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project`,
        body: body,
    });
    return result.body;
}

/**
 * Find projects applicable for time sheet registration on a specific day.
 * @param employeeId Employee ID. Defaults to ID of token owner.
 * @param date yyyy-MM-dd. Defaults to today.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseProject successful operation
 * @throws ApiError
 */
public static async projectForTimeSheetGetForTimeSheet({
    employeeId,
    date,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    employeeId?: number,
    date?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseProject> {
    const result = await __request({
        method: 'GET',
        path: `/project/>forTimeSheet`,
        query: {
            'employeeId': employeeId,
            'date': date,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Register new projects. Multiple projects for different users can be sent in the same request.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProject successfully created
 * @throws ApiError
 */
public static async projectListPostList({
    body,
}: {
    body?: Array<Project>,
}
): Promise<ListResponseProject> {
    const result = await __request({
        method: 'POST',
        path: `/project/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple projects.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseProject successful operation
 * @throws ApiError
 */
public static async projectListPutList({
    body,
}: {
    body?: Array<Project>,
}
): Promise<ListResponseProject> {
    const result = await __request({
        method: 'PUT',
        path: `/project/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete projects.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async projectListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * Find project by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProject successful operation
 * @throws ApiError
 */
public static async projectGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProject> {
    const result = await __request({
        method: 'GET',
        path: `/project/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update project.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProject successful operation
 * @throws ApiError
 */
public static async projectPut({
    id,
    body,
}: {
    id: number,
    body?: Project,
}
): Promise<ResponseWrapperProject> {
    const result = await __request({
        method: 'PUT',
        path: `/project/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete project.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async projectDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/${id}`,
    });
    return result.body;
}

}