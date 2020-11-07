/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseSupplier } from '../models/ListResponseSupplier';
import type { ResponseWrapperSupplier } from '../models/ResponseWrapperSupplier';
import type { Supplier } from '../models/Supplier';
import { request as __request } from '../core/request';

export class SupplierService {

    /**
     * Find suppliers corresponding with sent data.
     * @param id List of IDs
     * @param supplierNumber List of IDs
     * @param organizationNumber Equals
     * @param email Equals
     * @param invoiceEmail Equals
     * @param isInactive Equals
     * @param accountManagerId List of IDs
     * @param changedSince Only return elements that have changed since this date and time
     * @param isWholesaler Equals
     * @param showProducts Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseSupplier successful operation
     * @throws ApiError
     */
    public static async supplierSearch({
        id,
        supplierNumber,
        organizationNumber,
        email,
        invoiceEmail,
        isInactive = false,
        accountManagerId,
        changedSince,
        isWholesaler,
        showProducts,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        supplierNumber?: string,
        organizationNumber?: string,
        email?: string,
        invoiceEmail?: string,
        isInactive?: boolean,
        accountManagerId?: string,
        changedSince?: string,
        isWholesaler?: boolean,
        showProducts?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseSupplier> {
    const result = await __request({
        method: 'GET',
        path: `/supplier`,
        query: {
            'id': id,
            'supplierNumber': supplierNumber,
            'organizationNumber': organizationNumber,
            'email': email,
            'invoiceEmail': invoiceEmail,
            'isInactive': isInactive,
            'accountManagerId': accountManagerId,
            'changedSince': changedSince,
            'isWholesaler': isWholesaler,
            'showProducts': showProducts,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create supplier. Related supplier addresses may also be created.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperSupplier successfully created
 * @throws ApiError
 */
public static async supplierPost({
    body,
}: {
    body?: Supplier,
}
): Promise<ResponseWrapperSupplier> {
    const result = await __request({
        method: 'POST',
        path: `/supplier`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Create multiple suppliers. Related supplier addresses may also be created.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseSupplier successfully created
 * @throws ApiError
 */
public static async supplierListPostList({
    body,
}: {
    body?: Array<Supplier>,
}
): Promise<ListResponseSupplier> {
    const result = await __request({
        method: 'POST',
        path: `/supplier/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update multiple suppliers. Addresses can also be updated.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseSupplier successful operation
 * @throws ApiError
 */
public static async supplierListPutList({
    body,
}: {
    body?: Array<Supplier>,
}
): Promise<ListResponseSupplier> {
    const result = await __request({
        method: 'PUT',
        path: `/supplier/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get supplier by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperSupplier successful operation
 * @throws ApiError
 */
public static async supplierGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperSupplier> {
    const result = await __request({
        method: 'GET',
        path: `/supplier/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update supplier.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperSupplier successful operation
 * @throws ApiError
 */
public static async supplierPut({
    id,
    body,
}: {
    id: number,
    body?: Supplier,
}
): Promise<ResponseWrapperSupplier> {
    const result = await __request({
        method: 'PUT',
        path: `/supplier/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete supplier by ID
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async supplierDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/supplier/${id}`,
    });
    return result.body;
}

}