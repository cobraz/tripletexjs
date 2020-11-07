/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseReminder } from '../models/ListResponseReminder';
import type { ResponseWrapperReminder } from '../models/ResponseWrapperReminder';
import { request as __request } from '../core/request';

export class ReminderService {

    /**
     * Find reminders corresponding with sent data.
     * @param dateFrom From and including
     * @param dateTo To and excluding
     * @param id List of IDs
     * @param termOfPaymentTo To and excluding
     * @param termOfPaymentFrom From and including
     * @param invoiceId Equals
     * @param customerId Equals
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseReminder successful operation
     * @throws ApiError
     */
    public static async reminderSearch({
        dateFrom,
        dateTo,
        id,
        termOfPaymentTo,
        termOfPaymentFrom,
        invoiceId,
        customerId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        dateFrom: string,
        dateTo: string,
        id?: string,
        termOfPaymentTo?: string,
        termOfPaymentFrom?: string,
        invoiceId?: number,
        customerId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseReminder> {
    const result = await __request({
        method: 'GET',
        path: `/reminder`,
        query: {
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'id': id,
            'termOfPaymentTo': termOfPaymentTo,
            'termOfPaymentFrom': termOfPaymentFrom,
            'invoiceId': invoiceId,
            'customerId': customerId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get reminder by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperReminder successful operation
 * @throws ApiError
 */
public static async reminderGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperReminder> {
    const result = await __request({
        method: 'GET',
        path: `/reminder/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}