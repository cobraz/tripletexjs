/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseBankStatement } from '../models/ListResponseBankStatement';
import type { ResponseWrapperBankStatement } from '../models/ResponseWrapperBankStatement';
import { request as __request } from '../core/request';

export class BankStatementService {

    /**
     * [BETA] Find bank statement corresponding with sent data.
     * @param id List of IDs
     * @param accountId List of IDs
     * @param fileFormat File format
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseBankStatement successful operation
     * @throws ApiError
     */
    public static async bankStatementSearch({
        id,
        accountId,
        fileFormat,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        id?: string,
        accountId?: string,
        fileFormat?: 'DNB_CSV' | 'EIKA_TELEPAY' | 'SPAREBANK1_TELEPAY' | 'VISMA_ACCOUNT_STATEMENT' | 'HANDELSBANKEN_TELEPAY' | 'SPAREBANKEN_VEST_TELEPAY' | 'NORDEA_CSV' | 'TRANSFERWISE' | 'SPAREBANKEN_SOR_TELEPAY' | 'SPAREBANKEN_OST_TELEPAY' | 'DANSKE_BANK_CSV' | 'CULTURA_BANK_TELEPAY',
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseBankStatement> {
    const result = await __request({
        method: 'GET',
        path: `/bank/statement`,
        query: {
            'id': id,
            'accountId': accountId,
            'fileFormat': fileFormat,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload bank statement file.
 * @param bankId Bank ID
 * @param accountId Account ID
 * @param fromDate Format is yyyy-MM-dd (from and incl.).
 * @param toDate Format is yyyy-MM-dd (to and excl.).
 * @param fileFormat File format
 * @param file The bank statement file
 * @param externalId External ID
 * @result ResponseWrapperBankStatement successfully created
 * @throws ApiError
 */
public static async bankStatementImportImportBankStatement({
    bankId,
    accountId,
    fromDate,
    toDate,
    fileFormat,
    file,
    externalId,
}: {
    bankId: number,
    accountId: number,
    fromDate: string,
    toDate: string,
    fileFormat: 'DNB_CSV' | 'EIKA_TELEPAY' | 'SPAREBANK1_TELEPAY' | 'VISMA_ACCOUNT_STATEMENT' | 'HANDELSBANKEN_TELEPAY' | 'SPAREBANKEN_VEST_TELEPAY' | 'NORDEA_CSV' | 'TRANSFERWISE' | 'SPAREBANKEN_SOR_TELEPAY' | 'SPAREBANKEN_OST_TELEPAY' | 'DANSKE_BANK_CSV' | 'CULTURA_BANK_TELEPAY',
    file: Buffer | ArrayBuffer | ArrayBufferView,
    externalId?: string,
}
): Promise<ResponseWrapperBankStatement> {
    const result = await __request({
        method: 'POST',
        path: `/bank/statement/import`,
        query: {
            'bankId': bankId,
            'accountId': accountId,
            'fromDate': fromDate,
            'toDate': toDate,
            'fileFormat': fileFormat,
            'externalId': externalId,
        },
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Get bank statement.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperBankStatement successful operation
 * @throws ApiError
 */
public static async bankStatementGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperBankStatement> {
    const result = await __request({
        method: 'GET',
        path: `/bank/statement/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete bank statement by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async bankStatementDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/bank/statement/${id}`,
    });
    return result.body;
}

}