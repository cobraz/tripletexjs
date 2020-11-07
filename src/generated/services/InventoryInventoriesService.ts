/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseInventories } from '../models/ListResponseInventories';
import { request as __request } from '../core/request';

export class InventoryInventoriesService {

    /**
     * [BETA] Find inventories corresponding with sent data.
     * @param dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param dateTo Format is yyyy-MM-dd (to and incl.).
     * @param productId Element ID
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseInventories successful operation
     * @throws ApiError
     */
    public static async inventoryInventoriesSearch({
        dateFrom,
        dateTo,
        productId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        productId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseInventories> {
    const result = await __request({
        method: 'GET',
        path: `/inventory/inventories`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'productId': productId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

}