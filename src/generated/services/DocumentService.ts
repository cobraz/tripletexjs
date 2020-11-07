/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperDocument } from '../models/ResponseWrapperDocument';
import { request as __request } from '../core/request';

export class DocumentService {

    /**
     * [BETA] Get document by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     * @result ResponseWrapperDocument successful operation
     * @throws ApiError
     */
    public static async documentGet({
        id,
        fields,
    }: {
        id: number,
        fields?: string,
    }
): Promise<ResponseWrapperDocument> {
    const result = await __request({
        method: 'GET',
        path: `/document/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get content of document given by ID.
 * @param id ID of document to download content from.
 * @result string successful operation
 * @throws ApiError
 */
public static async documentContentDownloadContent({
    id,
}: {
    id: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/document/${id}/content`,
    });
    return result.body;
}

}