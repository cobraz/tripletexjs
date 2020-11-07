/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Banner {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly bannerType?: string;
    readonly title?: string;
    readonly message?: string;
    readonly button?: string;
    readonly link?: string;
    readonly tag?: string;
    readonly done?: boolean;
    readonly cancellable?: boolean;
}
