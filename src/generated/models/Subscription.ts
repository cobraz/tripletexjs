/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Subscription {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Event name (from /v2/event) you wish to subscribe to. Form should be: *subject.verb*.
     */
    event: string;
    /**
     * The callback URL used for subscriptions (including authentication tokens). Must be absolute and use HTTPS. Basic authentication is supported.
     */
    targetUrl: string;
    /**
     * The fields in the object delivered with the notification callback, nested as in other API calls.
     */
    fields?: string;
    /**
     * The status of the subscription.
     */
    readonly status?: Subscription.status;
    /**
     * Custom authentication header name
     */
    authHeaderName?: string;
    /**
     * Custom authentication header value (write only)
     */
    authHeaderValue?: string;
}

export namespace Subscription {

    /**
     * The status of the subscription.
     */
    export enum status {
        ACTIVE = 'ACTIVE',
        DISABLED = 'DISABLED',
        DISABLED_TOO_MANY_ERRORS = 'DISABLED_TOO_MANY_ERRORS',
        DISABLED_RATE_LIMIT_EXCEEDED = 'DISABLED_RATE_LIMIT_EXCEEDED',
        DISABLED_MISUSE = 'DISABLED_MISUSE',
    }


}
