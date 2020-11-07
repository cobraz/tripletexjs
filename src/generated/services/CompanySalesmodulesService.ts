/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseSalesModuleDTO } from '../models/ListResponseSalesModuleDTO';
import type { ResponseWrapperSalesModuleDTO } from '../models/ResponseWrapperSalesModuleDTO';
import type { SalesModuleDTO } from '../models/SalesModuleDTO';
import { request as __request } from '../core/request';

export class CompanySalesmodulesService {

    /**
     * [BETA] Get active sales modules.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseSalesModuleDTO successful operation
     * @throws ApiError
     */
    public static async companySalesmodulesGet({
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseSalesModuleDTO> {
    const result = await __request({
        method: 'GET',
        path: `/company/salesmodules`,
        query: {
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Add (activate) a new sales module.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperSalesModuleDTO successfully created
 * @throws ApiError
 */
public static async companySalesmodulesPost({
    body,
}: {
    body?: SalesModuleDTO,
}
): Promise<ResponseWrapperSalesModuleDTO> {
    const result = await __request({
        method: 'POST',
        path: `/company/salesmodules`,
        body: body,
    });
    return result.body;
}

}