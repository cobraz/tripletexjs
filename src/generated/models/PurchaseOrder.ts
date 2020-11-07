/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Department } from './Department';
import type { Employee } from './Employee';
import type { Project } from './Project';
import type { PurchaseOrderline } from './PurchaseOrderline';
import type { Supplier } from './Supplier';
import type { TransportType } from './TransportType';

export interface PurchaseOrder {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Purchase order number
     */
    readonly number?: string;
    /**
     * Email when purchase order is send by email.
     */
    receiverEmail?: string;
    /**
     * Discount Percentage
     */
    discount?: number;
    /**
     * Message on packing note.Wholesaler specific.
     */
    packingNoteMessage?: string;
    /**
     * Message to transporter.Wholesaler specific.
     */
    transporterMessage?: string;
    /**
     * Delivery information and invoice comments
     */
    comments?: string;
    supplier: Supplier;
    deliveryDate: string;
    /**
     * Order lines tied to the purchase order
     */
    readonly orderLines?: Array<PurchaseOrderline>;
    /**
     * Project/order
     */
    project?: Project;
    /**
     * Department/order
     */
    department?: Department;
    /**
     * Delivery address
     */
    deliveryAddress?: Address;
    creationDate?: string;
    isClosed?: boolean;
    ourContact: Employee;
    /**
     * Recipient when purchase order is send by email.
     */
    supplierContact?: Employee;
    /**
     * Attention
     */
    attention?: Employee;
    readonly status?: PurchaseOrder.status;
    /**
     * Company currency
     */
    currency?: Currency;
    readonly restorder?: PurchaseOrder;
    /**
     * Transport type
     */
    transportType?: TransportType;
}

export namespace PurchaseOrder {

    export enum status {
        STATUS_OPEN = 'STATUS_OPEN',
        STATUS_SENT = 'STATUS_SENT',
        STATUS_RECEIVING = 'STATUS_RECEIVING',
        STATUS_CONFIRMED_DEVIATION_DETECTED = 'STATUS_CONFIRMED_DEVIATION_DETECTED',
        STATUS_DEVIATION_OPEN = 'STATUS_DEVIATION_OPEN',
        STATUS_DEVIATION_CONFIRMED = 'STATUS_DEVIATION_CONFIRMED',
        STATUS_CONFIRMED = 'STATUS_CONFIRMED',
    }


}
