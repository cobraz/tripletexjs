/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JobDetailDTO } from './JobDetailDTO';
import type { TriggerDTO } from './TriggerDTO';

export interface Job {
    name?: string;
    group?: string;
    stateful?: boolean;
    interruptable?: boolean;
    jobDetail?: JobDetailDTO;
    triggers?: Array<TriggerDTO>;
}
