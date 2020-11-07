/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { OrderLine } from './OrderLine';
import type { Posting } from './Posting';

export interface OrderLinePostingDTO {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    posting: Posting;
    orderLine?: OrderLine;
}
