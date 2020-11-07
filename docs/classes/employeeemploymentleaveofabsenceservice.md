[tripletexjs](../README.md) › [EmployeeEmploymentLeaveOfAbsenceService](employeeemploymentleaveofabsenceservice.md)

# Class: EmployeeEmploymentLeaveOfAbsenceService

## Hierarchy

* **EmployeeEmploymentLeaveOfAbsenceService**

## Index

### Methods

* [employeeEmploymentLeaveOfAbsenceGet](employeeemploymentleaveofabsenceservice.md#static-employeeemploymentleaveofabsenceget)
* [employeeEmploymentLeaveOfAbsenceListPostList](employeeemploymentleaveofabsenceservice.md#static-employeeemploymentleaveofabsencelistpostlist)
* [employeeEmploymentLeaveOfAbsencePost](employeeemploymentleaveofabsenceservice.md#static-employeeemploymentleaveofabsencepost)
* [employeeEmploymentLeaveOfAbsencePut](employeeemploymentleaveofabsenceservice.md#static-employeeemploymentleaveofabsenceput)

## Methods

### `Static` employeeEmploymentLeaveOfAbsenceGet

▸ **employeeEmploymentLeaveOfAbsenceGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperLeaveOfAbsence](../interfaces/responsewrapperleaveofabsence.md)›*

[BETA] Find leave of absence by ID.

**`result`** ResponseWrapperLeaveOfAbsence successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperLeaveOfAbsence](../interfaces/responsewrapperleaveofabsence.md)›*

___

### `Static` employeeEmploymentLeaveOfAbsenceListPostList

▸ **employeeEmploymentLeaveOfAbsenceListPostList**(`__namedParameters`: object): *Promise‹[ListResponseLeaveOfAbsence](../interfaces/listresponseleaveofabsence.md)›*

[BETA] Create multiple leave of absences.

**`result`** ListResponseLeaveOfAbsence successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [LeaveOfAbsence](../modules/leaveofabsence.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseLeaveOfAbsence](../interfaces/listresponseleaveofabsence.md)›*

___

### `Static` employeeEmploymentLeaveOfAbsencePost

▸ **employeeEmploymentLeaveOfAbsencePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperLeaveOfAbsence](../interfaces/responsewrapperleaveofabsence.md)›*

[BETA] Create leave of absence.

**`result`** ResponseWrapperLeaveOfAbsence successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [LeaveOfAbsence](../modules/leaveofabsence.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperLeaveOfAbsence](../interfaces/responsewrapperleaveofabsence.md)›*

___

### `Static` employeeEmploymentLeaveOfAbsencePut

▸ **employeeEmploymentLeaveOfAbsencePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperLeaveOfAbsence](../interfaces/responsewrapperleaveofabsence.md)›*

[BETA] Update leave of absence.

**`result`** ResponseWrapperLeaveOfAbsence successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [LeaveOfAbsence](../modules/leaveofabsence.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperLeaveOfAbsence](../interfaces/responsewrapperleaveofabsence.md)›*
