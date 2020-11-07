/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseVatType } from '../models/ListResponseVatType';
import type { ResponseWrapperVatType } from '../models/ResponseWrapperVatType';
import { request as __request } from '../core/request';

export class LedgerVatTypeService {

    /**
     * Find vat types corresponding with sent data.
     * @param id List of IDs
     * @param number List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseVatType successful operation
     * @throws ApiError
     */
    public static async ledgerVatTypeSearch({
        id,
        number,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        number?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseVatType> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/vatType`,
        query: {
            'id': id,
            'number': number,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get vat type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperVatType successful operation
 * @throws ApiError
 */
public static async ledgerVatTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperVatType> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/vatType/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}