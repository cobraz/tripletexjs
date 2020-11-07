/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Posting } from './Posting';

export interface CloseGroup {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    date?: string;
    readonly postings?: Array<Posting>;
}
