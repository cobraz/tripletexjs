[tripletexjs](../README.md) › [TimesheetEntryService](timesheetentryservice.md)

# Class: TimesheetEntryService

## Hierarchy

* **TimesheetEntryService**

## Index

### Methods

* [timesheetEntryDelete](timesheetentryservice.md#static-timesheetentrydelete)
* [timesheetEntryGet](timesheetentryservice.md#static-timesheetentryget)
* [timesheetEntryListPostList](timesheetentryservice.md#static-timesheetentrylistpostlist)
* [timesheetEntryListPutList](timesheetentryservice.md#static-timesheetentrylistputlist)
* [timesheetEntryPost](timesheetentryservice.md#static-timesheetentrypost)
* [timesheetEntryPut](timesheetentryservice.md#static-timesheetentryput)
* [timesheetEntryRecentActivitiesGetRecentActivities](timesheetentryservice.md#static-timesheetentryrecentactivitiesgetrecentactivities)
* [timesheetEntryRecentProjectsGetRecentProjects](timesheetentryservice.md#static-timesheetentryrecentprojectsgetrecentprojects)
* [timesheetEntrySearch](timesheetentryservice.md#static-timesheetentrysearch)
* [timesheetEntryTotalHoursGetTotalHours](timesheetentryservice.md#static-timesheetentrytotalhoursgettotalhours)

## Methods

### `Static` timesheetEntryDelete

▸ **timesheetEntryDelete**(`__namedParameters`: object): *Promise‹any›*

Delete timesheet entry by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |
`version` | undefined &#124; number | Number of current version |

**Returns:** *Promise‹any›*

___

### `Static` timesheetEntryGet

▸ **timesheetEntryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimesheetEntry](../interfaces/responsewrappertimesheetentry.md)›*

Find timesheet entry by ID.

**`result`** ResponseWrapperTimesheetEntry successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTimesheetEntry](../interfaces/responsewrappertimesheetentry.md)›*

___

### `Static` timesheetEntryListPostList

▸ **timesheetEntryListPostList**(`__namedParameters`: object): *Promise‹[ListResponseTimesheetEntry](../interfaces/listresponsetimesheetentry.md)›*

Add new timesheet entry. Multiple objects for several users can be sent in the same request.

**`result`** ListResponseTimesheetEntry successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimesheetEntry](../interfaces/timesheetentry.md)[] | List of timesheet entry objects |

**Returns:** *Promise‹[ListResponseTimesheetEntry](../interfaces/listresponsetimesheetentry.md)›*

___

### `Static` timesheetEntryListPutList

▸ **timesheetEntryListPutList**(`__namedParameters`: object): *Promise‹[ListResponseTimesheetEntry](../interfaces/listresponsetimesheetentry.md)›*

Update timesheet entry. Multiple objects for different users can be sent in the same request.

**`result`** ListResponseTimesheetEntry successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimesheetEntry](../interfaces/timesheetentry.md)[] | List of timesheet entry objects to update |

**Returns:** *Promise‹[ListResponseTimesheetEntry](../interfaces/listresponsetimesheetentry.md)›*

___

### `Static` timesheetEntryPost

▸ **timesheetEntryPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimesheetEntry](../interfaces/responsewrappertimesheetentry.md)›*

Add new timesheet entry. Only one entry per employee/date/activity/project combination is supported.

**`result`** ResponseWrapperTimesheetEntry successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimesheetEntry](../interfaces/timesheetentry.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperTimesheetEntry](../interfaces/responsewrappertimesheetentry.md)›*

___

### `Static` timesheetEntryPut

▸ **timesheetEntryPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperTimesheetEntry](../interfaces/responsewrappertimesheetentry.md)›*

Update timesheet entry by ID. Note: Timesheet entry object fields which are present but not set, or set to 0, will be nulled.

**`result`** ResponseWrapperTimesheetEntry successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [TimesheetEntry](../interfaces/timesheetentry.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTimesheetEntry](../interfaces/responsewrappertimesheetentry.md)›*

___

### `Static` timesheetEntryRecentActivitiesGetRecentActivities

▸ **timesheetEntryRecentActivitiesGetRecentActivities**(`__namedParameters`: object): *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

Find recently used timesheet activities.

**`result`** ListResponseActivity successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | undefined &#124; number | - | ID of employee to find activities for. Defaults to ID of token owner. |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`projectId` | number | - | ID of project to find activities for |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

___

### `Static` timesheetEntryRecentProjectsGetRecentProjects

▸ **timesheetEntryRecentProjectsGetRecentProjects**(`__namedParameters`: object): *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

Find projects with recent activities (timesheet entry registered).

**`result`** ListResponseProject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | undefined &#124; number | - | ID of employee with recent project hours Defaults to ID of token owner. |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

___

### `Static` timesheetEntrySearch

▸ **timesheetEntrySearch**(`__namedParameters`: object): *Promise‹[TimesheetEntrySearchResponse](../interfaces/timesheetentrysearchresponse.md)›*

Find timesheet entry corresponding with sent data.

**`result`** TimesheetEntrySearchResponse successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`activityId` | undefined &#124; string | - | List of IDs |
`comment` | undefined &#124; string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`employeeId` | undefined &#124; string | - | List of IDs |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`projectId` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[TimesheetEntrySearchResponse](../interfaces/timesheetentrysearchresponse.md)›*

___

### `Static` timesheetEntryTotalHoursGetTotalHours

▸ **timesheetEntryTotalHoursGetTotalHours**(`__namedParameters`: object): *Promise‹[ResponseWrapperBigDecimal](../interfaces/responsewrapperbigdecimal.md)›*

Find total hours registered on an employee in a specific period.

**`result`** ResponseWrapperBigDecimal successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeId` | undefined &#124; number | ID of employee to find hours for. Defaults to ID of token owner. |
`endDate` | undefined &#124; string | Format is yyyy-MM-dd (to and excl.). Defaults to tomorrow. |
`fields` | undefined &#124; string | Fields filter pattern |
`startDate` | undefined &#124; string | Format is yyyy-MM-dd (from and incl.). Defaults to today. |

**Returns:** *Promise‹[ResponseWrapperBigDecimal](../interfaces/responsewrapperbigdecimal.md)›*
