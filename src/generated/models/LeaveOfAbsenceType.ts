/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface LeaveOfAbsenceType {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Defines the leave of absence type option.
     */
    leaveOfAbsenceType: LeaveOfAbsenceType.leaveOfAbsenceType;
    nameNO?: string;
    code?: string;
}

export namespace LeaveOfAbsenceType {

    /**
     * Defines the leave of absence type option.
     */
    export enum leaveOfAbsenceType {
        LEAVE_OF_ABSENCE = 'LEAVE_OF_ABSENCE',
        FURLOUGH = 'FURLOUGH',
        PARENTAL_BENEFITS = 'PARENTAL_BENEFITS',
        MILITARY_SERVICE = 'MILITARY_SERVICE',
        EDUCATIONAL = 'EDUCATIONAL',
        COMPASSIONATE = 'COMPASSIONATE',
    }


}
