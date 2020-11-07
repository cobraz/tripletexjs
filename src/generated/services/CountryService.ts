/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseCountry } from '../models/ListResponseCountry';
import type { ResponseWrapperCountry } from '../models/ResponseWrapperCountry';
import { request as __request } from '../core/request';

export class CountryService {

    /**
     * Find countries corresponding with sent data.
     * @param id List of IDs
     * @param code List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCountry successful operation
     * @throws ApiError
     */
    public static async countrySearch({
        id,
        code,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        code?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseCountry> {
    const result = await __request({
        method: 'GET',
        path: `/country`,
        query: {
            'id': id,
            'code': code,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get country by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCountry successful operation
 * @throws ApiError
 */
public static async countryGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCountry> {
    const result = await __request({
        method: 'GET',
        path: `/country/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}