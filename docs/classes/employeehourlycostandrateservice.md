[tripletexjs](../README.md) › [EmployeeHourlyCostAndRateService](employeehourlycostandrateservice.md)

# Class: EmployeeHourlyCostAndRateService

## Hierarchy

* **EmployeeHourlyCostAndRateService**

## Index

### Methods

* [employeeHourlyCostAndRateGet](employeehourlycostandrateservice.md#static-employeehourlycostandrateget)
* [employeeHourlyCostAndRatePost](employeehourlycostandrateservice.md#static-employeehourlycostandratepost)
* [employeeHourlyCostAndRatePut](employeehourlycostandrateservice.md#static-employeehourlycostandrateput)
* [employeeHourlyCostAndRateSearch](employeehourlycostandrateservice.md#static-employeehourlycostandratesearch)

## Methods

### `Static` employeeHourlyCostAndRateGet

▸ **employeeHourlyCostAndRateGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperHourlyCostAndRate](../interfaces/responsewrapperhourlycostandrate.md)›*

[BETA] Find hourly cost and rate by ID.

**`result`** ResponseWrapperHourlyCostAndRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperHourlyCostAndRate](../interfaces/responsewrapperhourlycostandrate.md)›*

___

### `Static` employeeHourlyCostAndRatePost

▸ **employeeHourlyCostAndRatePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperHourlyCostAndRate](../interfaces/responsewrapperhourlycostandrate.md)›*

[BETA] Create hourly cost and rate.

**`result`** ResponseWrapperHourlyCostAndRate successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [HourlyCostAndRate](../interfaces/hourlycostandrate.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperHourlyCostAndRate](../interfaces/responsewrapperhourlycostandrate.md)›*

___

### `Static` employeeHourlyCostAndRatePut

▸ **employeeHourlyCostAndRatePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperHourlyCostAndRate](../interfaces/responsewrapperhourlycostandrate.md)›*

[BETA] Update hourly cost and rate.

**`result`** ResponseWrapperHourlyCostAndRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [HourlyCostAndRate](../interfaces/hourlycostandrate.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperHourlyCostAndRate](../interfaces/responsewrapperhourlycostandrate.md)›*

___

### `Static` employeeHourlyCostAndRateSearch

▸ **employeeHourlyCostAndRateSearch**(`__namedParameters`: object): *Promise‹[ListResponseHourlyCostAndRate](../interfaces/listresponsehourlycostandrate.md)›*

Find all hourly cost and rates for employee.

**`result`** ListResponseHourlyCostAndRate successful operation

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

**Returns:** *Promise‹[ListResponseHourlyCostAndRate](../interfaces/listresponsehourlycostandrate.md)›*
