/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormDataMultiPart } from '../models/FormDataMultiPart';
import type { ListResponseTravelExpense } from '../models/ListResponseTravelExpense';
import type { ResponseWrapperTravelExpense } from '../models/ResponseWrapperTravelExpense';
import type { TravelExpense } from '../models/TravelExpense';
import { request as __request } from '../core/request';

export class TravelExpenseService {

    /**
     * [BETA] Find travel expenses corresponding with sent data.
     * @param employeeId Equals
     * @param departmentId Equals
     * @param projectId Equals
     * @param projectManagerId Equals
     * @param departureDateFrom From and including
     * @param returnDateTo To and excluding
     * @param state category
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseTravelExpense successful operation
     * @throws ApiError
     */
    public static async travelExpenseSearch({
        employeeId,
        departmentId,
        projectId,
        projectManagerId,
        departureDateFrom,
        returnDateTo,
        state = 'ALL',
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        employeeId?: string,
        departmentId?: string,
        projectId?: string,
        projectManagerId?: string,
        departureDateFrom?: string,
        returnDateTo?: string,
        state?: 'ALL' | 'OPEN' | 'APPROVED' | 'SALARY_PAID' | 'DELIVERED',
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseTravelExpense> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense`,
        query: {
            'employeeId': employeeId,
            'departmentId': departmentId,
            'projectId': projectId,
            'projectManagerId': projectManagerId,
            'departureDateFrom': departureDateFrom,
            'returnDateTo': returnDateTo,
            'state': state,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create travel expense.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperTravelExpense successfully created
 * @throws ApiError
 */
public static async travelExpensePost({
    body,
}: {
    body?: TravelExpense,
}
): Promise<ResponseWrapperTravelExpense> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Approve travel expenses.
 * @param id ID of the elements
 * @result ListResponseTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseApproveApprove({
    id,
}: {
    id?: string,
}
): Promise<ListResponseTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/:approve`,
        query: {
            'id': id,
        },
    });
    return result.body;
}

/**
 * [BETA] Copy travel expense.
 * @param id Element ID
 * @result ResponseWrapperTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseCopyCopy({
    id,
}: {
    id: number,
}
): Promise<ResponseWrapperTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/:copy`,
        query: {
            'id': id,
        },
    });
    return result.body;
}

/**
 * [BETA] Create vouchers
 * @param date yyyy-MM-dd. Defaults to today.
 * @param id ID of the elements
 * @result ListResponseTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseCreateVouchersCreateVouchers({
    date,
    id,
}: {
    date: string,
    id?: string,
}
): Promise<ListResponseTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/:createVouchers`,
        query: {
            'date': date,
            'id': id,
        },
    });
    return result.body;
}

/**
 * [BETA] Deliver travel expenses.
 * @param id ID of the elements
 * @result ListResponseTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseDeliverDeliver({
    id,
}: {
    id?: string,
}
): Promise<ListResponseTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/:deliver`,
        query: {
            'id': id,
        },
    });
    return result.body;
}

/**
 * [BETA] Unapprove travel expenses.
 * @param id ID of the elements
 * @result ListResponseTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseUnapproveUnapprove({
    id,
}: {
    id?: string,
}
): Promise<ListResponseTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/:unapprove`,
        query: {
            'id': id,
        },
    });
    return result.body;
}

/**
 * [BETA] Undeliver travel expenses.
 * @param id ID of the elements
 * @result ListResponseTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseUndeliverUndeliver({
    id,
}: {
    id?: string,
}
): Promise<ListResponseTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/:undeliver`,
        query: {
            'id': id,
        },
    });
    return result.body;
}

/**
 * [BETA] Get travel expense by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpenseGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperTravelExpense> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update travel expense.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperTravelExpense successful operation
 * @throws ApiError
 */
public static async travelExpensePut({
    id,
    body,
}: {
    id: number,
    body?: TravelExpense,
}
): Promise<ResponseWrapperTravelExpense> {
    const result = await __request({
        method: 'PUT',
        path: `/travelExpense/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete travel expense.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/${id}`,
    });
    return result.body;
}

/**
 * Get attachment by travel expense ID.
 * @param travelExpenseId Travel Expense ID from which PDF is downloaded.
 * @result string successful operation
 * @throws ApiError
 */
public static async travelExpenseAttachmentDownloadAttachment({
    travelExpenseId,
}: {
    travelExpenseId: number,
}
): Promise<string> {
    const result = await __request({
        method: 'GET',
        path: `/travelExpense/${travelExpenseId}/attachment`,
    });
    return result.body;
}

/**
 * Upload attachment to travel expense.
 * @param travelExpenseId Travel Expense ID to upload attachment to.
 * @param file The file
 * @param createNewCost Create new cost row when you add the attachment
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseAttachmentUploadAttachment({
    travelExpenseId,
    file,
    createNewCost = false,
}: {
    travelExpenseId: number,
    file: Buffer | ArrayBuffer | ArrayBufferView,
    createNewCost?: boolean,
}
): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/${travelExpenseId}/attachment`,
        query: {
            'createNewCost': createNewCost,
        },
        formData: {
            'file': file,
        },
    });
    return result.body;
}

/**
 * [BETA] Delete attachment.
 * @param travelExpenseId ID of attachment containing the attachment to delete.
 * @param version Version of voucher containing the attachment to delete.
 * @param sendToInbox Should the attachment be sent to inbox rather than deleted?
 * @param split If sendToInbox is true, should the attachment be split into one voucher per page?
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseAttachmentDeleteAttachment({
    travelExpenseId,
    version,
    sendToInbox = false,
    split = false,
}: {
    travelExpenseId: number,
    version?: number,
    sendToInbox?: boolean,
    split?: boolean,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/travelExpense/${travelExpenseId}/attachment`,
        query: {
            'version': version,
            'sendToInbox': sendToInbox,
            'split': split,
        },
    });
    return result.body;
}

/**
 * Upload multiple attachments to travel expense.
 * @param travelExpenseId Travel Expense ID to upload attachment to.
 * @param body Multipart files
 * @param createNewCost Create new cost row when you add the attachment
 * @result any successful operation
 * @throws ApiError
 */
public static async travelExpenseAttachmentListUploadAttachments({
    travelExpenseId,
    body,
    createNewCost = false,
}: {
    travelExpenseId: number,
    body: FormDataMultiPart,
    createNewCost?: boolean,
}
): Promise<any> {
    const result = await __request({
        method: 'POST',
        path: `/travelExpense/${travelExpenseId}/attachment/list`,
        query: {
            'createNewCost': createNewCost,
        },
        body: body,
    });
    return result.body;
}

}