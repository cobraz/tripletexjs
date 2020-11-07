/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';

export interface Reminder {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Creation date of the invoice reminder.
     */
    readonly reminderDate?: string;
    /**
     * The fee part of the reminder, in the company's currency.
     */
    readonly charge?: number;
    /**
     * The fee part of the reminder, in the invoice currency.
     */
    readonly chargeCurrency?: number;
    /**
     * The total fee part of all reminders, in the company's currency.
     */
    readonly totalCharge?: number;
    /**
     * The total fee part of all reminders, in the invoice currency.
     */
    readonly totalChargeCurrency?: number;
    /**
     * The total amount to pay in reminder's currency.
     */
    readonly totalAmountCurrency?: number;
    /**
     * The interests part of the reminder.
     */
    readonly interests?: number;
    /**
     * The reminder interest rate.
     */
    readonly interestRate?: number;
    /**
     * The reminder term of payment date.
     */
    termOfPayment: string;
    /**
     * The reminder currency.
     */
    readonly currency?: Currency;
    type: Reminder.type;
    comment?: string;
    /**
     * KID - Kundeidentifikasjonsnummer.
     */
    kid?: string;
    bankAccountNumber?: string;
    bankAccountIBAN?: string;
    bankAccountSWIFT?: string;
    bank?: string;
}

export namespace Reminder {

    export enum type {
        SOFT_REMINDER = 'SOFT_REMINDER',
        REMINDER = 'REMINDER',
        NOTICE_OF_DEBT_COLLECTION = 'NOTICE_OF_DEBT_COLLECTION',
        DEBT_COLLECTION = 'DEBT_COLLECTION',
    }


}
