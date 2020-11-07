[tripletexjs](../README.md) › [ActivityService](activityservice.md)

# Class: ActivityService

## Hierarchy

* **ActivityService**

## Index

### Methods

* [activityForTimeSheetGetForTimeSheet](activityservice.md#static-activityfortimesheetgetfortimesheet)
* [activityGet](activityservice.md#static-activityget)
* [activityListPostList](activityservice.md#static-activitylistpostlist)
* [activityPost](activityservice.md#static-activitypost)
* [activitySearch](activityservice.md#static-activitysearch)

## Methods

### `Static` activityForTimeSheetGetForTimeSheet

▸ **activityForTimeSheetGetForTimeSheet**(`__namedParameters`: object): *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

Find applicable time sheet activities for an employee on a specific day.

**`result`** ListResponseActivity successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`date` | string | - | yyyy-MM-dd. Defaults to today. |
`employeeId` | number | - | Employee ID. Defaults to ID of token owner. |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`projectId` | number | - | Project ID |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

___

### `Static` activityGet

▸ **activityGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperActivity](../interfaces/responsewrapperactivity.md)›*

Find activity by ID.

**`result`** ResponseWrapperActivity successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperActivity](../interfaces/responsewrapperactivity.md)›*

___

### `Static` activityListPostList

▸ **activityListPostList**(`__namedParameters`: object): *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

Add multiple activities.

**`result`** ListResponseActivity successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Activity](../modules/activity.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

___

### `Static` activityPost

▸ **activityPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperActivity](../interfaces/responsewrapperactivity.md)›*

Add activity.

**`result`** ResponseWrapperActivity successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Activity](../modules/activity.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperActivity](../interfaces/responsewrapperactivity.md)›*

___

### `Static` activitySearch

▸ **activitySearch**(`__namedParameters`: object): *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*

Find activities corresponding with sent data.

**`result`** ListResponseActivity successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isChargeable` | boolean | - | Equals |
`isGeneral` | boolean | - | Equals |
`isInactive` | boolean | - | Equals |
`isProjectActivity` | boolean | - | Equals |
`isTask` | boolean | - | Equals |
`name` | string | - | Containing |
`number` | string | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseActivity](../interfaces/listresponseactivity.md)›*
