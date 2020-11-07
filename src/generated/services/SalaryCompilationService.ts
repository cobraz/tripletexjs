/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperSalaryCompilation } from '../models/ResponseWrapperSalaryCompilation';
import { request as __request } from '../core/request';

export class SalaryCompilationService {

    /**
     * [BETA] Find salary compilation by employee.
     * @param employeeId Element ID
     * @param year Must be between 1900-2100. Defaults to previous year.
     * @param fields Fields filter pattern
     * @result ResponseWrapperSalaryCompilation successful operation
     * @throws ApiError
     */
    public static async salaryCompilationGet({
        employeeId,
        year,
        fields,
    }: {
        employeeId: number,
        year?: number,
        fields?: string,
    }
): Promise<ResponseWrapperSalaryCompilation> {
    const result = await __request({
        method: 'GET',
        path: `/salary/compilation`,
        query: {
            'employeeId': employeeId,
            'year': year,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Find salary compilation (PDF document) by employee.
 * @param employeeId Element ID
 * @param year Must be between 1900-2100. Defaults to previous year.
 * @result string successful operation
 * @throws ApiError
 */
public static async salaryCompilationPdfDownloadPdf({
    employeeId,
    year,
}: {
    employeeId: number,
    year?: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/salary/compilation/pdf`,
        query: {
            'employeeId': employeeId,
            'year': year,
        },
    });
    return result.body;
}

}