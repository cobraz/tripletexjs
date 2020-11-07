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
import type { Invoice } from './Invoice';
import type { ProjectActivity } from './ProjectActivity';
import type { ProjectCategory } from './ProjectCategory';
import type { ProjectHourlyRate } from './ProjectHourlyRate';
import type { ProjectOrderLine } from './ProjectOrderLine';
import type { ProjectParticipant } from './ProjectParticipant';
import type { VatType } from './VatType';

export interface Project {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    number?: string;
    readonly displayName?: string;
    description?: string;
    projectManager: Employee;
    department?: Department;
    mainProject?: Project;
    startDate: string;
    endDate?: string;
    /**
     * The project's customer
     */
    customer?: Customer;
    isClosed?: boolean;
    isReadyForInvoicing?: boolean;
    isInternal: boolean;
    readonly isOffer?: boolean;
    /**
     * Project is fixed price if set to true, hourly rate if set to false.
     */
    isFixedPrice?: boolean;
    projectCategory?: ProjectCategory;
    readonly deliveryAddress?: DeliveryAddress;
    /**
     * Defines project name presentation in overviews.
     */
    displayNameFormat?: Project.displayNameFormat;
    externalAccountsNumber?: string;
    /**
     * Project discount percentage.
     */
    readonly discountPercentage?: number;
    /**
     * The default vat type for this project.
     */
    vatType?: VatType;
    /**
     * Fixed price amount, in the project's currency.
     */
    fixedprice?: number;
    readonly contributionMarginPercent?: number;
    readonly numberOfSubProjects?: number;
    readonly numberOfProjectParticipants?: number;
    /**
     * Order lines tied to the order
     */
    readonly orderLines?: Array<ProjectOrderLine>;
    currency?: Currency;
    /**
     * Set mark-up (%) for order lines.
     */
    markUpOrderLines?: number;
    /**
     * Set mark-up (%) for fees earned.
     */
    markUpFeesEarned?: number;
    /**
     * Set to true if an hourly rate project has a price ceiling.
     */
    isPriceCeiling?: boolean;
    /**
     * Price ceiling amount, in the project's currency.
     */
    priceCeilingAmount?: number;
    /**
     * Project Rate Types tied to the project.
     */
    projectHourlyRates?: Array<ProjectHourlyRate>;
    /**
     * Set to true if only project participants can register information on the project
     */
    forParticipantsOnly?: boolean;
    /**
     * Link to individual project participants.
     */
    participants?: Array<ProjectParticipant>;
    readonly contact?: Contact;
    /**
     * Invoicing plans tied to the project
     */
    readonly invoicingPlan?: Array<Invoice>;
    readonly preliminaryInvoice?: Invoice;
    /**
     * Set to true if a general project activity must be linked to project to allow time tracking.
     */
    generalProjectActivitiesPerProjectOnly?: boolean;
    /**
     * Project Activities
     */
    projectActivities?: Array<ProjectActivity>;
    readonly hierarchyNameAndNumber?: string;
}

export namespace Project {

    /**
     * Defines project name presentation in overviews.
     */
    export enum displayNameFormat {
        NAME_STANDARD = 'NAME_STANDARD',
        NAME_INCL_CUSTOMER_NAME = 'NAME_INCL_CUSTOMER_NAME',
        NAME_INCL_PARENT_NAME = 'NAME_INCL_PARENT_NAME',
        NAME_INCL_PARENT_NUMBER = 'NAME_INCL_PARENT_NUMBER',
        NAME_INCL_PARENT_NAME_AND_NUMBER = 'NAME_INCL_PARENT_NAME_AND_NUMBER',
    }


}
