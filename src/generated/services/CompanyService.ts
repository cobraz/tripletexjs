/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Company } from '../models/Company';
import type { ListResponseCompany } from '../models/ListResponseCompany';
import type { ResponseWrapperCompany } from '../models/ResponseWrapperCompany';
import { request as __request } from '../core/request';

export class CompanyService {

    /**
     * Update company information.
     * @param body Partial object describing what should be updated
     * @result ResponseWrapperCompany successful operation
     * @throws ApiError
     */
    public static async companyPut({
        body,
    }: {
        body?: Company,
    }
): Promise<ResponseWrapperCompany> {
    const result = await __request({
        method: 'PUT',
        path: `/company`,
        body: body,
    });
    return result.body;
}

/**
 * Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseCompany successful operation
 * @throws ApiError
 */
public static async companyWithLoginAccessGetWithLoginAccess({
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
): Promise<ListResponseCompany> {
    const result = await __request({
        method: 'GET',
        path: `/company/>withLoginAccess`,
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
 * [DEPRECATED] Find divisions.
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseCompany successful operation
 * @throws ApiError
 */
public static async companyDivisionsGetDivisions({
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
): Promise<ListResponseCompany> {
    const result = await __request({
        method: 'GET',
        path: `/company/divisions`,
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
 * Find company by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperCompany successful operation
 * @throws ApiError
 */
public static async companyGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperCompany> {
    const result = await __request({
        method: 'GET',
        path: `/company/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}