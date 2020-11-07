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
`fields` | string | Fields filter pattern |
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
`employeeId` | number | Employee ID. Defaults to ID of token owner. |
`fields` | string | Fields filter pattern |

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
`body` | [TimeClock](../interfaces/timeclock.md) | Partial object describing what should be updated |
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
`activityId` | string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`employeeId` | string | - | List of IDs |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`hourId` | string | - | List of IDs |
`id` | string | - | List of IDs |
`isRunning` | boolean | - | Equals |
`projectId` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

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
`date` | string | Optional. Default is today’s date |
`employeeId` | number | Employee ID. Defaults to ID of token owner. |
`projectId` | number | Project ID |

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
`version` | number | Number of current version |

**Returns:** *Promise‹any›*
