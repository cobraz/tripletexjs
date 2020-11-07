/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperVoucherApprovalListElement } from '../models/ResponseWrapperVoucherApprovalListElement';
import { request as __request } from '../core/request';

export class VoucherApprovalListElementService {

    /**
     * [BETA] Get by ID.
     * @param id Element ID
     * @param fields Fields filter pattern
     * @result ResponseWrapperVoucherApprovalListElement successful operation
     * @throws ApiError
     */
    public static async voucherApprovalListElementGet({
        id,
        fields,
    }: {
        id: number,
        fields?: string,
    }
): Promise<ResponseWrapperVoucherApprovalListElement> {
    const result = await __request({
        method: 'GET',
        path: `/voucherApprovalListElement/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}