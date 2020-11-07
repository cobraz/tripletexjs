/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseVoucher } from '../models/ListResponseVoucher';
import type { ResponseWrapperVoucher } from '../models/ResponseWrapperVoucher';
import type { ResponseWrapperVoucherOptions } from '../models/ResponseWrapperVoucherOptions';
import type { Voucher } from '../models/Voucher';
import type { VoucherSearchResponse } from '../models/VoucherSearchResponse';
import { request as __request } from '../core/request';

export class LedgerVoucherService {

    /**
     * Find vouchers corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param number List of IDs
     * @param numberFrom From and including
     * @param numberTo To and excluding
     * @param typeId List of IDs
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result VoucherSearchResponse successful operation
     * @throws ApiError
     */
    public static async ledgerVoucherSearch({
        dateFrom,
        dateTo,
        id,
        number,
        numberFrom,
        numberTo,
        typeId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        id?: string,
        number?: string,
        numberFrom?: number,
        numberTo?: number,
        typeId?: string,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<VoucherSearchResponse> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucher`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'id': id,
            'number': number,
            'numberFrom': numberFrom,
            'numberTo': numberTo,
            'typeId': typeId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used
 * @param sendToLedger Should the voucher be sent to ledger? Requires the "Advanced Voucher" permission.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperVoucher successfully created
 * @throws ApiError
 */
public static async ledgerVoucherPost({
    sendToLedger = true,
    body,
}: {
    sendToLedger?: boolean,
    body?: Voucher,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/voucher`,
        query: {
            'sendToLedger': sendToLedger,
        },
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Find non-posted vouchers.
 * @param dateFrom From and including
 * @param dateTo To and excluding
 * @param includeNonApproved Include non-approved vouchers in the result.
 * @param changedSince Only return elements that have changed since this date and time
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherNonPostedNonPosted({
    dateFrom,
    dateTo,
    includeNonApproved = false,
    changedSince,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    dateFrom?: string,
    dateTo?: string,
    includeNonApproved?: boolean,
    changedSince?: string,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseVoucher> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucher/>nonPosted`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'includeNonApproved': includeNonApproved,
            'changedSince': changedSince,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Upload a document to create one or more vouchers. Valid document formats are PDF, PNG, JPEG, TIFF and EHF. Send as multipart form.
 * @param file The file
 * @param description Optional description to use for the voucher(s). If omitted the file name will be used.
 * @param split If the document consists of several pages, should the document be split into one voucher per page?
 * @result ListResponseVoucher successfully created
 * @throws ApiError
 */
public static async ledgerVoucherImportDocumentImportDocument({
    file,
    description,
    split = false,
}: {
    file: Buffer | ArrayBuffer | ArrayBufferView,
    description?: string,
    split?: boolean,
}
): Promise<ListResponseVoucher> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/voucher/importDocument`,
        query: {
            'split': split,
        },
        formData: {
            'file': file,
            'description': description,
        },
    });
    return result.body;
}

/**
 * Import GBAT10. Send as multipart form.
 * @param generateVatPostings If the import should generate VAT postings
 * @param file The file
 * @param encoding The file encoding
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerVoucherImportGbat10ImportGbat10({
    generateVatPostings,
    file,
    encoding = 'utf-8',
}: {
    generateVatPostings: boolean,
    file: Buffer | ArrayBuffer | ArrayBufferView,
    encoding?: string,
}
): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/voucher/importGbat10`,
        formData: {
            'generateVatPostings': generateVatPostings,
            'file': file,
            'encoding': encoding,
        },
    });
    return result.body;
}

/**
 * [BETA] Update multiple vouchers. Postings with guiRow==0 will be deleted and regenerated.
 * @param sendToLedger Should the voucher be sent to ledger? Requires the "Advanced Voucher" permission.
 * @param body JSON representing updates to object. Should have ID and version set.
 * @result ListResponseVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherListPutList({
    sendToLedger = true,
    body,
}: {
    sendToLedger?: boolean,
    body?: Array<Voucher>,
}
): Promise<ListResponseVoucher> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/voucher/list`,
        query: {
            'sendToLedger': sendToLedger,
        },
        body: body,
    });
    return result.body;
}

/**
 * Get voucher by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucher/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update voucher. Postings with guiRow==0 will be deleted and regenerated.
 * @param id Element ID
 * @param sendToLedger Should the voucher be sent to ledger? Requires the "Advanced Voucher" permission.
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherPut({
    id,
    sendToLedger = true,
    body,
}: {
    id: number,
    sendToLedger?: boolean,
    body?: Voucher,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/voucher/${id}`,
        query: {
            'sendToLedger': sendToLedger,
        },
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete voucher by ID.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerVoucherDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/ledger/voucher/${id}`,
    });
    return result.body;
}

/**
 * Reverses the voucher, and returns the reversed voucher. Supports reversing most voucher types, except salary transactions.
 * @param id ID of voucher that should be reversed.
 * @param date Reverse voucher date
 * @result ResponseWrapperVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherReverseReverse({
    id,
    date,
}: {
    id: number,
    date: string,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/voucher/${id}/:reverse`,
        query: {
            'date': date,
        },
    });
    return result.body;
}

/**
 * [BETA] Send voucher to inbox.
 * @param id ID of voucher that should be sent to inbox.
 * @param version Version of voucher that should be sent to inbox.
 * @param comment Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled.
 * @result ResponseWrapperVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherSendToInboxSendToInbox({
    id,
    version,
    comment,
}: {
    id: number,
    version?: number,
    comment?: string,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/voucher/${id}/:sendToInbox`,
        query: {
            'version': version,
            'comment': comment,
        },
    });
    return result.body;
}

/**
 * [BETA] Send voucher to ledger.
 * @param id ID of voucher that should be sent to ledger.
 * @param version Version of voucher that should be sent to ledger.
 * @param number Voucher number to use. If omitted or 0 the system will assign the number.
 * @result ResponseWrapperVoucher successful operation
 * @throws ApiError
 */
public static async ledgerVoucherSendToLedgerSendToLedger({
    id,
    version,
    number,
}: {
    id: number,
    version?: number,
    number?: number,
}
): Promise<ResponseWrapperVoucher> {
    const result = await __request({
        method: 'PUT',
        path: `/ledger/voucher/${id}/:sendToLedger`,
        query: {
            'version': version,
            'number': number,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete attachment.
 * @param id ID of voucher containing the attachment to delete.
 * @param version Version of voucher containing the attachment to delete.
 * @param sendToInbox Should the attachment be sent to inbox rather than deleted?
 * @param split If sendToInbox is true, should the attachment be split into one voucher per page?
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerVoucherAttachmentDeleteAttachment({
    id,
    version,
    sendToInbox = false,
    split = false,
}: {
    id: number,
    version?: number,
    sendToInbox?: boolean,
    split?: boolean,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/ledger/voucher/${id}/attachment`,
        query: {
            'version': version,
            'sendToInbox': sendToInbox,
            'split': split,
        },
    });
    return result.body;
}

/**
 * [BETA] Returns a data structure containing meta information about operations that are available for this voucher. Currently only implemented for DELETE: It is possible to check if the voucher is deletable.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperVoucherOptions successful operation
 * @throws ApiError
 */
public static async ledgerVoucherOptionsOptions({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperVoucherOptions> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucher/${id}/options`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Upload attachment to voucher. If the voucher already has an attachment the content will be appended to the existing attachment as new PDF page(s). Valid document formats are PDF, PNG, JPEG and TIFF. Non PDF formats will be converted to PDF. Send as multipart form.
 * @param voucherId Voucher ID to upload attachment to.
 * @param file The file
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerVoucherAttachmentUploadAttachment({
    voucherId,
    file,
}: {
    voucherId: number,
    file: Buffer | ArrayBuffer | ArrayBufferView,
}
): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/voucher/${voucherId}/attachment`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * Get PDF representation of voucher by ID.
 * @param voucherId Voucher ID from which PDF is downloaded.
 * @result string successful operation
 * @throws ApiError
 */
public static async ledgerVoucherPdfDownloadPdf({
    voucherId,
}: {
    voucherId: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/ledger/voucher/${voucherId}/pdf`,
    });
    return result.body;
}

/**
 * [DEPRECATED] Use POST ledger/voucher/{voucherId}/attachment instead.
 * @param voucherId Voucher ID to upload PDF to.
 * @param fileName File name to store the pdf under. Will not be the same as the filename on the file returned.
 * @param file The file
 * @result any successful operation
 * @throws ApiError
 */
public static async ledgerVoucherPdfUploadPdf({
    voucherId,
    fileName,
    file,
}: {
    voucherId: number,
    fileName: string,
    file: Buffer | ArrayBuffer | ArrayBufferView,
}
): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/ledger/voucher/${voucherId}/pdf/${fileName}`,
        formData: {
            'file': file,
        },
    });
    return result.body;
}

}