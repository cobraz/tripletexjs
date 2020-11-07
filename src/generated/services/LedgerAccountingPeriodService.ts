/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseAccountingPeriod } from '../models/ListResponseAccountingPeriod';
import type { ResponseWrapperAccountingPeriod } from '../models/ResponseWrapperAccountingPeriod';
import { request as __request } from '../core/request';

export class LedgerAccountingPeriodService {

    /**
     * Find accounting periods corresponding with sent data.
     * @param id List of IDs
     * @param numberFrom From and including
     * @param numberTo To and excluding
     * @param startFrom From and including
     * @param startTo To and excluding
     * @param endFrom From and including
     * @param endTo To and excluding
     * @param count Number of elements to return
     * @param from From index
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseAccountingPeriod successful operation
     * @throws ApiError
     */
    public static async ledgerAccountingPeriodSearch({
        id,
        numberFrom,
        numberTo,
        startFrom,
        startTo,
        endFrom,
        endTo,
        count = 1400,
        from,
        sorting,
        fields,
    }: {
        id?: string,
        numberFrom?: number,
        numberTo?: number,
        startFrom?: string,
        startTo?: string,
        endFrom?: string,
        endTo?: string,
        count?: number,
        from?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseAccountingPeriod> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/accountingPeriod`,
        query: {
            'id': id,
            'numberFrom': numberFrom,
            'numberTo': numberTo,
            'startFrom': startFrom,
            'startTo': startTo,
            'endFrom': endFrom,
            'endTo': endTo,
            'count': count,
            'from': from,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get accounting period by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperAccountingPeriod successful operation
 * @throws ApiError
 */
public static async ledgerAccountingPeriodGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperAccountingPeriod> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/accountingPeriod/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}