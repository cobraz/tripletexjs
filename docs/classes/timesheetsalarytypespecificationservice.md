[tripletexjs](../README.md) › [TimesheetSalaryTypeSpecificationService](timesheetsalarytypespecificationservice.md)

# Class: TimesheetSalaryTypeSpecificationService

## Hierarchy

* **TimesheetSalaryTypeSpecificationService**

## Index

### Methods

* [timesheetSalaryTypeSpecificationDelete](timesheetsalarytypespecificationservice.md#static-timesheetsalarytypespecificationdelete)
* [timesheetSalaryTypeSpecificationGet](timesheetsalarytypespecificationservice.md#static-timesheetsalarytypespecificationget)
* [timesheetSalaryTypeSpecificationPost](timesheetsalarytypespecificationservice.md#static-timesheetsalarytypespecificationpost)
* [timesheetSalaryTypeSpecificationPut](timesheetsalarytypespecificationservice.md#static-timesheetsalarytypespecificationput)
* [timesheetSalaryTypeSpecificationSearch](timesheetsalarytypespecificationservice.md#static-timesheetsalarytypespecificationsearch)

## Methods

### `Static` timesheetSalaryTypeSpecificationDelete

▸ **timesheetSalaryTypeSpecificationDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete a timesheet SalaryType Specification

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` timesheetSalaryTypeSpecificationGet

▸ **timesheetSalaryTypeSpecificationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimesheetSalaryTypeSpecification](../interfaces/responsewrappertimesheetsalarytypespecification.md)›*

[BETA] Get timesheet SalaryType Specification for a specific ID

**`result`** ResponseWrapperTimesheetSalaryTypeSpecification successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTimesheetSalaryTypeSpecification](../interfaces/responsewrappertimesheetsalarytypespecification.md)›*

___

### `Static` timesheetSalaryTypeSpecificationPost

▸ **timesheetSalaryTypeSpecificationPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimesheetSalaryTypeSpecification](../interfaces/responsewrappertimesheetsalarytypespecification.md)›*

[BETA] Create a timesheet SalaryType Specification. Only one entry per employee/date/SalaryType

**`result`** ResponseWrapperTimesheetSalaryTypeSpecification successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimesheetSalaryTypeSpecification](../interfaces/timesheetsalarytypespecification.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperTimesheetSalaryTypeSpecification](../interfaces/responsewrappertimesheetsalarytypespecification.md)›*

___

### `Static` timesheetSalaryTypeSpecificationPut

▸ **timesheetSalaryTypeSpecificationPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimesheetSalaryTypeSpecification](../interfaces/responsewrappertimesheetsalarytypespecification.md)›*

[BETA] Update a timesheet SalaryType Specification

**`result`** ResponseWrapperTimesheetSalaryTypeSpecification successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimesheetSalaryTypeSpecification](../interfaces/timesheetsalarytypespecification.md) | JSON representing the new object to be created. Should not have ID and version set. |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTimesheetSalaryTypeSpecification](../interfaces/responsewrappertimesheetsalarytypespecification.md)›*

___

### `Static` timesheetSalaryTypeSpecificationSearch

▸ **timesheetSalaryTypeSpecificationSearch**(`__namedParameters`: object): *Promise‹[ListResponseTimesheetSalaryTypeSpecification](../interfaces/listresponsetimesheetsalarytypespecification.md)›*

[BETA] Get list of timesheet SalaryType Specifications

**`result`** ListResponseTimesheetSalaryTypeSpecification successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | undefined &#124; string | - | From and including |
`dateTo` | undefined &#124; string | - | To and excluding |
`employeeId` | undefined &#124; number | - | Equals |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTimesheetSalaryTypeSpecification](../interfaces/listresponsetimesheetsalarytypespecification.md)›*
