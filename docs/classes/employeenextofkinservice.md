[tripletexjs](../README.md) › [EmployeeNextOfKinService](employeenextofkinservice.md)

# Class: EmployeeNextOfKinService

## Hierarchy

* **EmployeeNextOfKinService**

## Index

### Methods

* [employeeNextOfKinGet](employeenextofkinservice.md#static-employeenextofkinget)
* [employeeNextOfKinPost](employeenextofkinservice.md#static-employeenextofkinpost)
* [employeeNextOfKinPut](employeenextofkinservice.md#static-employeenextofkinput)
* [employeeNextOfKinSearch](employeenextofkinservice.md#static-employeenextofkinsearch)

## Methods

### `Static` employeeNextOfKinGet

▸ **employeeNextOfKinGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperNextOfKin](../interfaces/responsewrappernextofkin.md)›*

[BETA] Find next of kin by ID.

**`result`** ResponseWrapperNextOfKin successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperNextOfKin](../interfaces/responsewrappernextofkin.md)›*

___

### `Static` employeeNextOfKinPost

▸ **employeeNextOfKinPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperNextOfKin](../interfaces/responsewrappernextofkin.md)›*

[BETA] Create next of kin.

**`result`** ResponseWrapperNextOfKin successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [NextOfKin](../modules/nextofkin.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperNextOfKin](../interfaces/responsewrappernextofkin.md)›*

___

### `Static` employeeNextOfKinPut

▸ **employeeNextOfKinPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperNextOfKin](../interfaces/responsewrappernextofkin.md)›*

[BETA] Update next of kin.

**`result`** ResponseWrapperNextOfKin successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [NextOfKin](../modules/nextofkin.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperNextOfKin](../interfaces/responsewrappernextofkin.md)›*

___

### `Static` employeeNextOfKinSearch

▸ **employeeNextOfKinSearch**(`__namedParameters`: object): *Promise‹[ListResponseNextOfKin](../interfaces/listresponsenextofkin.md)›*

Find all next of kin for employee.

**`result`** ListResponseNextOfKin successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | number | - | Employee ID. Defaults to ID of token owner. |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseNextOfKin](../interfaces/listresponsenextofkin.md)›*
