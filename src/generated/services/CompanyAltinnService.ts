/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AltinnCompanyModule } from '../models/AltinnCompanyModule';
import type { ResponseWrapperAltinnCompanyModule } from '../models/ResponseWrapperAltinnCompanyModule';
import { request as __request } from '../core/request';

export class CompanyAltinnService {

    /**
     * [BETA] Find Altinn id for login in company.
     * @param fields Fields filter pattern
     * @result ResponseWrapperAltinnCompanyModule successful operation
     * @throws ApiError
     */
    public static async companySettingsAltinnSearch({
        fields,
    }: {
        fields?: string,
    }
): Promise<ResponseWrapperAltinnCompanyModule> {
    const result = await __request({
        method: 'GET',
        path: `/company/settings/altinn`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update AltInn id and password.
 * @param body Partial object describing what should be updated
 * @result ResponseWrapperAltinnCompanyModule successful operation
 * @throws ApiError
 */
public static async companySettingsAltinnPut({
    body,
}: {
    body?: AltinnCompanyModule,
}
): Promise<ResponseWrapperAltinnCompanyModule> {
    const result = await __request({
        method: 'PUT',
        path: `/company/settings/altinn`,
        body: body,
    });
    return result.body;
}

}