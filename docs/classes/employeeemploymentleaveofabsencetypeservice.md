[tripletexjs](../README.md) › [EmployeeEmploymentLeaveOfAbsenceTypeService](employeeemploymentleaveofabsencetypeservice.md)

# Class: EmployeeEmploymentLeaveOfAbsenceTypeService

## Hierarchy

* **EmployeeEmploymentLeaveOfAbsenceTypeService**

## Index

### Methods

* [employeeEmploymentLeaveOfAbsenceTypeSearch](employeeemploymentleaveofabsencetypeservice.md#static-employeeemploymentleaveofabsencetypesearch)

## Methods

### `Static` employeeEmploymentLeaveOfAbsenceTypeSearch

▸ **employeeEmploymentLeaveOfAbsenceTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseLeaveOfAbsenceType](../interfaces/listresponseleaveofabsencetype.md)›*

[BETA] Find all leave of absence type IDs.

**`result`** ListResponseLeaveOfAbsenceType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseLeaveOfAbsenceType](../interfaces/listresponseleaveofabsencetype.md)›*
