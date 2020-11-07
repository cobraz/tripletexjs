/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseAnnualAccount } from '../models/ListResponseAnnualAccount';
import type { ResponseWrapperAnnualAccount } from '../models/ResponseWrapperAnnualAccount';
import { request as __request } from '../core/request';

export class LedgerAnnualAccountService {

    /**
     * Find annual accounts corresponding with sent data.
     * @param id List of IDs
     * @param yearFrom From and including
     * @param yearTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseAnnualAccount successful operation
     * @throws ApiError
     */
    public static async ledgerAnnualAccountSearch({
        id,
        yearFrom,
        yearTo,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        yearFrom?: number,
        yearTo?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseAnnualAccount> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/annualAccount`,
        query: {
            'id': id,
            'yearFrom': yearFrom,
            'yearTo': yearTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get annual account by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperAnnualAccount successful operation
 * @throws ApiError
 */
public static async ledgerAnnualAccountGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperAnnualAccount> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/annualAccount/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}