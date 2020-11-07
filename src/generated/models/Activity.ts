/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Activity {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
    number?: string;
    description?: string;
    /**
     * PROJECT_SPECIFIC_ACTIVITY are made via project/projectactivity, as they must be part of a project.
     */
    activityType?: Activity.activityType;
    /**
     * Manipulate these with ActivityType
     */
    readonly isProjectActivity?: boolean;
    /**
     * Manipulate these with ActivityType
     */
    readonly isGeneral?: boolean;
    /**
     * Manipulate these with ActivityType
     */
    readonly isTask?: boolean;
    readonly isDisabled?: boolean;
    isChargeable?: boolean;
    rate?: number;
}

export namespace Activity {

    /**
     * PROJECT_SPECIFIC_ACTIVITY are made via project/projectactivity, as they must be part of a project.
     */
    export enum activityType {
        GENERAL_ACTIVITY = 'GENERAL_ACTIVITY',
        PROJECT_GENERAL_ACTIVITY = 'PROJECT_GENERAL_ACTIVITY',
        PROJECT_SPECIFIC_ACTIVITY = 'PROJECT_SPECIFIC_ACTIVITY',
        TASK = 'TASK',
    }


}
