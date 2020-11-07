[tripletexjs](../README.md) › [EmployeeEmploymentService](employeeemploymentservice.md)

# Class: EmployeeEmploymentService

## Hierarchy

* **EmployeeEmploymentService**

## Index

### Methods

* [employeeEmploymentGet](employeeemploymentservice.md#static-employeeemploymentget)
* [employeeEmploymentPost](employeeemploymentservice.md#static-employeeemploymentpost)
* [employeeEmploymentPut](employeeemploymentservice.md#static-employeeemploymentput)
* [employeeEmploymentSearch](employeeemploymentservice.md#static-employeeemploymentsearch)

## Methods

### `Static` employeeEmploymentGet

▸ **employeeEmploymentGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployment](../interfaces/responsewrapperemployment.md)›*

Find employment by ID.

**`result`** ResponseWrapperEmployment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEmployment](../interfaces/responsewrapperemployment.md)›*

___

### `Static` employeeEmploymentPost

▸ **employeeEmploymentPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployment](../interfaces/responsewrapperemployment.md)›*

[BETA] Create employment.

**`result`** ResponseWrapperEmployment successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Employment](../modules/employment.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperEmployment](../interfaces/responsewrapperemployment.md)›*

___

### `Static` employeeEmploymentPut

▸ **employeeEmploymentPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployment](../interfaces/responsewrapperemployment.md)›*

[BETA] Update employemnt.

**`result`** ResponseWrapperEmployment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Employment](../modules/employment.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEmployment](../interfaces/responsewrapperemployment.md)›*

___

### `Static` employeeEmploymentSearch

▸ **employeeEmploymentSearch**(`__namedParameters`: object): *Promise‹[ListResponseEmployment](../interfaces/listresponseemployment.md)›*

Find all employments for employee.

**`result`** ListResponseEmployment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | number | - | Element ID |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEmployment](../interfaces/listresponseemployment.md)›*
