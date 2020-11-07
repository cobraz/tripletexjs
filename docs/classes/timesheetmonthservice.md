[tripletexjs](../README.md) › [TimesheetMonthService](timesheetmonthservice.md)

# Class: TimesheetMonthService

## Hierarchy

* **TimesheetMonthService**

## Index

### Methods

* [timesheetMonthApproveApprove](timesheetmonthservice.md#static-timesheetmonthapproveapprove)
* [timesheetMonthByMonthNumberGetByMonthNumber](timesheetmonthservice.md#static-timesheetmonthbymonthnumbergetbymonthnumber)
* [timesheetMonthCompleteComplete](timesheetmonthservice.md#static-timesheetmonthcompletecomplete)
* [timesheetMonthGet](timesheetmonthservice.md#static-timesheetmonthget)
* [timesheetMonthReopenReopen](timesheetmonthservice.md#static-timesheetmonthreopenreopen)
* [timesheetMonthUnapproveUnapprove](timesheetmonthservice.md#static-timesheetmonthunapproveunapprove)

## Methods

### `Static` timesheetMonthApproveApprove

▸ **timesheetMonthApproveApprove**(`__namedParameters`: object): *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

approve month(s).  If id is provided the other args are ignored

**`result`** ListResponseMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`approvedUntilDate` | string | yyyy-MM-dd. Defaults to today.. Defaults to end of month |
`employeeIds` | string | List of IDs. Defaults to ID of token owner. |
`id` | number | Element ID |
`monthYear` | string | 2020-01 |

**Returns:** *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

___

### `Static` timesheetMonthByMonthNumberGetByMonthNumber

▸ **timesheetMonthByMonthNumberGetByMonthNumber**(`__namedParameters`: object): *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

Find monthly status for given month.

**`result`** ListResponseMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeIds` | string | - | List of IDs. Defaults to ID of token owner. |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`monthYear` | string | - | 2020-01 |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

___

### `Static` timesheetMonthCompleteComplete

▸ **timesheetMonthCompleteComplete**(`__namedParameters`: object): *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

complete month(s).  If id is provided the other args are ignored

**`result`** ListResponseMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeIds` | string | List of IDs. Defaults to ID of token owner. |
`id` | number | Element ID |
`monthYear` | string | 2020-01 |

**Returns:** *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

___

### `Static` timesheetMonthGet

▸ **timesheetMonthGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperMonthlyStatus](../interfaces/responsewrappermonthlystatus.md)›*

Find monthly status entry by ID.

**`result`** ResponseWrapperMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperMonthlyStatus](../interfaces/responsewrappermonthlystatus.md)›*

___

### `Static` timesheetMonthReopenReopen

▸ **timesheetMonthReopenReopen**(`__namedParameters`: object): *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

reopen month(s).  If id is provided the other args are ignored

**`result`** ListResponseMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeIds` | string | List of IDs. Defaults to ID of token owner. |
`id` | number | Element ID |
`monthYear` | string | 2020-01 |

**Returns:** *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

___

### `Static` timesheetMonthUnapproveUnapprove

▸ **timesheetMonthUnapproveUnapprove**(`__namedParameters`: object): *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*

unapprove month(s).  If id is provided the other args are ignored

**`result`** ListResponseMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`employeeIds` | string | List of IDs. Defaults to ID of token owner. |
`id` | number | Element ID |
`monthYear` | string | 2020-01 |

**Returns:** *Promise‹[ListResponseMonthlyStatus](../interfaces/listresponsemonthlystatus.md)›*
