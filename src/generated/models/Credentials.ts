/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface Credentials {
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
}
