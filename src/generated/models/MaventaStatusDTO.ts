/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaventaEventDataDTO } from './MaventaEventDataDTO';

export interface MaventaStatusDTO {
    readonly event: string;
    readonly company_id: string;
    readonly event_timestamp: string;
    readonly event_data: MaventaEventDataDTO;
}
