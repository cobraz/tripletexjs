/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseWrapperEmployeeToken } from '../models/ResponseWrapperEmployeeToken';
import { request as __request } from '../core/request';

export class TokenEmployeeService {

    /**
     * Create an employee token. Only selected consumers are allowed
     * @param tokenName A user defined name for the new token
     * @param consumerName The name of the consumer
     * @param employeeId The id of the employee
     * @param companyOwned Is the key company owned
     * @param expirationDate Expiration date for the employeeToken
     * @result ResponseWrapperEmployeeToken successful operation
     * @throws ApiError
     */
    public static async tokenEmployeeCreateCreate({
        tokenName,
        consumerName,
        employeeId,
        companyOwned,
        expirationDate,
    }: {
        tokenName: string,
        consumerName: string,
        employeeId: number,
        companyOwned: boolean,
        expirationDate: string,
    }
): Promise<ResponseWrapperEmployeeToken> {
    const result = await __request({
        method: 'PUT',
        path: `/token/employee/:create`,
        query: {
            'tokenName': tokenName,
            'consumerName': consumerName,
            'employeeId': employeeId,
            'companyOwned': companyOwned,
            'expirationDate': expirationDate,
        },
    });
    return result.body;
}

}