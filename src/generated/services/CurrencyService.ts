/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseCurrency } from '../models/ListResponseCurrency';
import type { ResponseWrapperCurrency } from '../models/ResponseWrapperCurrency';
import type { ResponseWrapperCurrencyExchangeRate } from '../models/ResponseWrapperCurrencyExchangeRate';
import { request as __request } from '../core/request';

export class CurrencyService {

    /**
     * Find currencies corresponding with sent data.
     * @param id List of IDs
     * @param code Currency codes
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseCurrency successful operation
     * @throws ApiError
     */
    public static async currencySearch({
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
): Promise<ListResponseCurrency> {
    const result = await __request({
        method: 'GET',
        path: `/currency`,
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
 * Get currency by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCurrency successful operation
 * @throws ApiError
 */
public static async currencyGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCurrency> {
    const result = await __request({
        method: 'GET',
        path: `/currency/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find currency exchange rate corresponding with sent data.
 * @param id Currency id
 * @param date Format is yyyy-MM-dd
 * @param fields Fields filter pattern
 * @result ResponseWrapperCurrencyExchangeRate successful operation
 * @throws ApiError
 */
public static async currencyRateGetRate({
    id,
    date,
    fields,
}: {
    id: number,
    date: string,
    fields?: string,
}
): Promise<ResponseWrapperCurrencyExchangeRate> {
    const result = await __request({
        method: 'GET',
        path: `/currency/${id}/rate`,
        query: {
            'date': date,
            'fields': fields,
        },
    });
    return result.body;
}

}