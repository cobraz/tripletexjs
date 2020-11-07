/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTask } from '../models/ListResponseTask';
import { request as __request } from '../core/request';

export class ProjectTaskService {

    /**
     * Find all tasks for project.
     * @param projectId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTask successful operation
     * @throws ApiError
     */
    public static async projectTaskSearch({
        projectId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        projectId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTask> {
    const result = await __request({
        method: 'GET',
        path: `/project/task`,
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

}