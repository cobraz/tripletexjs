/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperEventInfoDTO } from '../models/ResponseWrapperEventInfoDTO';
import type { ResponseWrapperMapStringEventInfoDescription } from '../models/ResponseWrapperMapStringEventInfoDescription';
import { request as __request } from '../core/request';

export class EventService {

    /**
     * [BETA] Get all (WebHook) event keys.
     * @param fields Fields filter pattern
     * @result ResponseWrapperMapStringEventInfoDescription successful operation
     * @throws ApiError
     */
    public static async eventGet({
        fields,
    }: {
        fields?: string,
    }
): Promise<ResponseWrapperMapStringEventInfoDescription> {
    const result = await __request({
        method: 'GET',
        path: `/event`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get example webhook payload
 * @param eventType Event type, from /event endpoint
 * @param fields Fields filter pattern
 * @result ResponseWrapperEventInfoDTO successful operation
 * @throws ApiError
 */
public static async eventExample({
    eventType,
    fields,
}: {
    eventType: string,
    fields?: string,
}
): Promise<ResponseWrapperEventInfoDTO> {
    const result = await __request({
        method: 'GET',
        path: `/event/${eventType}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}