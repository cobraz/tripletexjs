/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectParticipant } from '../models/ListResponseProjectParticipant';
import type { ProjectParticipant } from '../models/ProjectParticipant';
import type { ResponseWrapperProjectParticipant } from '../models/ResponseWrapperProjectParticipant';
import { request as __request } from '../core/request';

export class ProjectParticipantService {

    /**
     * [BETA] Add new project participant.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @result ResponseWrapperProjectParticipant successfully created
     * @throws ApiError
     */
    public static async projectParticipantPost({
        body,
    }: {
        body?: ProjectParticipant,
    }
): Promise<ResponseWrapperProjectParticipant> {
    const result = await __request({
        method: 'POST',
        path: `/project/participant`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Add new project participant. Multiple project participants can be sent in the same request.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProjectParticipant successfully created
 * @throws ApiError
 */
public static async projectParticipantListPostList({
    body,
}: {
    body?: Array<ProjectParticipant>,
}
): Promise<ListResponseProjectParticipant> {
    const result = await __request({
        method: 'POST',
        path: `/project/participant/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete project participants.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async projectParticipantListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/project/participant/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * [BETA] Find project participant by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectParticipant successful operation
 * @throws ApiError
 */
public static async projectParticipantGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectParticipant> {
    const result = await __request({
        method: 'GET',
        path: `/project/participant/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update project participant.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProjectParticipant successful operation
 * @throws ApiError
 */
public static async projectParticipantPut({
    id,
    body,
}: {
    id: number,
    body?: ProjectParticipant,
}
): Promise<ResponseWrapperProjectParticipant> {
    const result = await __request({
        method: 'PUT',
        path: `/project/participant/${id}`,
        body: body,
    });
    return result.body;
}

}