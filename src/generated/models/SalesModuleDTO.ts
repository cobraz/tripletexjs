/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface SalesModuleDTO {
    name: SalesModuleDTO.name;
    costStartDate?: string;
}

export namespace SalesModuleDTO {

    export enum name {
        MAMUT = 'MAMUT',
        MAMUT_WITH_WAGE = 'MAMUT_WITH_WAGE',
        AGRO_LICENCE = 'AGRO_LICENCE',
        AGRO_CLIENT = 'AGRO_CLIENT',
        AGRO_DOCUMENT_CENTER = 'AGRO_DOCUMENT_CENTER',
        AGRO_INVOICE = 'AGRO_INVOICE',
        AGRO_WAGE = 'AGRO_WAGE',
        NO1TS = 'NO1TS',
        NO1TS_TRAVELREPORT = 'NO1TS_TRAVELREPORT',
        NO1TS_ACCOUNTING = 'NO1TS_ACCOUNTING',
    }


}
