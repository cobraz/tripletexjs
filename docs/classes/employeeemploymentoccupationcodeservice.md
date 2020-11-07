[tripletexjs](../README.md) › [EmployeeEmploymentOccupationCodeService](employeeemploymentoccupationcodeservice.md)

# Class: EmployeeEmploymentOccupationCodeService

## Hierarchy

* **EmployeeEmploymentOccupationCodeService**

## Index

### Methods

* [employeeEmploymentOccupationCodeSearch](employeeemploymentoccupationcodeservice.md#static-employeeemploymentoccupationcodesearch)

## Methods

### `Static` employeeEmploymentOccupationCodeSearch

▸ **employeeEmploymentOccupationCodeSearch**(`__namedParameters`: object): *Promise‹[ListResponseOccupationCode](../interfaces/listresponseoccupationcode.md)›*

[BETA] Find all profession codes.

**`result`** ListResponseOccupationCode successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`code` | string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`nameNo` | string | - | Containing |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseOccupationCode](../interfaces/listresponseoccupationcode.md)›*
