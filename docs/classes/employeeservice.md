[tripletexjs](../README.md) › [EmployeeService](employeeservice.md)

# Class: EmployeeService

## Hierarchy

* **EmployeeService**

## Index

### Methods

* [employeeGet](employeeservice.md#static-employeeget)
* [employeeListPostList](employeeservice.md#static-employeelistpostlist)
* [employeePost](employeeservice.md#static-employeepost)
* [employeePut](employeeservice.md#static-employeeput)
* [employeeSearch](employeeservice.md#static-employeesearch)

## Methods

### `Static` employeeGet

▸ **employeeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployee](../interfaces/responsewrapperemployee.md)›*

Get employee by ID.

**`result`** ResponseWrapperEmployee successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEmployee](../interfaces/responsewrapperemployee.md)›*

___

### `Static` employeeListPostList

▸ **employeeListPostList**(`__namedParameters`: object): *Promise‹[ListResponseEmployee](../interfaces/listresponseemployee.md)›*

[BETA] Create several employees.

**`result`** ListResponseEmployee successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Employee](../modules/employee.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseEmployee](../interfaces/listresponseemployee.md)›*

___

### `Static` employeePost

▸ **employeePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployee](../interfaces/responsewrapperemployee.md)›*

[BETA] Create one employee.

**`result`** ResponseWrapperEmployee successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Employee](../modules/employee.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperEmployee](../interfaces/responsewrapperemployee.md)›*

___

### `Static` employeePut

▸ **employeePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmployee](../interfaces/responsewrapperemployee.md)›*

Update employee.

**`result`** ResponseWrapperEmployee successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Employee](../modules/employee.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEmployee](../interfaces/responsewrapperemployee.md)›*

___

### `Static` employeeSearch

▸ **employeeSearch**(`__namedParameters`: object): *Promise‹[ListResponseEmployee](../interfaces/listresponseemployee.md)›*

Find employees corresponding with sent data.

**`result`** ListResponseEmployee successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`allowInformationRegistration` | boolean | - | Equals |
`count` | number | 1000 | Number of elements to return |
`departmentId` | string | - | List of IDs |
`employeeNumber` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`firstName` | string | - | Containing |
`from` | number | - | From index |
`hasSystemAccess` | boolean | - | Equals |
`id` | string | - | List of IDs |
`includeContacts` | boolean | false | Equals |
`lastName` | string | - | Containing |
`onlyProjectManagers` | boolean | - | Equals |
`periodEnd` | string | - | Equals |
`periodStart` | string | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEmployee](../interfaces/listresponseemployee.md)›*
