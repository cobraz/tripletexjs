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
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseWorkingHoursScheme](../interfaces/listresponseworkinghoursscheme.md)›*
