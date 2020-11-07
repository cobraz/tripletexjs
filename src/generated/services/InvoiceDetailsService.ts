/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectInvoiceDetails } from '../models/ListResponseProjectInvoiceDetails';
import type { ResponseWrapperProjectInvoiceDetails } from '../models/ResponseWrapperProjectInvoiceDetails';
import { request as __request } from '../core/request';

export class InvoiceDetailsService {

    /**
     * Find ProjectInvoiceDetails corresponding with sent data.
     * @param invoiceDateFrom From and including
     * @param invoiceDateTo To and excluding
     * @param id List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProjectInvoiceDetails successful operation
     * @throws ApiError
     */
    public static async invoiceDetailsSearch({
        invoiceDateFrom,
        invoiceDateTo,
        id,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        invoiceDateFrom: string,
        invoiceDateTo: string,
        id?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProjectInvoiceDetails> {
    const result = await __request({
        method: 'GET',
        path: `/invoice/details`,
        query: {
            'invoiceDateFrom': invoiceDateFrom,
            'invoiceDateTo': invoiceDateTo,
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
 * Get ProjectInvoiceDetails by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectInvoiceDetails successful operation
 * @throws ApiError
 */
public static async invoiceDetailsGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectInvoiceDetails> {
    const result = await __request({
        method: 'GET',
        path: `/invoice/details/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}