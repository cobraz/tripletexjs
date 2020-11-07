/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface FormDataContentDisposition {
    type?: string;
    parameters?: Record<string, string>;
    fileName?: string;
    creationDate?: string;
    modificationDate?: string;
    readDate?: string;
    size?: number;
    name?: string;
}
