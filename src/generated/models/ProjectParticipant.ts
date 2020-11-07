/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';
import type { Project } from './Project';

export interface ProjectParticipant {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    project?: Project;
    employee?: Employee;
    adminAccess?: boolean;
}
