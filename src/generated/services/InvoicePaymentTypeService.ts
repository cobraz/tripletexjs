/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePaymentType } from '../models/ListResponsePaymentType';
import type { ResponseWrapperPaymentType } from '../models/ResponseWrapperPaymentType';
import { request as __request } from '../core/request';

export class InvoicePaymentTypeService {

    /**
     * Find payment type corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePaymentType successful operation
     * @throws ApiError
     */
    public static async invoicePaymentTypeSearch({
        id,
        description,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        description?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePaymentType> {
    const result = await __request({
        method: 'GET',
        path: `/invoice/paymentType`,
        query: {
            'id': id,
            'description': description,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get payment type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPaymentType successful operation
 * @throws ApiError
 */
public static async invoicePaymentTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPaymentType> {
    const result = await __request({
        method: 'GET',
        path: `/invoice/paymentType/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}