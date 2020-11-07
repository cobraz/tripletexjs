[tripletexjs](../README.md) › [DepartmentService](departmentservice.md)

# Class: DepartmentService

## Hierarchy

* **DepartmentService**

## Index

### Methods

* [departmentDelete](departmentservice.md#static-departmentdelete)
* [departmentGet](departmentservice.md#static-departmentget)
* [departmentListPostList](departmentservice.md#static-departmentlistpostlist)
* [departmentListPutList](departmentservice.md#static-departmentlistputlist)
* [departmentPost](departmentservice.md#static-departmentpost)
* [departmentPut](departmentservice.md#static-departmentput)
* [departmentSearch](departmentservice.md#static-departmentsearch)

## Methods

### `Static` departmentDelete

▸ **departmentDelete**(`__namedParameters`: object): *Promise‹any›*

Delete department by ID

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` departmentGet

▸ **departmentGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperDepartment](../interfaces/responsewrapperdepartment.md)›*

Get department by ID.

**`result`** ResponseWrapperDepartment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDepartment](../interfaces/responsewrapperdepartment.md)›*

___

### `Static` departmentListPostList

▸ **departmentListPostList**(`__namedParameters`: object): *Promise‹[ListResponseDepartment](../interfaces/listresponsedepartment.md)›*

[BETA] Register new departments.

**`result`** ListResponseDepartment successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Department](../interfaces/department.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseDepartment](../interfaces/listresponsedepartment.md)›*

___

### `Static` departmentListPutList

▸ **departmentListPutList**(`__namedParameters`: object): *Promise‹[ListResponseDepartment](../interfaces/listresponsedepartment.md)›*

[BETA] Update multiple departments.

**`result`** ListResponseDepartment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Department](../interfaces/department.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseDepartment](../interfaces/listresponsedepartment.md)›*

___

### `Static` departmentPost

▸ **departmentPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDepartment](../interfaces/responsewrapperdepartment.md)›*

[BETA] Add new department.

**`result`** ResponseWrapperDepartment successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Department](../interfaces/department.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperDepartment](../interfaces/responsewrapperdepartment.md)›*

___

### `Static` departmentPut

▸ **departmentPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperDepartment](../interfaces/responsewrapperdepartment.md)›*

[BETA] Update department.

**`result`** ResponseWrapperDepartment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Department](../interfaces/department.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDepartment](../interfaces/responsewrapperdepartment.md)›*

___

### `Static` departmentSearch

▸ **departmentSearch**(`__namedParameters`: object): *Promise‹[ListResponseDepartment](../interfaces/listresponsedepartment.md)›*

Find department corresponding with sent data.

**`result`** ListResponseDepartment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`departmentManagerId` | string | - | List of IDs |
`departmentNumber` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`name` | string | - | Containing |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDepartment](../interfaces/listresponsedepartment.md)›*
