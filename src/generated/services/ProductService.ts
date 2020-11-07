/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProduct } from '../models/ListResponseProduct';
import type { Product } from '../models/Product';
import type { ResponseWrapperProduct } from '../models/ResponseWrapperProduct';
import { request as __request } from '../core/request';

export class ProductService {

    /**
     * Find products corresponding with sent data.
     * @param number DEPRECATED. List of product numbers (Integer only)
     * @param productNumber List of valid product numbers
     * @param name Containing
     * @param ean Equals
     * @param isInactive Equals
     * @param isStockItem Equals
     * @param currencyId Equals
     * @param vatTypeId Equals
     * @param productUnitId Equals
     * @param departmentId Equals
     * @param accountId Equals
     * @param costExcludingVatCurrencyFrom From and including
     * @param costExcludingVatCurrencyTo To and excluding
     * @param priceExcludingVatCurrencyFrom From and including
     * @param priceExcludingVatCurrencyTo To and excluding
     * @param priceIncludingVatCurrencyFrom From and including
     * @param priceIncludingVatCurrencyTo To and excluding
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProduct successful operation
     * @throws ApiError
     */
    public static async productSearch({
        number,
        productNumber,
        name,
        ean,
        isInactive,
        isStockItem,
        currencyId,
        vatTypeId,
        productUnitId,
        departmentId,
        accountId,
        costExcludingVatCurrencyFrom,
        costExcludingVatCurrencyTo,
        priceExcludingVatCurrencyFrom,
        priceExcludingVatCurrencyTo,
        priceIncludingVatCurrencyFrom,
        priceIncludingVatCurrencyTo,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        number?: string,
        productNumber?: Array<string>,
        name?: string,
        ean?: string,
        isInactive?: boolean,
        isStockItem?: boolean,
        currencyId?: string,
        vatTypeId?: string,
        productUnitId?: string,
        departmentId?: string,
        accountId?: string,
        costExcludingVatCurrencyFrom?: number,
        costExcludingVatCurrencyTo?: number,
        priceExcludingVatCurrencyFrom?: number,
        priceExcludingVatCurrencyTo?: number,
        priceIncludingVatCurrencyFrom?: number,
        priceIncludingVatCurrencyTo?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProduct> {
    const result = await __request({
        method: 'GET',
        path: `/product`,
        query: {
            'number': number,
            'productNumber': productNumber,
            'name': name,
            'ean': ean,
            'isInactive': isInactive,
            'isStockItem': isStockItem,
            'currencyId': currencyId,
            'vatTypeId': vatTypeId,
            'productUnitId': productUnitId,
            'departmentId': departmentId,
            'accountId': accountId,
            'costExcludingVatCurrencyFrom': costExcludingVatCurrencyFrom,
            'costExcludingVatCurrencyTo': costExcludingVatCurrencyTo,
            'priceExcludingVatCurrencyFrom': priceExcludingVatCurrencyFrom,
            'priceExcludingVatCurrencyTo': priceExcludingVatCurrencyTo,
            'priceIncludingVatCurrencyFrom': priceIncludingVatCurrencyFrom,
            'priceIncludingVatCurrencyTo': priceIncludingVatCurrencyTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Create new product.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperProduct successfully created
 * @throws ApiError
 */
public static async productPost({
    body,
}: {
    body?: Product,
}
): Promise<ResponseWrapperProduct> {
    const result = await __request({
        method: 'POST',
        path: `/product`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Add multiple products.
 * @param body JSON representing a list of new object to be created. Should not have ID and version set.
 * @result ListResponseProduct successfully created
 * @throws ApiError
 */
public static async productListPostList({
    body,
}: {
    body?: Array<Product>,
}
): Promise<ListResponseProduct> {
    const result = await __request({
        method: 'POST',
        path: `/product/list`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Update a list of products.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseProduct successful operation
 * @throws ApiError
 */
public static async productListPutList({
    body,
}: {
    body?: Array<Product>,
}
): Promise<ListResponseProduct> {
    const result = await __request({
        method: 'PUT',
        path: `/product/list`,
        body: body,
    });
    return result.body;
}

/**
 * Get product by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProduct successful operation
 * @throws ApiError
 */
public static async productGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProduct> {
    const result = await __request({
        method: 'GET',
        path: `/product/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Update product.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperProduct successful operation
 * @throws ApiError
 */
public static async productPut({
    id,
    body,
}: {
    id: number,
    body?: Product,
}
): Promise<ResponseWrapperProduct> {
    const result = await __request({
        method: 'PUT',
        path: `/product/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete product.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async productDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/product/${id}`,
    });
    return result.body;
}

}