/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseBankReconciliationPaymentType } from '../models/ListResponseBankReconciliationPaymentType';
import type { ResponseWrapperBankReconciliationPaymentType } from '../models/ResponseWrapperBankReconciliationPaymentType';
import { request as __request } from '../core/request';

export class BankReconciliationPaymentTypeService {

    /**
     * [BETA] Find payment type corresponding with sent data.
     * @param id List of IDs
     * @param description Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBankReconciliationPaymentType successful operation
     * @throws ApiError
     */
    public static async bankReconciliationPaymentTypeSearch({
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
): Promise<ListResponseBankReconciliationPaymentType> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation/paymentType`,
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
 * [BETA] Get payment type by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperBankReconciliationPaymentType successful operation
 * @throws ApiError
 */
public static async bankReconciliationPaymentTypeGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperBankReconciliationPaymentType> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation/paymentType/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}