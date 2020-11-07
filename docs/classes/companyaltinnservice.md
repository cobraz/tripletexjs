[tripletexjs](../README.md) › [CompanyAltinnService](companyaltinnservice.md)

# Class: CompanyAltinnService

## Hierarchy

* **CompanyAltinnService**

## Index

### Methods

* [companySettingsAltinnPut](companyaltinnservice.md#static-companysettingsaltinnput)
* [companySettingsAltinnSearch](companyaltinnservice.md#static-companysettingsaltinnsearch)

## Methods

### `Static` companySettingsAltinnPut

▸ **companySettingsAltinnPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperAltinnCompanyModule](../interfaces/responsewrapperaltinncompanymodule.md)›*

[BETA] Update AltInn id and password.

**`result`** ResponseWrapperAltinnCompanyModule successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [AltinnCompanyModule](../interfaces/altinncompanymodule.md) | Partial object describing what should be updated |

**Returns:** *Promise‹[ResponseWrapperAltinnCompanyModule](../interfaces/responsewrapperaltinncompanymodule.md)›*

___

### `Static` companySettingsAltinnSearch

▸ **companySettingsAltinnSearch**(`__namedParameters`: object): *Promise‹[ResponseWrapperAltinnCompanyModule](../interfaces/responsewrapperaltinncompanymodule.md)›*

[BETA] Find Altinn id for login in company.

**`result`** ResponseWrapperAltinnCompanyModule successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperAltinnCompanyModule](../interfaces/responsewrapperaltinncompanymodule.md)›*
