/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Currency } from './Currency';

export interface CurrencyExchangeRate {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    targetCurrency: Currency;
    sourceCurrency: Currency;
    rate?: number;
    /**
     * Source of exchange rates, i.e Norges Bank
     */
    source?: CurrencyExchangeRate.source;
    date?: string;
}

export namespace CurrencyExchangeRate {

    /**
     * Source of exchange rates, i.e Norges Bank
     */
    export enum source {
        NORGES_BANK = 'NORGES_BANK',
        HALLONEN = 'HALLONEN',
    }


}
