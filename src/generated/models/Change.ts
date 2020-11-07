/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface Change {
    employeeId?: number;
    timestamp?: string;
    changeType?: Change.changeType;
    periodReopened?: string;
    periodLocked?: string;
}

export namespace Change {

    export enum changeType {
        CREATE = 'CREATE',
        UPDATE = 'UPDATE',
        DELETE = 'DELETE',
        LOCKED = 'LOCKED',
        REOPENED = 'REOPENED',
        DO_NOT_SHOW = 'DO_NOT_SHOW',
    }


}
