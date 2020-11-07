/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { OrderLine } from './OrderLine';

export interface Deviation {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    purchaseOrderLine: OrderLine;
    date: string;
    cause?: Deviation.cause;
    action?: Deviation.action;
    comment?: string;
    readonly receivedBy?: string;
    readonly quantityOrdered?: number;
    readonly quantityReceived?: number;
    readonly deviation?: number;
}

export namespace Deviation {

    export enum cause {
        CAUSE_DEFECT = 'CAUSE_DEFECT',
        CAUSE_TOO_FEW = 'CAUSE_TOO_FEW',
        CAUSE_TOO_MANY = 'CAUSE_TOO_MANY',
        CAUSE_REPLACEMENT = 'CAUSE_REPLACEMENT',
    }

    export enum action {
        ACTION_IGNORE = 'ACTION_IGNORE',
        ACTION_GENERATE_RESTORDER = 'ACTION_GENERATE_RESTORDER',
        ACTION_RETURN = 'ACTION_RETURN',
        ACTION_RETURN_GENERATE_RESTORDER = 'ACTION_RETURN_GENERATE_RESTORDER',
    }


}
