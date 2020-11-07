/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperLoggedInUserInfoDTO } from '../models/ResponseWrapperLoggedInUserInfoDTO';
import type { ResponseWrapperSessionToken } from '../models/ResponseWrapperSessionToken';
import { request as __request } from '../core/request';

export class TokenSessionService {

    /**
     * Create session token.
     * @param consumerToken Token of the API consumer
     * @param employeeToken The employees token
     * @param expirationDate Expiration date for the combined token
     * @result ResponseWrapperSessionToken successful operation
     * @throws ApiError
     */
    public static async tokenSessionCreateCreate({
        consumerToken,
        employeeToken,
        expirationDate,
    }: {
        consumerToken: string,
        employeeToken: string,
        expirationDate: string,
    }
): Promise<ResponseWrapperSessionToken> {
    const result = await __request({
        method: 'PUT',
        path: `/token/session/:create`,
        query: {
            'consumerToken': consumerToken,
            'employeeToken': employeeToken,
            'expirationDate': expirationDate,
        },
    });
    return result.body;
}

/**
 * Find information about the current user.
 * @param fields Fields filter pattern
 * @result ResponseWrapperLoggedInUserInfoDTO successful operation
 * @throws ApiError
 */
public static async tokenSessionWhoAmIWhoAmI({
    fields,
}: {
    fields?: string,
}
): Promise<ResponseWrapperLoggedInUserInfoDTO> {
    const result = await __request({
        method: 'GET',
        path: `/token/session/>whoAmI`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Delete session token.
 * @param token The login token string to delete
 * @result any successful operation
 * @throws ApiError
 */
public static async tokenSessionDelete({
    token,
}: {
    token: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/token/session/${token}`,
    });
    return result.body;
}

}