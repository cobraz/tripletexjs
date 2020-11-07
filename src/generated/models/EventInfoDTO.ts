/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WebHookWrapper } from './WebHookWrapper';

export interface EventInfoDTO {
    name?: string;
    description?: string;
    payloadModel?: string;
    examples?: Array<WebHookWrapper>;
}
