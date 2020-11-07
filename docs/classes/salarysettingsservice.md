[tripletexjs](../README.md) › [SalarySettingsService](salarysettingsservice.md)

# Class: SalarySettingsService

## Hierarchy

* **SalarySettingsService**

## Index

### Methods

* [salarySettingsGet](salarysettingsservice.md#static-salarysettingsget)
* [salarySettingsPut](salarysettingsservice.md#static-salarysettingsput)

## Methods

### `Static` salarySettingsGet

▸ **salarySettingsGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalarySettings](../interfaces/responsewrappersalarysettings.md)›*

[BETA] Get salary settings of logged in company.

**`result`** ResponseWrapperSalarySettings successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperSalarySettings](../interfaces/responsewrappersalarysettings.md)›*

___

### `Static` salarySettingsPut

▸ **salarySettingsPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalarySettings](../interfaces/responsewrappersalarysettings.md)›*

[BETA] Update settings of logged in company.

**`result`** ResponseWrapperSalarySettings successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [SalarySettings](../modules/salarysettings.md) | Partial object describing what should be updated |

**Returns:** *Promise‹[ResponseWrapperSalarySettings](../interfaces/responsewrappersalarysettings.md)›*
