/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';

export interface Bank {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Bank name
     */
    readonly name?: string;
    /**
     * Bank statement file formats supported.
     */
    readonly bankStatementFileFormatSupport?: Array<'DNB_CSV' | 'EIKA_TELEPAY' | 'SPAREBANK1_TELEPAY' | 'VISMA_ACCOUNT_STATEMENT' | 'HANDELSBANKEN_TELEPAY' | 'SPAREBANKEN_VEST_TELEPAY' | 'NORDEA_CSV' | 'TRANSFERWISE' | 'SPAREBANKEN_SOR_TELEPAY' | 'SPAREBANKEN_OST_TELEPAY' | 'DANSKE_BANK_CSV' | 'CULTURA_BANK_TELEPAY'>;
    /**
     * Register numbers belonging to bank.
     */
    readonly registerNumbers?: Array<number>;
}
