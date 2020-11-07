/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface ProjectControlForm {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    title: string;
    comment: string;
    completed?: boolean;
    readonly signatureRequired?: boolean;
    readonly signed?: boolean;
    readonly controlForm?: string;
}
