/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseCloseGroup } from '../models/ListResponseCloseGroup';
import type { ResponseWrapperCloseGroup } from '../models/ResponseWrapperCloseGroup';
import { request as __request } from '../core/request';

export class LedgerCloseGroupService {

    /**
     * Find close groups corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCloseGroup successful operation
     * @throws ApiError
     */
    public static async ledgerCloseGroupSearch({
        dateFrom,
        dateTo,
        id,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        id?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseCloseGroup> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/closeGroup`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'id': id,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get close group by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCloseGroup successful operation
 * @throws ApiError
 */
public static async ledgerCloseGroupGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCloseGroup> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/closeGroup/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}