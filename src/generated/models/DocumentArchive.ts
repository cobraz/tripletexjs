/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface DocumentArchive {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The name of the document.
     */
    fileName: string;
    /**
     * The size of the document in readable format.
     */
    readonly size?: number;
    archiveDate?: string;
    /**
     * Type of the document
     */
    mimeType: string;
}
