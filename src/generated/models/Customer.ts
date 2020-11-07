/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Change } from './Change';
import type { CustomerCategory } from './CustomerCategory';
import type { DeliveryAddress } from './DeliveryAddress';
import type { Employee } from './Employee';

export interface Customer {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    organizationNumber?: string;
    supplierNumber?: number;
    customerNumber?: number;
    /**
     * Defines if the customer is also a supplier.
     */
    isSupplier?: boolean;
    readonly isCustomer?: boolean;
    readonly isInactive?: boolean;
    accountManager?: Employee;
    email?: string;
    invoiceEmail?: string;
    /**
     * The email address of the customer where the noticing emails are sent in case of an overdue
     */
    overdueNoticeEmail?: string;
    /**
     * List of the bank account numbers for this customer. Norwegian bank account numbers only.
     */
    bankAccounts?: Array<string>;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    description?: string;
    language?: Customer.language;
    isPrivateIndividual?: boolean;
    /**
     * Enables various orders on one customer invoice.
     */
    singleCustomerInvoice?: boolean;
    /**
     * Define the invoicing method for the customer.<br>EMAIL: Send invoices as email.<br>EHF: Send invoices as EHF.<br>EFAKTURA: Send invoices as EFAKTURA.<br>VIPPS: Send invoices through VIPPS.<br>PAPER: Send invoices as paper invoice.<br>MANUAL: User will have to send invocie manually.<br>
     */
    invoiceSendMethod?: Customer.invoiceSendMethod;
    /**
     * Define the invoice attachment type for emailing to the customer.<br>LINK: Send invoice as link in email.<br>ATTACHMENT: Send invoice as attachment in email.<br>
     */
    emailAttachmentType?: Customer.emailAttachmentType;
    postalAddress?: Address;
    physicalAddress?: Address;
    deliveryAddress?: DeliveryAddress;
    /**
     * Category 1 of this customer
     */
    category1?: CustomerCategory;
    /**
     * Category 2 of this customer
     */
    category2?: CustomerCategory;
    /**
     * Category 3 of this customer
     */
    category3?: CustomerCategory;
    /**
     * Number of days/months in which invoices created from this customer is due
     */
    invoicesDueIn?: number;
    /**
     * Set the time unit of invoicesDueIn. The special case RECURRING_DAY_OF_MONTH enables the due date to be fixed to a specific day of the month, in this case the fixed due date will automatically be set as standard on all invoices created from this customer. Note that when RECURRING_DAY_OF_MONTH is set, the due date will be set to the last day of month if "31" is set in invoicesDueIn.
     */
    invoicesDueInType?: Customer.invoicesDueInType;
}

export namespace Customer {

    export enum language {
        NO = 'NO',
        EN = 'EN',
        SV = 'SV',
    }

    /**
     * Define the invoicing method for the customer.<br>EMAIL: Send invoices as email.<br>EHF: Send invoices as EHF.<br>EFAKTURA: Send invoices as EFAKTURA.<br>VIPPS: Send invoices through VIPPS.<br>PAPER: Send invoices as paper invoice.<br>MANUAL: User will have to send invocie manually.<br>
     */
    export enum invoiceSendMethod {
        EMAIL = 'EMAIL',
        EHF = 'EHF',
        EFAKTURA = 'EFAKTURA',
        VIPPS = 'VIPPS',
        PAPER = 'PAPER',
        MANUAL = 'MANUAL',
    }

    /**
     * Define the invoice attachment type for emailing to the customer.<br>LINK: Send invoice as link in email.<br>ATTACHMENT: Send invoice as attachment in email.<br>
     */
    export enum emailAttachmentType {
        LINK = 'LINK',
        ATTACHMENT = 'ATTACHMENT',
    }

    /**
     * Set the time unit of invoicesDueIn. The special case RECURRING_DAY_OF_MONTH enables the due date to be fixed to a specific day of the month, in this case the fixed due date will automatically be set as standard on all invoices created from this customer. Note that when RECURRING_DAY_OF_MONTH is set, the due date will be set to the last day of month if "31" is set in invoicesDueIn.
     */
    export enum invoicesDueInType {
        DAYS = 'DAYS',
        MONTHS = 'MONTHS',
        RECURRING_DAY_OF_MONTH = 'RECURRING_DAY_OF_MONTH',
    }


}
