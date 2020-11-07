/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BankReconciliation } from '../models/BankReconciliation';
import type { BankReconciliationAdjustment } from '../models/BankReconciliationAdjustment';
import type { ListResponseBankReconciliation } from '../models/ListResponseBankReconciliation';
import type { ListResponseBankReconciliationAdjustment } from '../models/ListResponseBankReconciliationAdjustment';
import type { ResponseWrapperBankReconciliation } from '../models/ResponseWrapperBankReconciliation';
import { request as __request } from '../core/request';

export class BankReconciliationService {

    /**
     * [BETA] Find bank reconciliation corresponding with sent data.
     * @param id List of IDs
     * @param accountingPeriodId List of IDs
     * @param accountId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBankReconciliation successful operation
     * @throws ApiError
     */
    public static async bankReconciliationSearch({
        id,
        accountingPeriodId,
        accountId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        accountingPeriodId?: string,
        accountId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseBankReconciliation> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation`,
        query: {
            'id': id,
            'accountingPeriodId': accountingPeriodId,
            'accountId': accountId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Post a bank reconciliation.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperBankReconciliation successfully created
 * @throws ApiError
 */
public static async bankReconciliationPost({
    body,
}: {
    body?: BankReconciliation,
}
): Promise<ResponseWrapperBankReconciliation> {
    const result = await __request({
        method: 'POST',
        path: `/bank/reconciliation`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get last closed reconciliation by account ID.
 * @param accountId Account ID
 * @param after Format is yyyy-MM-dd
 * @param fields Fields filter pattern
 * @result ResponseWrapperBankReconciliation successful operation
 * @throws ApiError
 */
public static async bankReconciliationLastClosedLastClosed({
    accountId,
    after,
    fields,
}: {
    accountId: number,
    after?: string,
    fields?: string,
}
): Promise<ResponseWrapperBankReconciliation> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation/>lastClosed`,
        query: {
            'accountId': accountId,
            'after': after,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get bank reconciliation.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperBankReconciliation successful operation
 * @throws ApiError
 */
public static async bankReconciliationGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperBankReconciliation> {
    const result = await __request({
        method: 'GET',
        path: `/bank/reconciliation/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update a bank reconciliation.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperBankReconciliation successful operation
 * @throws ApiError
 */
public static async bankReconciliationPut({
    id,
    body,
}: {
    id: number,
    body?: BankReconciliation,
}
): Promise<ResponseWrapperBankReconciliation> {
    const result = await __request({
        method: 'PUT',
        path: `/bank/reconciliation/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete bank reconciliation by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async bankReconciliationDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/bank/reconciliation/${id}`,
    });
    return result.body;
}

/**
 * [BETA] Add an adjustment to reconciliation by ID.
 * @param id Element ID
 * @param body Adjustments
 * @result ListResponseBankReconciliationAdjustment successful operation
 * @throws ApiError
 */
public static async bankReconciliationAdjustmentAdjustment({
    id,
    body,
}: {
    id: number,
    body?: Array<BankReconciliationAdjustment>,
}
): Promise<ListResponseBankReconciliationAdjustment> {
    const result = await __request({
        method: 'PUT',
        path: `/bank/reconciliation/${id}/:adjustment`,
        body: body,
    });
    return result.body;
}

}