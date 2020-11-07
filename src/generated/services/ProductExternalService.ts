/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseExternalProduct } from '../models/ListResponseExternalProduct';
import type { ResponseWrapperExternalProduct } from '../models/ResponseWrapperExternalProduct';
import { request as __request } from '../core/request';

export class ProductExternalService {

    /**
     * [BETA] Find external products corresponding with sent data. The sorting-field is not in use on this endpoint.
     * @param name Containing
     * @param wholesaler Wholesaler
     * @param organizationNumber Wholesaler organization number. Mandatory if Wholesaler is not selected. If Wholesaler is selected, this field is ignored.
     * @param elNumber List of valid el numbers
     * @param nrfNumber List of valid nrf numbers
     * @param isInactive Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseExternalProduct successful operation
     * @throws ApiError
     */
    public static async productExternalSearch({
        name,
        wholesaler,
        organizationNumber,
        elNumber,
        nrfNumber,
        isInactive,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        name?: string,
        wholesaler?: 'AHLSELL' | 'BROEDRENE_DAHL' | 'ELEKTROSKANDIA' | 'HEIDENREICH' | 'ONNINEN' | 'OTRA' | 'SOLAR' | 'BERGAARD_AMUNDSEN' | 'BERGAARD_AMUNDSEN_STAVANGER' | 'SORLANDET_ELEKTRO' | 'ETMAN_DISTRIBUSJON' | 'ETM_OST' | 'CENIKA' | 'EP_ENGROS' | 'BETEK' | 'DGROUP' | 'FAGERHULT' | 'GLAMOX' | 'SCHNEIDER' | 'STOKKAN' | 'WURTH' | 'ELEKTROIMPORTOEREN' | 'THERMOFLOOR' | 'LYSKOMPONENTER' | 'NORDESIGN',
        organizationNumber?: string,
        elNumber?: string,
        nrfNumber?: string,
        isInactive?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseExternalProduct> {
    const result = await __request({
        method: 'GET',
        path: `/product/external`,
        query: {
            'name': name,
            'wholesaler': wholesaler,
            'organizationNumber': organizationNumber,
            'elNumber': elNumber,
            'nrfNumber': nrfNumber,
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
 * [BETA] Get external product by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperExternalProduct successful operation
 * @throws ApiError
 */
public static async productExternalGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperExternalProduct> {
    const result = await __request({
        method: 'GET',
        path: `/product/external/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}