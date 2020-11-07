/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';
import type { GoodsReceiptLine } from './GoodsReceiptLine';
import type { PurchaseOrder } from './PurchaseOrder';

export interface GoodsReceipt {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    purchaseOrder?: PurchaseOrder;
    registrationDate: string;
    readonly receivedBy?: Employee;
    readonly status?: GoodsReceipt.status;
    /**
     * Purchase Order lines tied to the goods receipt
     */
    goodsReceiptLines: Array<GoodsReceiptLine>;
}

export namespace GoodsReceipt {

    export enum status {
        STATUS_OPEN = 'STATUS_OPEN',
        STATUS_CONFIRMED = 'STATUS_CONFIRMED',
    }


}
