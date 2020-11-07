/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface MobileAppLogin {
    /**
     * Users username (email)
     */
    username: string;
    /**
     * Users password
     */
    password: string;
    /**
     * App secret
     */
    appSecret: string;
    /**
     * Optional mfa auth code
     */
    mfaCode?: number;
    /**
     * Expiration date for the combined token
     */
    expirationDate: string;
    /**
     * Optional employee ID. Default employee is used when null
     */
    employeeId?: number;
}
