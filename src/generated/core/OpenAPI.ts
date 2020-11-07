/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
interface Config {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    TOKEN: string | (() => Promise<string>);
}

export const OpenAPI: Config = {
    BASE: 'https://tripletex.no/v2',
    VERSION: '2.54.8',
    WITH_CREDENTIALS: false,
    TOKEN: '',
};