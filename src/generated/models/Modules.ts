/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface Modules {
    /**
     * Not readable. Only for input.
     */
    accounting?: boolean;
    /**
     * Not readable. Only for input.
     */
    invoice?: boolean;
    /**
     * Not readable. Only for input.
     */
    salary?: boolean;
    salaryStartDate?: string;
    /**
     * Not readable. Only for input.
     */
    project?: boolean;
    ocr?: boolean;
    remit?: boolean;
    /**
     * Not readable. Only for input.
     */
    electronicVouchers?: boolean;
    /**
     * Not readable. Only for input.
     */
    electro?: boolean;
    /**
     * Not readable. Only for input.
     */
    vvs?: boolean;
    agro?: boolean;
    mamut?: boolean;
    /**
     * Only readable for now
     */
    readonly approveVoucher?: boolean;
}
