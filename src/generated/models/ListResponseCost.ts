/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cost } from './Cost';

export interface ListResponseCost {
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
    values?: Array<Cost>;
}
