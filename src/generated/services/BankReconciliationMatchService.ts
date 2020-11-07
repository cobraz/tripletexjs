/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankReconciliationMatch } from '../models/BankReconciliationMatch';
import type { ListResponseBankReconciliationMatch } from '../models/ListResponseBankReconciliationMatch';
import type { ResponseWrapperBankReconciliationMatch } from '../models/ResponseWrapperBankReconciliationMatch';
import { request as __request } from '../core/request';

export class BankReconciliationMatchService {

    /**
     * [BETA] Find bank reconciliation match corresponding with sent data.
     * @param id List of IDs
     * @param bankReconciliationId List of bank reconciliation IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBankReconciliationMatch successful operation
     * @throws ApiError
     */
    public static async bankReconciliationMatchSearch({
        id,
        bankReconciliationId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        bankReconciliationId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseBankReconciliationMatch> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation/match`,
        query: {
            'id': id,
            'bankReconciliationId': bankReconciliationId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create a bank reconciliation match.
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperBankReconciliationMatch successfully created
 * @throws ApiError
 */
public static async bankReconciliationMatchPost({
    body,
}: {
    body?: BankReconciliationMatch,
}
): Promise<ResponseWrapperBankReconciliationMatch> {
    const result = await __request({
        method: 'POST',
        path: `/bank/reconciliation/match`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Suggest matches for a bank reconciliation by ID.
 * @param bankReconciliationId Element ID
 * @result ListResponseBankReconciliationMatch successful operation
 * @throws ApiError
 */
public static async bankReconciliationMatchSuggestSuggest({
    bankReconciliationId,
}: {
    bankReconciliationId: number,
}
): Promise<ListResponseBankReconciliationMatch> {
    const result = await __request({
        method: 'PUT',
        path: `/bank/reconciliation/match/:suggest`,
        query: {
            'bankReconciliationId': bankReconciliationId,
        },
    });
    return result.body;
}

/**
 * [BETA] Get bank reconciliation match by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperBankReconciliationMatch successful operation
 * @throws ApiError
 */
public static async bankReconciliationMatchGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperBankReconciliationMatch> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation/match/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update a bank reconciliation match by ID.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperBankReconciliationMatch successful operation
 * @throws ApiError
 */
public static async bankReconciliationMatchPut({
    id,
    body,
}: {
    id: number,
    body?: BankReconciliationMatch,
}
): Promise<ResponseWrapperBankReconciliationMatch> {
    const result = await __request({
        method: 'PUT',
        path: `/bank/reconciliation/match/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete a bank reconciliation match by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async bankReconciliationMatchDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/bank/reconciliation/match/${id}`,
    });
    return result.body;
}

}