/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseVoucherType } from '../models/ListResponseVoucherType';
import type { ResponseWrapperVoucherType } from '../models/ResponseWrapperVoucherType';
import { request as __request } from '../core/request';

export class LedgerVoucherTypeService {

    /**
     * Find voucher types corresponding with sent data.
     * @param name Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseVoucherType successful operation
     * @throws ApiError
     */
    public static async ledgerVoucherTypeSearch({
        name,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        name?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseVoucherType> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucherType`,
        query: {
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
 * Get voucher type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperVoucherType successful operation
 * @throws ApiError
 */
public static async ledgerVoucherTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperVoucherType> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucherType/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}