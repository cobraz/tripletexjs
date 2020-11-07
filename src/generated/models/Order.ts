/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Contact } from './Contact';
import type { Currency } from './Currency';
import type { Customer } from './Customer';
import type { DeliveryAddress } from './DeliveryAddress';
import type { Department } from './Department';
import type { Employee } from './Employee';
import type { OrderLine } from './OrderLine';
import type { Project } from './Project';

export interface Order {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    customer: Customer;
    contact?: Contact;
    attn?: Contact;
    receiverEmail?: string;
    overdueNoticeEmail?: string;
    number?: string;
    reference?: string;
    /**
     * If the contact is not an employee
     */
    ourContact?: Contact;
    /**
     * If the contact is an employee
     */
    ourContactEmployee?: Employee;
    department?: Department;
    orderDate: string;
    project?: Project;
    /**
     * Comment to be displayed in the invoice based on this order. Can be also found in Invoice.invoiceComment on Invoice objects.
     */
    invoiceComment?: string;
    currency?: Currency;
    /**
     * Number of days/months in which invoices created from this order is due
     */
    invoicesDueIn?: number;
    /**
     * Set the time unit of invoicesDueIn. The special case RECURRING_DAY_OF_MONTH enables the due date to be fixed to a specific day of the month, in this case the fixed due date will automatically be set as standard on all invoices created from this order. Note that when RECURRING_DAY_OF_MONTH is set, the due date will be set to the last day of month if "31" is set in invoicesDueIn.
     */
    invoicesDueInType?: Order.invoicesDueInType;
    /**
     * Show account statement - open posts on invoices created from this order
     */
    isShowOpenPostsOnInvoices?: boolean;
    /**
     * Denotes if this order is closed. A closed order can no longer be invoiced unless it is opened again.
     */
    isClosed?: boolean;
    deliveryDate: string;
    /**
     * Delivery address of this order. This can be a new or existing address
     * (useful to know, especially if the delivery is to a private person: if 'deliveryAddress.name' is set, we ignore the state of 'customer.id')
     */
    deliveryAddress?: DeliveryAddress;
    deliveryComment?: string;
    isPrioritizeAmountsIncludingVat?: boolean;
    orderLineSorting?: Order.orderLineSorting;
    /**
     * Order lines tied to the order. New OrderLines may be embedded here, in some endpoints.
     */
    orderLines?: Array<OrderLine>;
    /**
     * If true, the order is a subscription, which enables periodical invoicing of order lines. First, create an order with isSubscription=true, then approve it for subscription invoicing with the :approveSubscriptionInvoice method.
     */
    isSubscription?: boolean;
    /**
     * Number of months/years the subscription shall run
     */
    subscriptionDuration?: number;
    /**
     * The time unit of subscriptionDuration
     */
    subscriptionDurationType?: Order.subscriptionDurationType;
    /**
     * Number of periods on each invoice
     */
    subscriptionPeriodsOnInvoice?: number;
    /**
     * The time unit of subscriptionPeriodsOnInvoice
     */
    readonly subscriptionPeriodsOnInvoiceType?: Order.subscriptionPeriodsOnInvoiceType;
    /**
     * Invoicing in advance/in arrears
     */
    subscriptionInvoicingTimeInAdvanceOrArrears?: Order.subscriptionInvoicingTimeInAdvanceOrArrears;
    /**
     * Number of days/months invoicing in advance/in arrears
     */
    subscriptionInvoicingTime?: number;
    /**
     * The time unit of subscriptionInvoicingTime
     */
    subscriptionInvoicingTimeType?: Order.subscriptionInvoicingTimeType;
    /**
     * Automatic invoicing. Starts when the subscription is approved
     */
    isSubscriptionAutoInvoicing?: boolean;
}

export namespace Order {

    /**
     * Set the time unit of invoicesDueIn. The special case RECURRING_DAY_OF_MONTH enables the due date to be fixed to a specific day of the month, in this case the fixed due date will automatically be set as standard on all invoices created from this order. Note that when RECURRING_DAY_OF_MONTH is set, the due date will be set to the last day of month if "31" is set in invoicesDueIn.
     */
    export enum invoicesDueInType {
        DAYS = 'DAYS',
        MONTHS = 'MONTHS',
        RECURRING_DAY_OF_MONTH = 'RECURRING_DAY_OF_MONTH',
    }

    export enum orderLineSorting {
        ID = 'ID',
        PRODUCT = 'PRODUCT',
        CUSTOM = 'CUSTOM',
    }

    /**
     * The time unit of subscriptionDuration
     */
    export enum subscriptionDurationType {
        MONTHS = 'MONTHS',
        YEAR = 'YEAR',
    }

    /**
     * The time unit of subscriptionPeriodsOnInvoice
     */
    export enum subscriptionPeriodsOnInvoiceType {
        MONTHS = 'MONTHS',
    }

    /**
     * Invoicing in advance/in arrears
     */
    export enum subscriptionInvoicingTimeInAdvanceOrArrears {
        ADVANCE = 'ADVANCE',
        ARREARS = 'ARREARS',
    }

    /**
     * The time unit of subscriptionInvoicingTime
     */
    export enum subscriptionInvoicingTimeType {
        DAYS = 'DAYS',
        MONTHS = 'MONTHS',
    }


}
