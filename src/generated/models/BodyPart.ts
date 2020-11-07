/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentDisposition } from './ContentDisposition';
import type { MediaType } from './MediaType';
import type { MessageBodyWorkers } from './MessageBodyWorkers';
import type { MultiPart } from './MultiPart';
import type { ParameterizedHeader } from './ParameterizedHeader';
import type { Providers } from './Providers';

export interface BodyPart {
    contentDisposition?: ContentDisposition;
    entity?: any;
    headers?: Record<string, Array<string>>;
    mediaType?: MediaType;
    messageBodyWorkers?: MessageBodyWorkers;
    parent?: MultiPart;
    providers?: Providers;
    parameterizedHeaders?: Record<string, Array<ParameterizedHeader>>;
}
