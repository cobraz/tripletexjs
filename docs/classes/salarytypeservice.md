[tripletexjs](../README.md) › [SalaryTypeService](salarytypeservice.md)

# Class: SalaryTypeService

## Hierarchy

* **SalaryTypeService**

## Index

### Methods

* [salaryTypeGet](salarytypeservice.md#static-salarytypeget)
* [salaryTypeSearch](salarytypeservice.md#static-salarytypesearch)

## Methods

### `Static` salaryTypeGet

▸ **salaryTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalaryType](../interfaces/responsewrappersalarytype.md)›*

[BETA] Find salary type by ID.

**`result`** ResponseWrapperSalaryType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSalaryType](../interfaces/responsewrappersalarytype.md)›*

___

### `Static` salaryTypeSearch

▸ **salaryTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseSalaryType](../interfaces/listresponsesalarytype.md)›*

[BETA] Find salary type corresponding with sent data.

**`result`** ListResponseSalaryType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | string | - | Containing |
`employeeIds` | string | - | Equals |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isInactive` | boolean | - | Equals |
`name` | string | - | Containing |
`number` | string | - | Containing |
`showInTimesheet` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseSalaryType](../interfaces/listresponsesalarytype.md)›*
