/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Department } from './Department';
import type { Employee } from './Employee';
import type { Project } from './Project';
import type { Voucher } from './Voucher';

export interface VoucherApprovalListElement {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The voucher.
     */
    readonly voucher?: Voucher;
    readonly employee?: Employee;
    readonly status?: number;
    readonly organisationLevel?: number;
    readonly department?: Department;
    readonly project?: Project;
    comment?: string;
    commentFromOriginator?: string;
    readonly actionDate?: string;
}
