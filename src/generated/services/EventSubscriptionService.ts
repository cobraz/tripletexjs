/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseSubscription } from '../models/ListResponseSubscription';
import type { ResponseWrapperSubscription } from '../models/ResponseWrapperSubscription';
import type { Subscription } from '../models/Subscription';
import { request as __request } from '../core/request';

export class EventSubscriptionService {

    /**
     * [BETA] Find all ongoing subscriptions.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseSubscription successful operation
     * @throws ApiError
     */
    public static async eventSubscriptionSearch({
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseSubscription> {
    const result = await __request({
        method: 'GET',
        path: `/event/subscription`,
        query: {
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Create a new subscription for current EmployeeToken.
 * @param body JSON representing the new object to be created. Should not have ID and version set.
 * @result ResponseWrapperSubscription successfully created
 * @throws ApiError
 */
public static async eventSubscriptionPost({
    body,
}: {
    body?: Subscription,
}
): Promise<ResponseWrapperSubscription> {
    const result = await __request({
        method: 'POST',
        path: `/event/subscription`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Get subscription by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperSubscription successful operation
 * @throws ApiError
 */
public static async eventSubscriptionGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperSubscription> {
    const result = await __request({
        method: 'GET',
        path: `/event/subscription/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Change a current subscription, based on id.
 * @param id Element ID
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperSubscription successful operation
 * @throws ApiError
 */
public static async eventSubscriptionPut({
    id,
    body,
}: {
    id: number,
    body?: Subscription,
}
): Promise<ResponseWrapperSubscription> {
    const result = await __request({
        method: 'PUT',
        path: `/event/subscription/${id}`,
        body: body,
    });
    return result.body;
}

/**
 * [BETA] Delete the given subscription.
 * @param id Element ID
 * @result any successful operation
 * @throws ApiError
 */
public static async eventSubscriptionDelete({
    id,
}: {
    id: number,
}
): Promise<any> {
    const result = await __request({
        method: 'DELETE',
        path: `/event/subscription/${id}`,
    });
    return result.body;
}

}