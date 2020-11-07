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
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseRemunerationType](../interfaces/listresponseremunerationtype.md)›*
