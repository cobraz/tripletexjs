/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BankOnboardingAccessRequestDTO } from './BankOnboardingAccessRequestDTO';
import type { BankOnboardingStepDTO } from './BankOnboardingStepDTO';

export interface BankOnboardingDTO {
    steps?: Array<BankOnboardingStepDTO>;
    accessRequest?: BankOnboardingAccessRequestDTO;
    hasFullAccess?: boolean;
    companyOrgnr?: string;
    lockedCurrenciesMap?: Record<string, boolean>;
}
