/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponsePayslip } from '../models/ListResponsePayslip';
import type { ResponseWrapperPayslip } from '../models/ResponseWrapperPayslip';
import { request as __request } from '../core/request';

export class SalaryPayslipService {

    /**
     * [BETA] Find payslips corresponding with sent data.
     * @param id List of IDs
     * @param employeeId List of IDs
     * @param wageTransactionId List of IDs
     * @param activityId List of IDs
     * @param yearFrom From and including
     * @param yearTo To and excluding
     * @param monthFrom From and including
     * @param monthTo To and excluding
     * @param voucherDateFrom From and including
     * @param voucherDateTo To and excluding
     * @param comment Containing
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponsePayslip successful operation
     * @throws ApiError
     */
    public static async salaryPayslipSearch({
        id,
        employeeId,
        wageTransactionId,
        activityId,
        yearFrom,
        yearTo,
        monthFrom,
        monthTo,
        voucherDateFrom,
        voucherDateTo,
        comment,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        employeeId?: string,
        wageTransactionId?: string,
        activityId?: string,
        yearFrom?: number,
        yearTo?: number,
        monthFrom?: number,
        monthTo?: number,
        voucherDateFrom?: string,
        voucherDateTo?: string,
        comment?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponsePayslip> {
    const result = await __request({
        method: 'GET',
        path: `/salary/payslip`,
        query: {
            'id': id,
            'employeeId': employeeId,
            'wageTransactionId': wageTransactionId,
            'activityId': activityId,
            'yearFrom': yearFrom,
            'yearTo': yearTo,
            'monthFrom': monthFrom,
            'monthTo': monthTo,
            'voucherDateFrom': voucherDateFrom,
            'voucherDateTo': voucherDateTo,
            'comment': comment,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Find payslip by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperPayslip successful operation
 * @throws ApiError
 */
public static async salaryPayslipGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperPayslip> {
    const result = await __request({
        method: 'GET',
        path: `/salary/payslip/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Find payslip (PDF document) by ID.
 * @param id Element ID
 * @result string successful operation
 * @throws ApiError
 */
public static async salaryPayslipPdfDownloadPdf({
    id,
}: {
    id: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/salary/payslip/${id}/pdf`,
    });
    return result.body;
}

}