/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Change } from './Change';
import type { CustomerCategory } from './CustomerCategory';
import type { DeliveryAddress } from './DeliveryAddress';
import type { Employee } from './Employee';

export interface Supplier {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    organizationNumber?: string;
    supplierNumber?: number;
    customerNumber?: number;
    readonly isSupplier?: boolean;
    /**
     * Determine if the supplier is also a customer
     */
    isCustomer?: boolean;
    readonly isInactive?: boolean;
    email?: string;
    /**
     * List of the bank account numbers for this supplier.  Norwegian bank account numbers only.
     */
    bankAccounts?: Array<string>;
    invoiceEmail?: string;
    /**
     * The email address of the customer where the noticing emails are sent in case of an overdue
     */
    overdueNoticeEmail?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    description?: string;
    isPrivateIndividual?: boolean;
    showProducts?: boolean;
    readonly accountManager?: Employee;
    postalAddress?: Address;
    physicalAddress?: Address;
    deliveryAddress?: DeliveryAddress;
    /**
     * Category 1 of this supplier
     */
    category1?: CustomerCategory;
    /**
     * Category 2 of this supplier
     */
    category2?: CustomerCategory;
    /**
     * Category 3 of this supplier
     */
    category3?: CustomerCategory;
}
