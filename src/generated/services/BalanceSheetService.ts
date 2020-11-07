/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseBalanceSheetAccount } from '../models/ListResponseBalanceSheetAccount';
import { request as __request } from '../core/request';

export class BalanceSheetService {

    /**
     * [BETA] Get balance sheet (saldobalanse).
     * @param dateFrom Format is yyyy-MM-dd (from and incl.).
     * @param dateTo Format is yyyy-MM-dd (to and excl.).
     * @param accountNumberFrom From and including
     * @param accountNumberTo To and excluding
     * @param customerId Element ID
     * @param employeeId Element ID
     * @param departmentId Element ID
     * @param projectId Element ID
     * @param includeSubProjects Should sub projects of the given project be included
     * @param includeActiveAccountsWithoutMovements Should active accounts with no movements be included
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBalanceSheetAccount successful operation
     * @throws ApiError
     */
    public static async balanceSheetSearch({
        dateFrom,
        dateTo,
        accountNumberFrom,
        accountNumberTo,
        customerId,
        employeeId,
        departmentId,
        projectId,
        includeSubProjects = false,
        includeActiveAccountsWithoutMovements = false,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        accountNumberFrom?: number,
        accountNumberTo?: number,
        customerId?: number,
        employeeId?: number,
        departmentId?: number,
        projectId?: number,
        includeSubProjects?: boolean,
        includeActiveAccountsWithoutMovements?: boolean,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseBalanceSheetAccount> {
    const result = await __request({
        method: 'GET',
        path: `/balanceSheet`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'accountNumberFrom': accountNumberFrom,
            'accountNumberTo': accountNumberTo,
            'customerId': customerId,
            'employeeId': employeeId,
            'departmentId': departmentId,
            'projectId': projectId,
            'includeSubProjects': includeSubProjects,
            'includeActiveAccountsWithoutMovements': includeActiveAccountsWithoutMovements,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

}