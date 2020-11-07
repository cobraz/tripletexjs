/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface CompanyAuthorityDTO {
    hasCompanyAuthority?: CompanyAuthorityDTO.hasCompanyAuthority;
}

export namespace CompanyAuthorityDTO {

    export enum hasCompanyAuthority {
        DENIED = 'DENIED',
        MANUAL_CHECK = 'MANUAL_CHECK',
        ACCEPTED = 'ACCEPTED',
    }


}
