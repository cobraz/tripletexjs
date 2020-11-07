/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseBank } from '../models/ListResponseBank';
import type { ResponseWrapperBank } from '../models/ResponseWrapperBank';
import { request as __request } from '../core/request';

export class BankService {

    /**
     * [BETA] Find bank corresponding with sent data.
     * @param id List of IDs
     * @param registerNumbers Bank register number (four digits)
     * @param isBankReconciliationSupport Equals
     * @param isAutoPaySupported Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBank successful operation
     * @throws ApiError
     */
    public static async bankSearch({
        id,
        registerNumbers,
        isBankReconciliationSupport,
        isAutoPaySupported,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        registerNumbers?: string,
        isBankReconciliationSupport?: boolean,
        isAutoPaySupported?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseBank> {
    const result = await __request({
        method: 'GET',
        path: `/bank`,
        query: {
            'id': id,
            'registerNumbers': registerNumbers,
            'isBankReconciliationSupport': isBankReconciliationSupport,
            'isAutoPaySupported': isAutoPaySupported,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get bank.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperBank successful operation
 * @throws ApiError
 */
public static async bankGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperBank> {
    const result = await __request({
        method: 'GET',
        path: `/bank/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}