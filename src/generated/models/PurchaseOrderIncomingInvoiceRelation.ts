/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { PurchaseOrder } from './PurchaseOrder';
import type { Voucher } from './Voucher';

export interface PurchaseOrderIncomingInvoiceRelation {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    orderOut: PurchaseOrder;
    voucher: Voucher;
}
