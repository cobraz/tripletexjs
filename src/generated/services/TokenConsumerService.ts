/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperConsumerToken } from '../models/ResponseWrapperConsumerToken';
import { request as __request } from '../core/request';

export class TokenConsumerService {

    /**
     * Get consumer token by token string.
     * @param token Element ID
     * @param fields Fields filter pattern
     * @result ResponseWrapperConsumerToken successful operation
     * @throws ApiError
     */
    public static async tokenConsumerByTokenGetByToken({
        token,
        fields,
    }: {
        token: string,
        fields?: string,
    }
): Promise<ResponseWrapperConsumerToken> {
    const result = await __request({
        method: 'GET',
        path: `/token/consumer/byToken`,
        query: {
            'token': token,
            'fields': fields,
        },
    });
    return result.body;
}

}