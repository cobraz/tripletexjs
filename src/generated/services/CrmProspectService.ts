/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProspect } from '../models/ListResponseProspect';
import type { ResponseWrapperProspect } from '../models/ResponseWrapperProspect';
import { request as __request } from '../core/request';

export class CrmProspectService {

    /**
     * Find prospects corresponding with sent data.
     * @param name Containing
     * @param description Containing
     * @param createdDateFrom From and including
     * @param createdDateTo To and excluding
     * @param customerId Equals
     * @param salesEmployeeId Equals
     * @param isClosed Equals
     * @param closedReason Equals
     * @param closedDateFrom From and including
     * @param closedDateTo To and excluding
     * @param competitor Containing
     * @param prospectType Equals
     * @param projectId Equals
     * @param projectOfferId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseProspect successful operation
     * @throws ApiError
     */
    public static async crmProspectSearch({
        name,
        description,
        createdDateFrom,
        createdDateTo,
        customerId,
        salesEmployeeId,
        isClosed,
        closedReason,
        closedDateFrom,
        closedDateTo,
        competitor,
        prospectType,
        projectId,
        projectOfferId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        name?: string,
        description?: string,
        createdDateFrom?: string,
        createdDateTo?: string,
        customerId?: string,
        salesEmployeeId?: string,
        isClosed?: boolean,
        closedReason?: string,
        closedDateFrom?: string,
        closedDateTo?: string,
        competitor?: string,
        prospectType?: string,
        projectId?: string,
        projectOfferId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseProspect> {
    const result = await __request({
        method: 'GET',
        path: `/crm/prospect`,
        query: {
            'name': name,
            'description': description,
            'createdDateFrom': createdDateFrom,
            'createdDateTo': createdDateTo,
            'customerId': customerId,
            'salesEmployeeId': salesEmployeeId,
            'isClosed': isClosed,
            'closedReason': closedReason,
            'closedDateFrom': closedDateFrom,
            'closedDateTo': closedDateTo,
            'competitor': competitor,
            'prospectType': prospectType,
            'projectId': projectId,
            'projectOfferId': projectOfferId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get prospect by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProspect successful operation
 * @throws ApiError
 */
public static async crmProspectGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProspect> {
    const result = await __request({
        method: 'GET',
        path: `/crm/prospect/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}