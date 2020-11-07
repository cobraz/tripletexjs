/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export interface Link {
    rel?: string;
    type?: Link.type;
    href?: string;
}

export namespace Link {

    export enum type {
        POST = 'POST',
        PUT = 'PUT',
        GET = 'GET',
        DELETE = 'DELETE',
    }


}
