/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseBankTransaction } from '../models/ListResponseBankTransaction';
import type { ResponseWrapperBankTransaction } from '../models/ResponseWrapperBankTransaction';
import type { ResponseWrapperObject } from '../models/ResponseWrapperObject';
import { request as __request } from '../core/request';

export class BankStatementTransactionService {

    /**
     * [BETA] Find bank transaction corresponding with sent data.
     * @param bankStatementId Bank statement ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBankTransaction successful operation
     * @throws ApiError
     */
    public static async bankStatementTransactionSearch({
        bankStatementId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        bankStatementId: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseBankTransaction> {
    const result = await __request({
        method: 'GET',
        path: `/bank/statement/transaction`,
        query: {
            'bankStatementId': bankStatementId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get bank transaction by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperBankTransaction successful operation
 * @throws ApiError
 */
public static async bankStatementTransactionGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperBankTransaction> {
    const result = await __request({
        method: 'GET',
        path: `/bank/statement/transaction/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get additional details about transaction by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperObject successful operation
 * @throws ApiError
 */
public static async bankStatementTransactionDetailsGetDetails({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperObject> {
    const result = await __request({
        method: 'GET',
        path: `/bank/statement/transaction/${id}/details`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}