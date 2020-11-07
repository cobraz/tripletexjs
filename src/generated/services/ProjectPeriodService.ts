/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseProjectPeriodMonthlyStatus } from '../models/ListResponseProjectPeriodMonthlyStatus';
import type { ResponseWrapperProjectPeriodHourlyReport } from '../models/ResponseWrapperProjectPeriodHourlyReport';
import type { ResponseWrapperProjectPeriodInvoiced } from '../models/ResponseWrapperProjectPeriodInvoiced';
import type { ResponseWrapperProjectPeriodInvoicingReserve } from '../models/ResponseWrapperProjectPeriodInvoicingReserve';
import type { ResponseWrapperProjectPeriodOverallStatus } from '../models/ResponseWrapperProjectPeriodOverallStatus';
import { request as __request } from '../core/request';

export class ProjectPeriodService {

    /**
     * Find hourlist report by project period.
     * @param dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param dateTo Format is yyyy-MM-dd (to and excl.).
     * @param id Element ID
     * @param fields Fields filter pattern
     * @result ResponseWrapperProjectPeriodHourlyReport successful operation
     * @throws ApiError
     */
    public static async projectPeriodHourlistReportHourlistReport({
        dateFrom,
        dateTo,
        id,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        id: number,
        fields?: string,
    }
): Promise<ResponseWrapperProjectPeriodHourlyReport> {
    const result = await __request({
        method: 'GET',
        path: `/project/${id}/period/hourlistReport`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find invoiced info by project period.
 * @param dateFrom Format is yyyy-MM-dd (from and incl.).
 * @param dateTo Format is yyyy-MM-dd (to and excl.).
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectPeriodInvoiced successful operation
 * @throws ApiError
 */
public static async projectPeriodInvoicedInvoiced({
    dateFrom,
    dateTo,
    id,
    fields,
}: {
    dateFrom: string,
    dateTo: string,
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectPeriodInvoiced> {
    const result = await __request({
        method: 'GET',
        path: `/project/${id}/period/invoiced`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find invoicing reserve by project period.
 * @param dateFrom Format is yyyy-MM-dd (from and incl.).
 * @param dateTo Format is yyyy-MM-dd (to and excl.).
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectPeriodInvoicingReserve successful operation
 * @throws ApiError
 */
public static async projectPeriodInvoicingReserveInvoicingReserve({
    dateFrom,
    dateTo,
    id,
    fields,
}: {
    dateFrom: string,
    dateTo: string,
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectPeriodInvoicingReserve> {
    const result = await __request({
        method: 'GET',
        path: `/project/${id}/period/invoicingReserve`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find overall status by project period.
 * @param dateFrom Format is yyyy-MM-dd (from and incl.).
 * @param dateTo Format is yyyy-MM-dd (to and excl.).
 * @param id Element ID
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseProjectPeriodMonthlyStatus successful operation
 * @throws ApiError
 */
public static async projectPeriodMonthlyStatusMonthlyStatus({
    dateFrom,
    dateTo,
    id,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    dateFrom: string,
    dateTo: string,
    id: number,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseProjectPeriodMonthlyStatus> {
    const result = await __request({
        method: 'GET',
        path: `/project/${id}/period/monthlyStatus`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Find overall status by project period.
 * @param dateFrom Format is yyyy-MM-dd (from and incl.).
 * @param dateTo Format is yyyy-MM-dd (to and excl.).
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperProjectPeriodOverallStatus successful operation
 * @throws ApiError
 */
public static async projectPeriodOverallStatusOverallStatus({
    dateFrom,
    dateTo,
    id,
    fields,
}: {
    dateFrom: string,
    dateTo: string,
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperProjectPeriodOverallStatus> {
    const result = await __request({
        method: 'GET',
        path: `/project/${id}/period/overallStatus`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'fields': fields,
        },
    });
    return result.body;
}

}