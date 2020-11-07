/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Voucher } from './Voucher';

export interface VoucherStatus {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The voucher.
     */
    voucher?: Voucher;
    /**
     * The type of process
     */
    readonly type?: VoucherStatus.type;
    /**
     * Process status
     */
    status?: VoucherStatus.status;
    /**
     * Time of last update
     */
    readonly timestamp?: string;
}

export namespace VoucherStatus {

    /**
     * The type of process
     */
    export enum type {
        TRIPLETEX = 'TRIPLETEX',
        DEMO_TYPE = 'DEMO_TYPE',
        DEBT_COLLECTION_3_4 = 'DEBT_COLLECTION_3_4',
        DEBT_COLLECTION_4 = 'DEBT_COLLECTION_4',
    }

    /**
     * Process status
     */
    export enum status {
        WAITING = 'WAITING',
        DONE = 'DONE',
        SKIPPED = 'SKIPPED',
        ERROR = 'ERROR',
        NONE = 'NONE',
        PROCESSING = 'PROCESSING',
    }


}
