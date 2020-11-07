/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Change } from './Change';
import type { Currency } from './Currency';
import type { Posting } from './Posting';
import type { Voucher } from './Voucher';

export interface Payment {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly paymentDate?: string;
    readonly bookingDate?: string;
    readonly valueDate?: string;
    /**
     * In the specified currency.
     */
    readonly amountCurrency?: number;
    readonly currency?: Currency;
    readonly creditorBankName?: string;
    readonly creditorBankAddress?: string;
    readonly creditorBankPostalCode?: string;
    readonly creditorBankPostalCity?: string;
    /**
     * The payment status.NOT_APPROVED: Payment not approved yet.<br>APPROVED: Payment approved, but not yet sent to bank.<br>SENT_TO_AUTOPAY: Payment sent to bank.<br>RECEIVED_BY_BANK: Payment received by the bank.<br>ACCEPTED_BY_BANK: Payment that was accepted by the bank.<br>FAILED: Payment that failed.<br>CANCELLED: Cancelled payment.<br>SUCCESS: Payment that ended successfully.<br>
     */
    readonly status?: Payment.status;
    readonly isFinalStatus?: boolean;
    readonly isForeignPayment?: boolean;
    readonly isSalary?: boolean;
    readonly description?: string;
    /**
     * KID - Kundeidentifikasjonsnummer.
     */
    readonly kid?: string;
    readonly receiverReference?: string;
    /**
     * Vouchere that was paid.
     */
    readonly sourceVoucher?: Voucher;
    /**
     * The payment posting.
     */
    readonly postings?: Posting;
    /**
     * The payment account.
     */
    readonly account?: Account;
    /**
     * Amount specified in the currency of the bank agreements account.
     */
    readonly amountInAccountCurrency?: number;
}

export namespace Payment {

    /**
     * The payment status.NOT_APPROVED: Payment not approved yet.<br>APPROVED: Payment approved, but not yet sent to bank.<br>SENT_TO_AUTOPAY: Payment sent to bank.<br>RECEIVED_BY_BANK: Payment received by the bank.<br>ACCEPTED_BY_BANK: Payment that was accepted by the bank.<br>FAILED: Payment that failed.<br>CANCELLED: Cancelled payment.<br>SUCCESS: Payment that ended successfully.<br>
     */
    export enum status {
        NOT_APPROVED = 'NOT_APPROVED',
        APPROVED = 'APPROVED',
        SENT_TO_AUTOPAY = 'SENT_TO_AUTOPAY',
        RECEIVED_BY_BANK = 'RECEIVED_BY_BANK',
        ACCEPTED_BY_BANK = 'ACCEPTED_BY_BANK',
        FAILED = 'FAILED',
        CANCELLED = 'CANCELLED',
        SUCCESS = 'SUCCESS',
    }


}
