[tripletexjs](../README.md) › [TimesheetTimeClockService](timesheettimeclockservice.md)

# Class: TimesheetTimeClockService

## Hierarchy

* **TimesheetTimeClockService**

## Index

### Methods

* [timesheetTimeClockGet](timesheettimeclockservice.md#static-timesheettimeclockget)
* [timesheetTimeClockPresentGetPresent](timesheettimeclockservice.md#static-timesheettimeclockpresentgetpresent)
* [timesheetTimeClockPut](timesheettimeclockservice.md#static-timesheettimeclockput)
* [timesheetTimeClockSearch](timesheettimeclockservice.md#static-timesheettimeclocksearch)
* [timesheetTimeClockStartStart](timesheettimeclockservice.md#static-timesheettimeclockstartstart)
* [timesheetTimeClockStopStop](timesheettimeclockservice.md#static-timesheettimeclockstopstop)

## Methods

### `Static` timesheetTimeClockGet

▸ **timesheetTimeClockGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

Find time clock entry by ID.

**`result`** ResponseWrapperTimeClock successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

___

### `Static` timesheetTimeClockPresentGetPresent

▸ **timesheetTimeClockPresentGetPresent**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

Find a user’s present running time clock.

**`result`** ResponseWrapperTimeClock successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | undefined &#124; number | Employee ID. Defaults to ID of token owner. |
`fields` | undefined &#124; string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

___

### `Static` timesheetTimeClockPut

▸ **timesheetTimeClockPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

Update time clock by ID.

**`result`** ResponseWrapperTimeClock successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimeClock](../interfaces/timeclock.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

___

### `Static` timesheetTimeClockSearch

▸ **timesheetTimeClockSearch**(`__namedParameters`: object): *Promise‹[ListResponseTimeClock](../interfaces/listresponsetimeclock.md)›*

Find time clock entries corresponding with sent data.

**`result`** ListResponseTimeClock successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`activityId` | undefined &#124; string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | undefined &#124; string | - | From and including |
`dateTo` | undefined &#124; string | - | To and excluding |
`employeeId` | undefined &#124; string | - | List of IDs |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`hourId` | undefined &#124; string | - | List of IDs |
`id` | undefined &#124; string | - | List of IDs |
`isRunning` | undefined &#124; false &#124; true | - | Equals |
`projectId` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTimeClock](../interfaces/listresponsetimeclock.md)›*

___

### `Static` timesheetTimeClockStartStart

▸ **timesheetTimeClockStartStart**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

Start time clock.

**`result`** ResponseWrapperTimeClock successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`activityId` | number | Activity ID |
`date` | undefined &#124; string | Optional. Default is today’s date |
`employeeId` | undefined &#124; number | Employee ID. Defaults to ID of token owner. |
`projectId` | undefined &#124; number | Project ID |

**Returns:** *Promise‹[ResponseWrapperTimeClock](../interfaces/responsewrappertimeclock.md)›*

___

### `Static` timesheetTimeClockStopStop

▸ **timesheetTimeClockStopStop**(`__namedParameters`: object): *Promise‹any›*

Stop time clock.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |
`version` | undefined &#124; number | Number of current version |

**Returns:** *Promise‹any›*
