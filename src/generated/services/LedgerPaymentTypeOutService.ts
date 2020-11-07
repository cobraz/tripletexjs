/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePaymentTypeOut } from '../models/ListResponsePaymentTypeOut';
import type { PaymentTypeOut } from '../models/PaymentTypeOut';
import type { ResponseWrapperPaymentTypeOut } from '../models/ResponseWrapperPaymentTypeOut';
import { request as __request } from '../core/request';

export class LedgerPaymentTypeOutService {

    /**
     * [BETA] Gets payment types for outgoing payments
     * This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI
     * @param id List of IDs
     * @param description Containing
     * @param isInactive Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePaymentTypeOut successful operation
     * @throws ApiError
     */
    public static async ledgerPaymentTypeOutSearch({
        id,
        description,
        isInactive,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        description?: string,
        isInactive?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePaymentTypeOut> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/paymentTypeOut`,
        query: {
            'id': id,
            'description': description,
            'isInactive': isInactive,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create new payment type for outgoing payments
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperPaymentTypeOut successfully created
 * @throws ApiError
 */
public static async ledgerPaymentTypeOutPost({
    body,
}: {
    body?: PaymentTypeOut,
}
): Promise<ResponseWrapperPaymentTypeOut> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/paymentTypeOut`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple payment types for outgoing payments at once
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponsePaymentTypeOut successfully created
 * @throws ApiError
 */
public static async ledgerPaymentTypeOutListPostList({
    body,
}: {
    body?: Array<PaymentTypeOut>,
}
): Promise<ListResponsePaymentTypeOut> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/paymentTypeOut/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple payment types for outgoing payments at once
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponsePaymentTypeOut successful operation
 * @throws ApiError
 */
public static async ledgerPaymentTypeOutListPutList({
    body,
}: {
    body?: Array<PaymentTypeOut>,
}
): Promise<ListResponsePaymentTypeOut> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/paymentTypeOut/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get payment type for outgoing payments by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPaymentTypeOut successful operation
 * @throws ApiError
 */
public static async ledgerPaymentTypeOutGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPaymentTypeOut> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/paymentTypeOut/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update existing payment type for outgoing payments
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperPaymentTypeOut successful operation
 * @throws ApiError
 */
public static async ledgerPaymentTypeOutPut({
    id,
    body,
}: {
    id: number,
    body?: PaymentTypeOut,
}
): Promise<ResponseWrapperPaymentTypeOut> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/paymentTypeOut/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete payment type for outgoing payments by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerPaymentTypeOutDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/ledger/paymentTypeOut/${id}`,
    });
    return result.body;
}

}