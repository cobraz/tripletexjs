/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface ProjectPeriodHourlyReport {
    readonly chargeableHours?: number;
    readonly nonChargeableHours?: number;
    readonly approvedButUnchargedHours?: number;
    readonly nonApprovedHours?: number;
    readonly registeredHours?: number;
}
