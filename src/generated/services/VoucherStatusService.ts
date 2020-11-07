/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseVoucherStatus } from '../models/ListResponseVoucherStatus';
import type { ResponseWrapperVoucherStatus } from '../models/ResponseWrapperVoucherStatus';
import type { VoucherStatus } from '../models/VoucherStatus';
import { request as __request } from '../core/request';

export class VoucherStatusService {

    /**
     * [BETA] Find voucherStatus corresponding with sent data. The voucherStatus is used to coordinate integration processes. Requires setup done by Tripletex, currently supports debt collection.
     * @param ids List of IDs
     * @param voucherIds List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseVoucherStatus successful operation
     * @throws ApiError
     */
    public static async voucherStatusSearch({
        ids,
        voucherIds,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        ids?: string,
        voucherIds?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseVoucherStatus> {
    const result = await __request({
        method: 'GET',
        path: `/voucherStatus`,
        query: {
            'ids': ids,
            'voucherIds': voucherIds,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Post new voucherStatus.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperVoucherStatus successfully created
 * @throws ApiError
 */
public static async voucherStatusPost({
    body,
}: {
    body?: VoucherStatus,
}
): Promise<ResponseWrapperVoucherStatus> {
    const result = await __request({
        method: 'POST',
        path: `/voucherStatus`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get voucherStatus by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperVoucherStatus successful operation
 * @throws ApiError
 */
public static async voucherStatusGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperVoucherStatus> {
    const result = await __request({
        method: 'GET',
        path: `/voucherStatus/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}