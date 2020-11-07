/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Employee } from './Employee';

export interface NextOfKin {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee?: Employee;
    name: string;
    phoneNumber: string;
    address?: string;
    /**
     * Define the employee's next of kin relationtype.<br>SPOUSE<br>PARTNER<br>PARENT<br>CHILD<br>SIBLING
     */
    typeOfRelationship?: NextOfKin.typeOfRelationship;
}

export namespace NextOfKin {

    /**
     * Define the employee's next of kin relationtype.<br>SPOUSE<br>PARTNER<br>PARENT<br>CHILD<br>SIBLING
     */
    export enum typeOfRelationship {
        SPOUSE = 'SPOUSE',
        PARTNER = 'PARTNER',
        PARENT = 'PARENT',
        CHILD = 'CHILD',
        SIBLING = 'SIBLING',
    }


}
