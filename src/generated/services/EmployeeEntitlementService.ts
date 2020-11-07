/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListResponseEntitlement } from '../models/ListResponseEntitlement';
import type { ResponseWrapperEntitlement } from '../models/ResponseWrapperEntitlement';
import { request as __request } from '../core/request';

export class EmployeeEntitlementService {

    /**
     * Find all entitlements for user.
     * @param employeeId Employee ID. Defaults to ID of token owner.
     * @param from From index
     * @param count Number of elements to return
     * @param sorting Sorting pattern
     * @param fields Fields filter pattern
     * @result ListResponseEntitlement successful operation
     * @throws ApiError
     */
    public static async employeeEntitlementSearch({
        employeeId,
        from,
        count = 1000,
        sorting,
        fields,
    }: {
        employeeId?: number,
        from?: number,
        count?: number,
        sorting?: string,
        fields?: string,
    }
): Promise<ListResponseEntitlement> {
    const result = await __request({
        method: 'GET',
        path: `/employee/entitlement`,
        query: {
            'employeeId': employeeId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * [BETA] Update employee entitlements in client account.
 * @param employeeId Employee ID
 * @param customerId Client ID
 * @param template Template
 * @param addToExisting Add template to existing entitlements
 * @result any successful operation
 * @throws ApiError
 */
public static async employeeEntitlementGrantClientEntitlementsByTemplateGrantClientEntitlementsByTemplate({
    employeeId,
    customerId,
    template,
    addToExisting = false,
}: {
    employeeId: number,
    customerId: number,
    template: 'NONE_PRIVILEGES' | 'STANDARD_PRIVILEGES_ACCOUNTANT' | 'STANDARD_PRIVILEGES_AUDITOR' | 'ALL_PRIVILEGES' | 'AGRO_READ_ONLY' | 'AGRO_READ_APPROVE' | 'AGRO_READ_WRITE' | 'AGRO_READ_WRITE_APPROVE' | 'MAMUT_PAYROLL_ADMIN' | 'MAMUT_PAYROLL_CLERK' | 'AGRO_PAYROLL_ADMIN' | 'AGRO_PAYROLL_CLERK' | 'AGRO_INVOICE_ADMIN' | 'AGRO_INVOICE_CLERK',
    addToExisting?: boolean,
}
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/entitlement/:grantClientEntitlementsByTemplate`,
        query: {
            'employeeId': employeeId,
            'customerId': customerId,
            'template': template,
            'addToExisting': addToExisting,
        },
    });
    return result.body;
}

/**
 * [BETA] Update employee entitlements.
 * The user will only receive the entitlements which are possible with the registered user type
 * @param employeeId Employee ID
 * @param template Template
 * @result any successful operation
 * @throws ApiError
 */
public static async employeeEntitlementGrantEntitlementsByTemplateGrantEntitlementsByTemplate({
    employeeId,
    template,
}: {
    employeeId: number,
    template: 'NONE_PRIVILEGES' | 'ALL_PRIVILEGES' | 'INVOICING_MANAGER' | 'PERSONELL_MANAGER' | 'ACCOUNTANT' | 'AUDITOR' | 'DEPARTMENT_LEADER' | 'MAMUT_USER_ADMIN' | 'MAMUT_USER',
}
): Promise<any> {
    const result = await __request({
        method: 'PUT',
        path: `/employee/entitlement/:grantEntitlementsByTemplate`,
        query: {
            'employeeId': employeeId,
            'template': template,
        },
    });
    return result.body;
}

/**
 * [BETA] Find all entitlements at client for user.
 * @param employeeId Employee ID. Defaults to ID of token owner.
 * @param customerId Client ID
 * @param from From index
 * @param count Number of elements to return
 * @param sorting Sorting pattern
 * @param fields Fields filter pattern
 * @result ListResponseEntitlement successful operation
 * @throws ApiError
 */
public static async employeeEntitlementClientClient({
    employeeId,
    customerId,
    from,
    count = 1000,
    sorting,
    fields,
}: {
    employeeId?: number,
    customerId?: number,
    from?: number,
    count?: number,
    sorting?: string,
    fields?: string,
}
): Promise<ListResponseEntitlement> {
    const result = await __request({
        method: 'GET',
        path: `/employee/entitlement/client`,
        query: {
            'employeeId': employeeId,
            'customerId': customerId,
            'from': from,
            'count': count,
            'sorting': sorting,
            'fields': fields,
        },
    });
    return result.body;
}

/**
 * Get entitlement by ID.
 * @param id Element ID
 * @param fields Fields filter pattern
 * @result ResponseWrapperEntitlement successful operation
 * @throws ApiError
 */
public static async employeeEntitlementGet({
    id,
    fields,
}: {
    id: number,
    fields?: string,
}
): Promise<ResponseWrapperEntitlement> {
    const result = await __request({
        method: 'GET',
        path: `/employee/entitlement/${id}`,
        query: {
            'fields': fields,
        },
    });
    return result.body;
}

}