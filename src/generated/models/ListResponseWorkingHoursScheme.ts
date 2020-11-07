/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkingHoursScheme } from './WorkingHoursScheme';

export interface ListResponseWorkingHoursScheme {
    /**
     * [DEPRECATED] Indicates whether there are more values available. Note: The value is not exact
     */
    fullResultSize?: number;
    from?: number;
    count?: number;
    /**
     * Used to know if the paginated list has changed.
     */
    versionDigest?: string;
    values?: Array<WorkingHoursScheme>;
}
