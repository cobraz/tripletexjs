/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { SessionToken } from "../models/SessionToken";

 
 
interface Config {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    USERNAME: string | (() => Promise<string>);
    TOKEN: SessionToken | string | (() => Promise<SessionToken | string>);
}

export const OpenAPI: Config = {
    BASE: 'https://tripletex.no/v2',
    VERSION: '2.54.8',
    WITH_CREDENTIALS: false,
    USERNAME: '',
    TOKEN: '',
};