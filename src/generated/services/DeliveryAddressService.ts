/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryAddress } from '../models/DeliveryAddress';
import type { ListResponseDeliveryAddress } from '../models/ListResponseDeliveryAddress';
import type { ResponseWrapperDeliveryAddress } from '../models/ResponseWrapperDeliveryAddress';
import { request as __request } from '../core/request';

export class DeliveryAddressService {

    /**
     * Find addresses corresponding with sent data.
     * @param id List of IDs
     * @param addressLine1 List of IDs
     * @param addressLine2 List of IDs
     * @param postalCode List of IDs
     * @param city List of IDs
     * @param name List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseDeliveryAddress successful operation
     * @throws ApiError
     */
    public static async deliveryAddressSearch({
        id,
        addressLine1,
        addressLine2,
        postalCode,
        city,
        name,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        addressLine1?: string,
        addressLine2?: string,
        postalCode?: string,
        city?: string,
        name?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseDeliveryAddress> {
    const result = await __request({
        method: 'GET',
        path: `/deliveryAddress`,
        query: {
            'id': id,
            'addressLine1': addressLine1,
            'addressLine2': addressLine2,
            'postalCode': postalCode,
            'city': city,
            'name': name,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get address by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperDeliveryAddress successful operation
 * @throws ApiError
 */
public static async deliveryAddressGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperDeliveryAddress> {
    const result = await __request({
        method: 'GET',
        path: `/deliveryAddress/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update address.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperDeliveryAddress successful operation
 * @throws ApiError
 */
public static async deliveryAddressPut({
    id,
    body,
}: {
    id: number,
    body?: DeliveryAddress,
}
): Promise<ResponseWrapperDeliveryAddress> {
    const result = await __request({
        method: 'PUT',
        path: `/deliveryAddress/${id}`,
        body: body,
    });
    return result.body;
}

}