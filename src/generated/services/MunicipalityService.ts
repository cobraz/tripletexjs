/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseMunicipality } from '../models/ListResponseMunicipality';
import { request as __request } from '../core/request';

export class MunicipalityService {

    /**
     * [BETA] Get municipalities.
     * @param includePayrollTaxZones Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseMunicipality successful operation
     * @throws ApiError
     */
    public static async municipalitySearch({
        includePayrollTaxZones = true,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        includePayrollTaxZones?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseMunicipality> {
    const result = await __request({
        method: 'GET',
        path: `/municipality`,
        query: {
            'includePayrollTaxZones': includePayrollTaxZones,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

}