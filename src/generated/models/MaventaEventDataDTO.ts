/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface MaventaEventDataDTO {
    readonly invoice_id: string;
    readonly invoice_number: string;
    readonly destination: string;
    readonly recipient_name: string;
    readonly recipient_bid: string;
    readonly network: string;
    readonly id: string;
    readonly profiles: Array<string>;
    readonly error_message?: string;
}
