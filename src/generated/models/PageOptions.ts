/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface PageOptions {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The lookup key for this PageOptions entry
     */
    key?: string;
    /**
     * The type that `data` is
     */
    type?: PageOptions.type;
    /**
     * The actual options as a JSON blob
     */
    data: Record<string, any>;
}

export namespace PageOptions {

    /**
     * The type that `data` is
     */
    export enum type {
        INCOMING_INVOICE_VIEW_OPTIONS = 'IncomingInvoiceViewOptions',
    }


}
