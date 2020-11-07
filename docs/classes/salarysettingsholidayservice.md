[tripletexjs](../README.md) › [SalarySettingsHolidayService](salarysettingsholidayservice.md)

# Class: SalarySettingsHolidayService

## Hierarchy

* **SalarySettingsHolidayService**

## Index

### Methods

* [salarySettingsHolidayListDeleteByIds](salarysettingsholidayservice.md#static-salarysettingsholidaylistdeletebyids)
* [salarySettingsHolidayListPostList](salarysettingsholidayservice.md#static-salarysettingsholidaylistpostlist)
* [salarySettingsHolidayListPutList](salarysettingsholidayservice.md#static-salarysettingsholidaylistputlist)
* [salarySettingsHolidayPost](salarysettingsholidayservice.md#static-salarysettingsholidaypost)
* [salarySettingsHolidayPut](salarysettingsholidayservice.md#static-salarysettingsholidayput)
* [salarySettingsHolidaySearch](salarysettingsholidayservice.md#static-salarysettingsholidaysearch)

## Methods

### `Static` salarySettingsHolidayListDeleteByIds

▸ **salarySettingsHolidayListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] delete multiple holiday settings of current logged in company.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` salarySettingsHolidayListPostList

▸ **salarySettingsHolidayListPostList**(`__namedParameters`: object): *Promise‹[ListResponseCompanyHoliday](../interfaces/listresponsecompanyholiday.md)›*

[BETA] Create multiple holiday settings of current logged in company.

**`result`** ListResponseCompanyHoliday successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [CompanyHoliday](../interfaces/companyholiday.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseCompanyHoliday](../interfaces/listresponsecompanyholiday.md)›*

___

### `Static` salarySettingsHolidayListPutList

▸ **salarySettingsHolidayListPutList**(`__namedParameters`: object): *Promise‹[ListResponseCompanyHoliday](../interfaces/listresponsecompanyholiday.md)›*

[BETA] update multiple holiday settings of current logged in company.

**`result`** ListResponseCompanyHoliday successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [CompanyHoliday](../interfaces/companyholiday.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseCompanyHoliday](../interfaces/listresponsecompanyholiday.md)›*

___

### `Static` salarySettingsHolidayPost

▸ **salarySettingsHolidayPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperCompanyHoliday](../interfaces/responsewrappercompanyholiday.md)›*

[BETA] Create a holiday setting of current logged in company.

**`result`** ResponseWrapperCompanyHoliday successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [CompanyHoliday](../interfaces/companyholiday.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperCompanyHoliday](../interfaces/responsewrappercompanyholiday.md)›*

___

### `Static` salarySettingsHolidayPut

▸ **salarySettingsHolidayPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperCompanyHoliday](../interfaces/responsewrappercompanyholiday.md)›*

[BETA] update a holiday setting of current logged in company.

**`result`** ResponseWrapperCompanyHoliday successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [CompanyHoliday](../interfaces/companyholiday.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCompanyHoliday](../interfaces/responsewrappercompanyholiday.md)›*

___

### `Static` salarySettingsHolidaySearch

▸ **salarySettingsHolidaySearch**(`__namedParameters`: object): *Promise‹[ListResponseCompanyHoliday](../interfaces/listresponsecompanyholiday.md)›*

[BETA] Find holiday settings of current logged in company.

**`result`** ListResponseCompanyHoliday successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseCompanyHoliday](../interfaces/listresponsecompanyholiday.md)›*
