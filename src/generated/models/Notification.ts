/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Notification {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    date: string;
    title: string;
    message: string;
    type: string;
    category?: string;
    link?: string;
}
