/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BodyPart } from './BodyPart';
import type { ContentDisposition } from './ContentDisposition';
import type { FormDataBodyPart } from './FormDataBodyPart';
import type { MediaType } from './MediaType';
import type { MessageBodyWorkers } from './MessageBodyWorkers';
import type { MultiPart } from './MultiPart';
import type { ParameterizedHeader } from './ParameterizedHeader';
import type { Providers } from './Providers';

export interface FormDataMultiPart {
    contentDisposition?: ContentDisposition;
    entity?: any;
    headers?: Record<string, Array<string>>;
    mediaType?: MediaType;
    messageBodyWorkers?: MessageBodyWorkers;
    parent?: MultiPart;
    providers?: Providers;
    bodyParts?: Array<BodyPart>;
    fields?: Record<string, Array<FormDataBodyPart>>;
    parameterizedHeaders?: Record<string, Array<ParameterizedHeader>>;
}
