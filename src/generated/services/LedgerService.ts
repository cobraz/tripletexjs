/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseLedgerAccount } from '../models/ListResponseLedgerAccount';
import { request as __request } from '../core/request';

export class LedgerService {

    /**
     * Get ledger (hovedbok).
     * @param dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param dateTo Format is yyyy-MM-dd (to and excl.).
     * @param openPostings Deprecated
     * @param accountId Element ID
     * @param supplierId Element ID
     * @param customerId Element ID
     * @param employeeId Element ID
     * @param departmentId Element ID
     * @param projectId Element ID
     * @param productId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseLedgerAccount successful operation
     * @throws ApiError
     */
    public static async ledgerSearch({
        dateFrom,
        dateTo,
        openPostings,
        accountId,
        supplierId,
        customerId,
        employeeId,
        departmentId,
        projectId,
        productId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        openPostings?: string,
        accountId?: number,
        supplierId?: number,
        customerId?: number,
        employeeId?: number,
        departmentId?: number,
        projectId?: number,
        productId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseLedgerAccount> {
    const result = await __request({
        method: 'GET',
        path: `/ledger`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'openPostings': openPostings,
            'accountId': accountId,
            'supplierId': supplierId,
            'customerId': customerId,
            'employeeId': employeeId,
            'departmentId': departmentId,
            'projectId': projectId,
            'productId': productId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find open posts corresponding with sent data.
 * @param date Invoice date. Format is yyyy-MM-dd (to and excl.).
 * @param accountId Element ID
 * @param supplierId Element ID
 * @param customerId Element ID
 * @param employeeId Element ID
 * @param departmentId Element ID
 * @param projectId Element ID
 * @param productId Element ID
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseLedgerAccount successful operation
 * @throws ApiError
 */
public static async ledgerOpenPostOpenPost({
    date,
    accountId,
    supplierId,
    customerId,
    employeeId,
    departmentId,
    projectId,
    productId,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    date: string,
    accountId?: number,
    supplierId?: number,
    customerId?: number,
    employeeId?: number,
    departmentId?: number,
    projectId?: number,
    productId?: number,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseLedgerAccount> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/openPost`,
        query: {
            'date': date,
            'accountId': accountId,
            'supplierId': supplierId,
            'customerId': customerId,
            'employeeId': employeeId,
            'departmentId': departmentId,
            'projectId': projectId,
            'productId': productId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

}