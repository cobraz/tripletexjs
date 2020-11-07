[tripletexjs](../README.md) › [EmployeeEmploymentWorkingHoursSchemeService](employeeemploymentworkinghoursschemeservice.md)

# Class: EmployeeEmploymentWorkingHoursSchemeService

## Hierarchy

* **EmployeeEmploymentWorkingHoursSchemeService**

## Index

### Methods

* [employeeEmploymentWorkingHoursSchemeSearch](employeeemploymentworkinghoursschemeservice.md#static-employeeemploymentworkinghoursschemesearch)

## Methods

### `Static` employeeEmploymentWorkingHoursSchemeSearch

▸ **employeeEmploymentWorkingHoursSchemeSearch**(`__namedParameters`: object): *Promise‹[ListResponseWorkingHoursScheme](../interfaces/listresponseworkinghoursscheme.md)›*

[BETA] Find working hours scheme ID.

**`result`** ListResponseWorkingHoursScheme successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseWorkingHoursScheme](../interfaces/listresponseworkinghoursscheme.md)›*
