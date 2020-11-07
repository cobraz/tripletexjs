/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface MediaType {
    type?: string;
    subtype?: string;
    parameters?: Record<string, string>;
    wildcardType?: boolean;
    wildcardSubtype?: boolean;
}
