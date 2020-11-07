/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface SalesForceOpportunity {
    /**
     * A nested map of all active sales modules. The key in the outer map is the sales module, whilest the inner map contains the different pricing types for the given sales module. A pricing type could be PER_USE(10).
     */
    allPrices?: Record<string, Record<string, number>>;
    /**
     * The total startup price for users of category 1.
     */
    sumStartupCategory1Users?: number;
    /**
     * The total price per monthly price for users of category 1.
     */
    sumServiceCategory1Users?: number;
    /**
     * The startup list price per user.
     */
    listPriceCategory1UserStartup?: number;
    /**
     * The monthly list price per user.
     */
    listPriceCategory1UserService?: number;
    /**
     * The startup price for the company.
     */
    sumStartup?: number;
    /**
     * The monthly price for the company.
     */
    sumService?: number;
    /**
     * The total startup price for additional services.
     */
    sumAdditionalServices?: number;
    /**
     * The initial provision for the accountant of the startup price (percentage)
     */
    accountantStartupProvision?: number;
    /**
     * The monthly provision for the accountant of the monthly price (percentage)
     */
    accountantMonthlyProvision?: number;
    /**
     * The number of users prepaid when creating the company.
     */
    noOfUsersPrepaid?: number;
    /**
     * The number of users included for free in the purchased module.
     */
    noOfUsersIncluded?: number;
}
