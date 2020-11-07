/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface BankOnboardingStepDTO {
    id?: number;
    state?: BankOnboardingStepDTO.state;
    accessible?: boolean;
}

export namespace BankOnboardingStepDTO {

    export enum state {
        INCOMPLETE = 'INCOMPLETE',
        COMPLETED = 'COMPLETED',
        PROCESSING = 'PROCESSING',
    }


}
