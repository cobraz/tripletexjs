/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface Delete {
    /**
     * Is the delete operation available for this Voucher?
     */
    readonly available?: boolean;
    /**
     * If the delete operation is not available then this is a list of reasons why. Otherwise the list will be empty
     */
    readonly reasons?: Array<string>;
}
