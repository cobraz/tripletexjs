[tripletexjs](../README.md) › [CompanyService](companyservice.md)

# Class: CompanyService

## Hierarchy

* **CompanyService**

## Index

### Methods

* [companyDivisionsGetDivisions](companyservice.md#static-companydivisionsgetdivisions)
* [companyGet](companyservice.md#static-companyget)
* [companyPut](companyservice.md#static-companyput)
* [companyWithLoginAccessGetWithLoginAccess](companyservice.md#static-companywithloginaccessgetwithloginaccess)

## Methods

### `Static` companyDivisionsGetDivisions

▸ **companyDivisionsGetDivisions**(`__namedParameters`: object): *Promise‹[ListResponseCompany](../interfaces/listresponsecompany.md)›*

[DEPRECATED] Find divisions.

**`result`** ListResponseCompany successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseCompany](../interfaces/listresponsecompany.md)›*

___

### `Static` companyGet

▸ **companyGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperCompany](../interfaces/responsewrappercompany.md)›*

Find company by ID.

**`result`** ResponseWrapperCompany successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCompany](../interfaces/responsewrappercompany.md)›*

___

### `Static` companyPut

▸ **companyPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperCompany](../interfaces/responsewrappercompany.md)›*

Update company information.

**`result`** ResponseWrapperCompany successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Company](../modules/company.md) | Partial object describing what should be updated |

**Returns:** *Promise‹[ResponseWrapperCompany](../interfaces/responsewrappercompany.md)›*

___

### `Static` companyWithLoginAccessGetWithLoginAccess

▸ **companyWithLoginAccessGetWithLoginAccess**(`__namedParameters`: object): *Promise‹[ListResponseCompany](../interfaces/listresponsecompany.md)›*

Returns client customers (with accountant/auditor relation) where the current user has login access (proxy login).

**`result`** ListResponseCompany successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseCompany](../interfaces/listresponsecompany.md)›*
