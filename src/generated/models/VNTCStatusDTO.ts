/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface VNTCStatusDTO {
    readonly MessageId: string;
    readonly ExternalSenderId: string;
    readonly ExternalMessageId: string;
    readonly PartCount?: number;
    readonly Status: string;
    readonly Operator: string;
}
