/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Document {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The name of the document.
     */
    fileName: string;
    /**
     * The size of the document in bytes.
     */
    readonly size?: number;
    /**
     * Type of the document
     */
    readonly mimeType?: string;
}
