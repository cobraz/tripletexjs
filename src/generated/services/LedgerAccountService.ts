/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { ListResponseAccount } from '../models/ListResponseAccount';
import type { ResponseWrapperAccount } from '../models/ResponseWrapperAccount';
import { request as __request } from '../core/request';

export class LedgerAccountService {

    /**
     * Find accounts corresponding with sent data.
     * @param id List of IDs
     * @param number List of IDs
     * @param isBankAccount Equals
     * @param isInactive Equals
     * @param isApplicableForSupplierInvoice Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseAccount successful operation
     * @throws ApiError
     */
    public static async ledgerAccountSearch({
        id,
        number,
        isBankAccount,
        isInactive,
        isApplicableForSupplierInvoice,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        number?: string,
        isBankAccount?: boolean,
        isInactive?: boolean,
        isApplicableForSupplierInvoice?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseAccount> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/account`,
        query: {
            'id': id,
            'number': number,
            'isBankAccount': isBankAccount,
            'isInactive': isInactive,
            'isApplicableForSupplierInvoice': isApplicableForSupplierInvoice,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create a new account.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperAccount successfully created
 * @throws ApiError
 */
public static async ledgerAccountPost({
    body,
}: {
    body?: Account,
}
): Promise<ResponseWrapperAccount> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/account`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create several accounts.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseAccount successfully created
 * @throws ApiError
 */
public static async ledgerAccountListPostList({
    body,
}: {
    body?: Array<Account>,
}
): Promise<ListResponseAccount> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/account/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple accounts.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseAccount successful operation
 * @throws ApiError
 */
public static async ledgerAccountListPutList({
    body,
}: {
    body?: Array<Account>,
}
): Promise<ListResponseAccount> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/account/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete multiple accounts.
 * @param ids ID of the elements
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerAccountListDeleteByIds({
    ids,
}: {
    ids: string,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/ledger/account/list`,
        query: {
            'ids': ids,
        },
    });
    return result.body;
}

/**
 * Get account by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperAccount successful operation
 * @throws ApiError
 */
public static async ledgerAccountGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperAccount> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/account/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update account.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperAccount successful operation
 * @throws ApiError
 */
public static async ledgerAccountPut({
    id,
    body,
}: {
    id: number,
    body?: Account,
}
): Promise<ResponseWrapperAccount> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/account/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete account.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerAccountDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/ledger/account/${id}`,
    });
    return result.body;
}

}