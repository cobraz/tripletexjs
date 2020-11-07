[tripletexjs](../README.md) › [EmployeeEmploymentRemunerationTypeService](employeeemploymentremunerationtypeservice.md)

# Class: EmployeeEmploymentRemunerationTypeService

## Hierarchy

* **EmployeeEmploymentRemunerationTypeService**

## Index

### Methods

* [employeeEmploymentRemunerationTypeSearch](employeeemploymentremunerationtypeservice.md#static-employeeemploymentremunerationtypesearch)

## Methods

### `Static` employeeEmploymentRemunerationTypeSearch

▸ **employeeEmploymentRemunerationTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseRemunerationType](../interfaces/listresponseremunerationtype.md)›*

[BETA] Find all remuneration type IDs.

**`result`** ListResponseRemunerationType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseRemunerationType](../interfaces/listresponseremunerationtype.md)›*
