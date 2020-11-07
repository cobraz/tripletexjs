[tripletexjs](../README.md) › [EmployeeStandardTimeService](employeestandardtimeservice.md)

# Class: EmployeeStandardTimeService

## Hierarchy

* **EmployeeStandardTimeService**

## Index

### Methods

* [employeeStandardTimeGet](employeestandardtimeservice.md#static-employeestandardtimeget)
* [employeeStandardTimePost](employeestandardtimeservice.md#static-employeestandardtimepost)
* [employeeStandardTimePut](employeestandardtimeservice.md#static-employeestandardtimeput)
* [employeeStandardTimeSearch](employeestandardtimeservice.md#static-employeestandardtimesearch)

## Methods

### `Static` employeeStandardTimeGet

▸ **employeeStandardTimeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperStandardTime](../interfaces/responsewrapperstandardtime.md)›*

[BETA] Find standard time by ID.

**`result`** ResponseWrapperStandardTime successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperStandardTime](../interfaces/responsewrapperstandardtime.md)›*

___

### `Static` employeeStandardTimePost

▸ **employeeStandardTimePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperStandardTime](../interfaces/responsewrapperstandardtime.md)›*

[BETA] Create standard time.

**`result`** ResponseWrapperStandardTime successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [StandardTime](../interfaces/standardtime.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperStandardTime](../interfaces/responsewrapperstandardtime.md)›*

___

### `Static` employeeStandardTimePut

▸ **employeeStandardTimePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperStandardTime](../interfaces/responsewrapperstandardtime.md)›*

[BETA] Update standard time.

**`result`** ResponseWrapperStandardTime successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [StandardTime](../interfaces/standardtime.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperStandardTime](../interfaces/responsewrapperstandardtime.md)›*

___

### `Static` employeeStandardTimeSearch

▸ **employeeStandardTimeSearch**(`__namedParameters`: object): *Promise‹[ListResponseStandardTime](../interfaces/listresponsestandardtime.md)›*

[BETA] Find all standard times for employee.

**`result`** ListResponseStandardTime successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | undefined &#124; number | - | Employee ID. Defaults to ID of token owner. |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseStandardTime](../interfaces/listresponsestandardtime.md)›*
