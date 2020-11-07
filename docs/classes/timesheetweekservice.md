[tripletexjs](../README.md) › [TimesheetWeekService](timesheetweekservice.md)

# Class: TimesheetWeekService

## Hierarchy

* **TimesheetWeekService**

## Index

### Methods

* [timesheetWeekApproveApprove](timesheetweekservice.md#static-timesheetweekapproveapprove)
* [timesheetWeekCompleteComplete](timesheetweekservice.md#static-timesheetweekcompletecomplete)
* [timesheetWeekReopenReopen](timesheetweekservice.md#static-timesheetweekreopenreopen)
* [timesheetWeekSearch](timesheetweekservice.md#static-timesheetweeksearch)
* [timesheetWeekUnapproveUnapprove](timesheetweekservice.md#static-timesheetweekunapproveunapprove)

## Methods

### `Static` timesheetWeekApproveApprove

▸ **timesheetWeekApproveApprove**(`__namedParameters`: object): *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

Approve week. By ID or (ISO-8601 week and employeeId combination).

**`result`** ResponseWrapperWeek successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Equals |
`id` | number | Equals |
`weekYear` | string | ISO-8601 week-year |

**Returns:** *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

___

### `Static` timesheetWeekCompleteComplete

▸ **timesheetWeekCompleteComplete**(`__namedParameters`: object): *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

Complete week. By ID or (ISO-8601 week and employeeId combination).

**`result`** ResponseWrapperWeek successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Equals |
`id` | number | Equals |
`weekYear` | string | ISO-8601 week-year |

**Returns:** *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

___

### `Static` timesheetWeekReopenReopen

▸ **timesheetWeekReopenReopen**(`__namedParameters`: object): *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

Reopen week. By ID or (ISO-8601 week and employeeId combination).

**`result`** ResponseWrapperWeek successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Equals |
`id` | number | Equals |
`weekYear` | string | ISO-8601 week-year |

**Returns:** *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

___

### `Static` timesheetWeekSearch

▸ **timesheetWeekSearch**(`__namedParameters`: object): *Promise‹[ListResponseWeek](../interfaces/listresponseweek.md)›*

Find weekly status By ID, week/year combination, employeeId. or an approver

**`result`** ListResponseWeek successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`approvedBy` | number | - | Equals |
`count` | number | 1000 | Number of elements to return |
`employeeIds` | string | - | List of IDs |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`ids` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |
`weekYear` | string | - | ISO-8601 week-year |

**Returns:** *Promise‹[ListResponseWeek](../interfaces/listresponseweek.md)›*

___

### `Static` timesheetWeekUnapproveUnapprove

▸ **timesheetWeekUnapproveUnapprove**(`__namedParameters`: object): *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*

Unapprove week. By ID or (ISO-8601 week and employeeId combination).

**`result`** ResponseWrapperWeek successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | number | Equals |
`id` | number | Equals |
`weekYear` | string | ISO-8601 week-year |

**Returns:** *Promise‹[ResponseWrapperWeek](../interfaces/responsewrapperweek.md)›*
