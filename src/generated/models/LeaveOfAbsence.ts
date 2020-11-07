/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employment } from './Employment';

export interface LeaveOfAbsence {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employment?: Employment;
    /**
     * Existing leave of absence ID used by the current accounting system
     */
    leaveOfAbsenceId?: string;
    startDate: string;
    endDate?: string;
    percentage: number;
    isWageDeduction?: boolean;
    /**
     * Define the leave of absence type.
     */
    type?: LeaveOfAbsence.type;
}

export namespace LeaveOfAbsence {

    /**
     * Define the leave of absence type.
     */
    export enum type {
        LEAVE_OF_ABSENCE = 'LEAVE_OF_ABSENCE',
        FURLOUGH = 'FURLOUGH',
        PARENTAL_BENEFITS = 'PARENTAL_BENEFITS',
        MILITARY_SERVICE = 'MILITARY_SERVICE',
        EDUCATIONAL = 'EDUCATIONAL',
        COMPASSIONATE = 'COMPASSIONATE',
    }


}
