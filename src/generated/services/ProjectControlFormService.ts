/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectControlForm } from '../models/ListResponseProjectControlForm';
import type { ResponseWrapperProjectControlForm } from '../models/ResponseWrapperProjectControlForm';
import { request as __request } from '../core/request';

export class ProjectControlFormService {

    /**
     * [BETA] Get project control forms by project ID.
     * @param projectId Project ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProjectControlForm successful operation
     * @throws ApiError
     */
    public static async projectControlFormSearch({
        projectId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        projectId: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProjectControlForm> {
    const result = await __request({
        method: 'GET',
        path: `/project/controlForm`,
        query: {
            'projectId': projectId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get project control form by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectControlForm successful operation
 * @throws ApiError
 */
public static async projectControlFormGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectControlForm> {
    const result = await __request({
        method: 'GET',
        path: `/project/controlForm/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}