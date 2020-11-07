/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Change } from './Change';
import type { Inventory } from './Inventory';

export interface Stocktaking {
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly number?: number;
    date: string;
    comment?: string;
    /**
     * [Deprecated] Define the type of stoctaking.<br>ALL_PRODUCTS_WITH_INVENTORIES: Create a stocktaking for all products with inventories.<br>INCLUDE_PRODUCTS: Create a stocktaking which includes all products.<br>NO_PRODUCTS: Create a stocktaking without products.<br>If not specified, the value 'ALL_PRODUCTS_WITH_INVENTORIES' is used.
     */
    typeOfStocktaking?: Stocktaking.typeOfStocktaking;
    /**
     * The inventory this applies for
     */
    inventory: Inventory;
    isCompleted?: boolean;
}

export namespace Stocktaking {

    /**
     * [Deprecated] Define the type of stoctaking.<br>ALL_PRODUCTS_WITH_INVENTORIES: Create a stocktaking for all products with inventories.<br>INCLUDE_PRODUCTS: Create a stocktaking which includes all products.<br>NO_PRODUCTS: Create a stocktaking without products.<br>If not specified, the value 'ALL_PRODUCTS_WITH_INVENTORIES' is used.
     */
    export enum typeOfStocktaking {
        ALL_PRODUCTS_WITH_INVENTORIES = 'ALL_PRODUCTS_WITH_INVENTORIES',
        INCLUDE_PRODUCTS = 'INCLUDE_PRODUCTS',
        NO_PRODUCTS = 'NO_PRODUCTS',
    }


}
