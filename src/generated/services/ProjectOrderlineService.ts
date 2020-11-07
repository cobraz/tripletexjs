/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectOrderLine } from '../models/ListResponseProjectOrderLine';
import type { ProjectOrderLine } from '../models/ProjectOrderLine';
import type { ResponseWrapperProjectOrderLine } from '../models/ResponseWrapperProjectOrderLine';
import { request as __request } from '../core/request';

export class ProjectOrderlineService {

    /**
     * [BETA] Find all order lines for project.
     * @param projectId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProjectOrderLine successful operation
     * @throws ApiError
     */
    public static async projectOrderlineSearch({
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
): Promise<ListResponseProjectOrderLine> {
    const result = await __request({
        method: 'GET',
        path: `/project/orderline`,
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
 * [BETA] Create order line. When creating several order lines, use /list for better performance.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProjectOrderLine successfully created
 * @throws ApiError
 */
public static async projectOrderlinePost({
    body,
}: {
    body?: ProjectOrderLine,
}
): Promise<ResponseWrapperProjectOrderLine> {
    const result = await __request({
        method: 'POST',
        path: `/project/orderline`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple order lines.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProjectOrderLine successfully created
 * @throws ApiError
 */
public static async projectOrderlineListPostList({
    body,
}: {
    body?: Array<ProjectOrderLine>,
}
): Promise<ListResponseProjectOrderLine> {
    const result = await __request({
        method: 'POST',
        path: `/project/orderline/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get order line by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectOrderLine successful operation
 * @throws ApiError
 */
public static async projectOrderlineGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectOrderLine> {
    const result = await __request({
        method: 'GET',
        path: `/project/orderline/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update project orderline.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProjectOrderLine successful operation
 * @throws ApiError
 */
public static async projectOrderlinePut({
    id,
    body,
}: {
    id: number,
    body?: ProjectOrderLine,
}
): Promise<ResponseWrapperProjectOrderLine> {
    const result = await __request({
        method: 'PUT',
        path: `/project/orderline/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * Delete order line by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async projectOrderlineDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/orderline/${id}`,
    });
    return result.body;
}

}