/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectActivity } from '../models/ProjectActivity';
import type { ResponseWrapperProjectActivity } from '../models/ResponseWrapperProjectActivity';
import { request as __request } from '../core/request';

export class ProjectProjectActivityService {

    /**
     * Add project activity.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @result ResponseWrapperProjectActivity successfully created
     * @throws ApiError
     */
    public static async projectProjectActivityPost({
        body,
    }: {
        body?: ProjectActivity,
    }
): Promise<ResponseWrapperProjectActivity> {
    const result = await __request({
        method: 'POST',
        path: `/project/projectActivity`,
        body: body,
    });
    return result.body;
}

/**
 * Delete project activities
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async projectProjectActivityListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/projectActivity/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * Find project activity by id
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectActivity successful operation
 * @throws ApiError
 */
public static async projectProjectActivityGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectActivity> {
    const result = await __request({
        method: 'GET',
        path: `/project/projectActivity/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Delete project activity
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async projectProjectActivityDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/projectActivity/${id}`,
    });
    return result.body;
}

}