/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiValidationMessage } from './ApiValidationMessage';

export interface ApiError {
    status?: number;
    code?: number;
    message?: string;
    link?: string;
    developerMessage?: string;
    validationMessages?: Array<ApiValidationMessage>;
    requestId?: string;
}
