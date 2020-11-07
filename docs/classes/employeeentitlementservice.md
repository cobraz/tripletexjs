[tripletexjs](../README.md) › [EmployeeEntitlementService](employeeentitlementservice.md)

# Class: EmployeeEntitlementService

## Hierarchy

* **EmployeeEntitlementService**

## Index

### Methods

* [employeeEntitlementClientClient](employeeentitlementservice.md#static-employeeentitlementclientclient)
* [employeeEntitlementGet](employeeentitlementservice.md#static-employeeentitlementget)
* [employeeEntitlementGrantClientEntitlementsByTemplateGrantClientEntitlementsByTemplate](employeeentitlementservice.md#static-employeeentitlementgrantcliententitlementsbytemplategrantcliententitlementsbytemplate)
* [employeeEntitlementGrantEntitlementsByTemplateGrantEntitlementsByTemplate](employeeentitlementservice.md#static-employeeentitlementgrantentitlementsbytemplategrantentitlementsbytemplate)
* [employeeEntitlementSearch](employeeentitlementservice.md#static-employeeentitlementsearch)

## Methods

### `Static` employeeEntitlementClientClient

▸ **employeeEntitlementClientClient**(`__namedParameters`: object): *Promise‹[ListResponseEntitlement](../interfaces/listresponseentitlement.md)›*

[BETA] Find all entitlements at client for user.

**`result`** ListResponseEntitlement successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`customerId` | number | - | Client ID |
`employeeId` | number | - | Employee ID. Defaults to ID of token owner. |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEntitlement](../interfaces/listresponseentitlement.md)›*

___

### `Static` employeeEntitlementGet

▸ **employeeEntitlementGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperEntitlement](../interfaces/responsewrapperentitlement.md)›*

Get entitlement by ID.

**`result`** ResponseWrapperEntitlement successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEntitlement](../interfaces/responsewrapperentitlement.md)›*

___

### `Static` employeeEntitlementGrantClientEntitlementsByTemplateGrantClientEntitlementsByTemplate

▸ **employeeEntitlementGrantClientEntitlementsByTemplateGrantClientEntitlementsByTemplate**(`__namedParameters`: object): *Promise‹any›*

[BETA] Update employee entitlements in client account.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`addToExisting` | boolean | false | Add template to existing entitlements |
`customerId` | number | - | Client ID |
`employeeId` | number | - | Employee ID |
`template` | "NONE_PRIVILEGES" &#124; "STANDARD_PRIVILEGES_ACCOUNTANT" &#124; "STANDARD_PRIVILEGES_AUDITOR" &#124; "ALL_PRIVILEGES" &#124; "AGRO_READ_ONLY" &#124; "AGRO_READ_APPROVE" &#124; "AGRO_READ_WRITE" &#124; "AGRO_READ_WRITE_APPROVE" &#124; "MAMUT_PAYROLL_ADMIN" &#124; "MAMUT_PAYROLL_CLERK" &#124; "AGRO_PAYROLL_ADMIN" &#124; "AGRO_PAYROLL_CLERK" &#124; "AGRO_INVOICE_ADMIN" &#124; "AGRO_INVOICE_CLERK" | - | Template |

**Returns:** *Promise‹any›*

___

### `Static` employeeEntitlementGrantEntitlementsByTemplateGrantEntitlementsByTemplate

▸ **employeeEntitlementGrantEntitlementsByTemplateGrantEntitlementsByTemplate**(`__namedParameters`: object): *Promise‹any›*

[BETA] Update employee entitlements.
The user will only receive the entitlements which are possible with the registered user type

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Employee ID |
`template` | "NONE_PRIVILEGES" &#124; "ALL_PRIVILEGES" &#124; "INVOICING_MANAGER" &#124; "PERSONELL_MANAGER" &#124; "ACCOUNTANT" &#124; "AUDITOR" &#124; "DEPARTMENT_LEADER" &#124; "MAMUT_USER_ADMIN" &#124; "MAMUT_USER" | Template |

**Returns:** *Promise‹any›*

___

### `Static` employeeEntitlementSearch

▸ **employeeEntitlementSearch**(`__namedParameters`: object): *Promise‹[ListResponseEntitlement](../interfaces/listresponseentitlement.md)›*

Find all entitlements for user.

**`result`** ListResponseEntitlement successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | number | - | Employee ID. Defaults to ID of token owner. |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEntitlement](../interfaces/listresponseentitlement.md)›*
