/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseTransportType } from '../models/ListResponseTransportType';
import type { ResponseWrapperTransportType } from '../models/ResponseWrapperTransportType';
import { request as __request } from '../core/request';

export class TransportTypeService {

    /**
     *  [BETA] Search transport type.
     * @param supplierId List of valid suppliers ids.
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTransportType successful operation
     * @throws ApiError
     */
    public static async transportTypeSearch({
        supplierId,
        name,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        supplierId?: Array<number>,
        name?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTransportType> {
    const result = await __request({
        method: 'GET',
        path: `/transportType`,
        query: {
            'supplierId': supplierId,
            'name': name,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 *  [BETA] Find transport type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTransportType successful operation
 * @throws ApiError
 */
public static async transportTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTransportType> {
    const result = await __request({
        method: 'GET',
        path: `/transportType/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}