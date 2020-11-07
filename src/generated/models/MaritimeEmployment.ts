/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface MaritimeEmployment {
    /**
     * Define the ship register. NIS: Norwegian International Ship Register, NOR: Norwegian Ordinary Ship Register, FOREIGN: Foreign Ship Register.
     */
    shipRegister?: MaritimeEmployment.shipRegister;
    /**
     * Define the ship type.
     */
    shipType?: MaritimeEmployment.shipType;
    /**
     * Define the trade area.
     */
    tradeArea?: MaritimeEmployment.tradeArea;
}

export namespace MaritimeEmployment {

    /**
     * Define the ship register. NIS: Norwegian International Ship Register, NOR: Norwegian Ordinary Ship Register, FOREIGN: Foreign Ship Register.
     */
    export enum shipRegister {
        NIS = 'NIS',
        NOR = 'NOR',
        FOREIGN = 'FOREIGN',
    }

    /**
     * Define the ship type.
     */
    export enum shipType {
        OTHER = 'OTHER',
        DRILLING_PLATFORM = 'DRILLING_PLATFORM',
        TOURIST = 'TOURIST',
    }

    /**
     * Define the trade area.
     */
    export enum tradeArea {
        DOMESTIC = 'DOMESTIC',
        FOREIGN = 'FOREIGN',
    }


}
