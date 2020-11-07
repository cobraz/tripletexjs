/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProductUnitMaster } from '../models/ListResponseProductUnitMaster';
import type { ResponseWrapperProductUnitMaster } from '../models/ResponseWrapperProductUnitMaster';
import { request as __request } from '../core/request';

export class ProductUnitMasterService {

    /**
     * [BETA] Find product units master corresponding with sent data.
     * @param id List of IDs
     * @param name Names
     * @param nameShort Short names
     * @param commonCode Common codes
     * @param peppolName Peppol names
     * @param peppolSymbol Peppol symbols
     * @param isInactive Inactive units
     * @param count Number of elements to return
     * @param from From index
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProductUnitMaster successful operation
     * @throws ApiError
     */
    public static async productUnitMasterSearch({
        id,
        name,
        nameShort,
        commonCode,
        peppolName,
        peppolSymbol,
        isInactive,
        count = 2100,
        from,
        sorting,
        fields,
    }: {
        id?: string,
        name?: string,
        nameShort?: string,
        commonCode?: string,
        peppolName?: string,
        peppolSymbol?: string,
        isInactive?: boolean,
        count?: number,
        from?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProductUnitMaster> {
    const result = await __request({
        method: 'GET',
        path: `/product/unit/master`,
        query: {
            'id': id,
            'name': name,
            'nameShort': nameShort,
            'commonCode': commonCode,
            'peppolName': peppolName,
            'peppolSymbol': peppolSymbol,
            'isInactive': isInactive,
            'count': count,
            'from': from,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Get product unit master by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProductUnitMaster successful operation
 * @throws ApiError
 */
public static async productUnitMasterGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProductUnitMaster> {
    const result = await __request({
        method: 'GET',
        path: `/product/unit/master/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}