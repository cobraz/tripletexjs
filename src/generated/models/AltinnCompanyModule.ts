/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface AltinnCompanyModule {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    altInnId: number;
    altInnPassword: string;
}
