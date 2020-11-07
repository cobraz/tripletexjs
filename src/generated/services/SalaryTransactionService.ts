/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperSalaryTransaction } from '../models/ResponseWrapperSalaryTransaction';
import type { SalaryTransaction } from '../models/SalaryTransaction';
import { request as __request } from '../core/request';

export class SalaryTransactionService {

    /**
     * [BETA] Create a new salary transaction.
     * @param body JSON representing the new object to be created. Should not have ID and version set.
     * @param generateTaxDeduction Generate tax deduction
     * @result ResponseWrapperSalaryTransaction successfully created
     * @throws ApiError
     */
    public static async salaryTransactionPost({
        body,
        generateTaxDeduction = false,
    }: {
        body?: SalaryTransaction,
        generateTaxDeduction?: boolean,
    }
): Promise<ResponseWrapperSalaryTransaction> {
    const result = await __request({
        method: 'POST',
        path: `/salary/transaction`,
        query: {
            'generateTaxDeduction': generateTaxDeduction,
        },
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find salary transaction by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperSalaryTransaction successful operation
 * @throws ApiError
 */
public static async salaryTransactionGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperSalaryTransaction> {
    const result = await __request({
        method: 'GET',
        path: `/salary/transaction/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete salary transaction by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async salaryTransactionDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/salary/transaction/${id}`,
    });
    return result.body;
}

}