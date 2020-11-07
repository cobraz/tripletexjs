/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Division } from '../models/Division';
import type { ListResponseDivision } from '../models/ListResponseDivision';
import type { ResponseWrapperDivision } from '../models/ResponseWrapperDivision';
import { request as __request } from '../core/request';

export class DivisionService {

    /**
     * [BETA] Get divisions.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseDivision successful operation
     * @throws ApiError
     */
    public static async divisionSearch({
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
): Promise<ListResponseDivision> {
    const result = await __request({
        method: 'GET',
        path: `/division`,
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
 * [BETA] Create division.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperDivision successfully created
 * @throws ApiError
 */
public static async divisionPost({
    body,
}: {
    body?: Division,
}
): Promise<ResponseWrapperDivision> {
    const result = await __request({
        method: 'POST',
        path: `/division`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create divisions.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseDivision successfully created
 * @throws ApiError
 */
public static async divisionListPostList({
    body,
}: {
    body?: Array<Division>,
}
): Promise<ListResponseDivision> {
    const result = await __request({
        method: 'POST',
        path: `/division/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple divisions.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseDivision successful operation
 * @throws ApiError
 */
public static async divisionListPutList({
    body,
}: {
    body?: Array<Division>,
}
): Promise<ListResponseDivision> {
    const result = await __request({
        method: 'PUT',
        path: `/division/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update division information.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperDivision successful operation
 * @throws ApiError
 */
public static async divisionPut({
    id,
    body,
}: {
    id: number,
    body?: Division,
}
): Promise<ResponseWrapperDivision> {
    const result = await __request({
        method: 'PUT',
        path: `/division/${id}`,
        body: body,
    });
    return result.body;
}

}