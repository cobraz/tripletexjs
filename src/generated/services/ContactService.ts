/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contact } from '../models/Contact';
import type { ListResponseContact } from '../models/ListResponseContact';
import type { ResponseWrapperContact } from '../models/ResponseWrapperContact';
import { request as __request } from '../core/request';

export class ContactService {

    /**
     * Find contacts corresponding with sent data.
     * @param id List of IDs
     * @param firstName Containing
     * @param lastName Containing
     * @param email Containing
     * @param customerId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseContact successful operation
     * @throws ApiError
     */
    public static async contactSearch({
        id,
        firstName,
        lastName,
        email,
        customerId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        customerId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseContact> {
    const result = await __request({
        method: 'GET',
        path: `/contact`,
        query: {
            'id': id,
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'customerId': customerId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create contact.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperContact successfully created
 * @throws ApiError
 */
public static async contactPost({
    body,
}: {
    body?: Contact,
}
): Promise<ResponseWrapperContact> {
    const result = await __request({
        method: 'POST',
        path: `/contact`,
        body: body,
    });
    return result.body;
}

/**
 * Get contact by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperContact successful operation
 * @throws ApiError
 */
public static async contactGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperContact> {
    const result = await __request({
        method: 'GET',
        path: `/contact/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update contact.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperContact successful operation
 * @throws ApiError
 */
public static async contactPut({
    id,
    body,
}: {
    id: number,
    body?: Contact,
}
): Promise<ResponseWrapperContact> {
    const result = await __request({
        method: 'PUT',
        path: `/contact/${id}`,
        body: body,
    });
    return result.body;
}

}