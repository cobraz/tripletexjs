/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { ReportGroup } from './ReportGroup';

export interface Report {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The name of the report
     */
    name?: string;
    /**
     * Description
     */
    description?: string;
    /**
     * The report must have exactly two groups. The first specifies the columns, the second specifies the rows.
     */
    groups?: Array<ReportGroup>;
}
