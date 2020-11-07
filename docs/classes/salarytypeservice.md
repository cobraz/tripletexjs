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
`fields` | undefined &#124; string | Fields filter pattern |
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
`description` | undefined &#124; string | - | Containing |
`employeeIds` | undefined &#124; string | - | Equals |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isInactive` | undefined &#124; false &#124; true | - | Equals |
`name` | undefined &#124; string | - | Containing |
`number` | undefined &#124; string | - | Containing |
`showInTimesheet` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseSalaryType](../interfaces/listresponsesalarytype.md)›*
