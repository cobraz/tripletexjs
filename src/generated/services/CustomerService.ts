/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Customer } from '../models/Customer';
import type { ListResponseCustomer } from '../models/ListResponseCustomer';
import type { ResponseWrapperCustomer } from '../models/ResponseWrapperCustomer';
import { request as __request } from '../core/request';

export class CustomerService {

    /**
     * Find customers corresponding with sent data.
     * @param id List of IDs
     * @param customerAccountNumber List of IDs
     * @param organizationNumber Equals
     * @param email Equals
     * @param invoiceEmail Equals
     * @param isInactive Equals
     * @param accountManagerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCustomer successful operation
     * @throws ApiError
     */
    public static async customerSearch({
        id,
        customerAccountNumber,
        organizationNumber,
        email,
        invoiceEmail,
        isInactive = false,
        accountManagerId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        customerAccountNumber?: string,
        organizationNumber?: string,
        email?: string,
        invoiceEmail?: string,
        isInactive?: boolean,
        accountManagerId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseCustomer> {
    const result = await __request({
        method: 'GET',
        path: `/customer`,
        query: {
            'id': id,
            'customerAccountNumber': customerAccountNumber,
            'organizationNumber': organizationNumber,
            'email': email,
            'invoiceEmail': invoiceEmail,
            'isInactive': isInactive,
            'accountManagerId': accountManagerId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create customer. Related customer addresses may also be created.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperCustomer successfully created
 * @throws ApiError
 */
public static async customerPost({
    body,
}: {
    body?: Customer,
}
): Promise<ResponseWrapperCustomer> {
    const result = await __request({
        method: 'POST',
        path: `/customer`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple customers. Related supplier addresses may also be created.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseCustomer successfully created
 * @throws ApiError
 */
public static async customerListPostList({
    body,
}: {
    body?: Array<Customer>,
}
): Promise<ListResponseCustomer> {
    const result = await __request({
        method: 'POST',
        path: `/customer/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple customers. Addresses can also be updated.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseCustomer successful operation
 * @throws ApiError
 */
public static async customerListPutList({
    body,
}: {
    body?: Array<Customer>,
}
): Promise<ListResponseCustomer> {
    const result = await __request({
        method: 'PUT',
        path: `/customer/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get customer by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCustomer successful operation
 * @throws ApiError
 */
public static async customerGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCustomer> {
    const result = await __request({
        method: 'GET',
        path: `/customer/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update customer.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperCustomer successful operation
 * @throws ApiError
 */
public static async customerPut({
    id,
    body,
}: {
    id: number,
    body?: Customer,
}
): Promise<ResponseWrapperCustomer> {
    const result = await __request({
        method: 'PUT',
        path: `/customer/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete customer by ID
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async customerDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/customer/${id}`,
    });
    return result.body;
}

}