[tripletexjs](../README.md) › [ProjectPeriodService](projectperiodservice.md)

# Class: ProjectPeriodService

## Hierarchy

* **ProjectPeriodService**

## Index

### Methods

* [projectPeriodHourlistReportHourlistReport](projectperiodservice.md#static-projectperiodhourlistreporthourlistreport)
* [projectPeriodInvoicedInvoiced](projectperiodservice.md#static-projectperiodinvoicedinvoiced)
* [projectPeriodInvoicingReserveInvoicingReserve](projectperiodservice.md#static-projectperiodinvoicingreserveinvoicingreserve)
* [projectPeriodMonthlyStatusMonthlyStatus](projectperiodservice.md#static-projectperiodmonthlystatusmonthlystatus)
* [projectPeriodOverallStatusOverallStatus](projectperiodservice.md#static-projectperiodoverallstatusoverallstatus)

## Methods

### `Static` projectPeriodHourlistReportHourlistReport

▸ **projectPeriodHourlistReportHourlistReport**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectPeriodHourlyReport](../interfaces/responsewrapperprojectperiodhourlyreport.md)›*

Find hourlist report by project period.

**`result`** ResponseWrapperProjectPeriodHourlyReport successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`dateFrom` | string | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | Format is yyyy-MM-dd (to and excl.). |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectPeriodHourlyReport](../interfaces/responsewrapperprojectperiodhourlyreport.md)›*

___

### `Static` projectPeriodInvoicedInvoiced

▸ **projectPeriodInvoicedInvoiced**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectPeriodInvoiced](../interfaces/responsewrapperprojectperiodinvoiced.md)›*

Find invoiced info by project period.

**`result`** ResponseWrapperProjectPeriodInvoiced successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`dateFrom` | string | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | Format is yyyy-MM-dd (to and excl.). |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectPeriodInvoiced](../interfaces/responsewrapperprojectperiodinvoiced.md)›*

___

### `Static` projectPeriodInvoicingReserveInvoicingReserve

▸ **projectPeriodInvoicingReserveInvoicingReserve**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectPeriodInvoicingReserve](../interfaces/responsewrapperprojectperiodinvoicingreserve.md)›*

Find invoicing reserve by project period.

**`result`** ResponseWrapperProjectPeriodInvoicingReserve successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`dateFrom` | string | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | Format is yyyy-MM-dd (to and excl.). |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectPeriodInvoicingReserve](../interfaces/responsewrapperprojectperiodinvoicingreserve.md)›*

___

### `Static` projectPeriodMonthlyStatusMonthlyStatus

▸ **projectPeriodMonthlyStatusMonthlyStatus**(`__namedParameters`: object): *Promise‹[ListResponseProjectPeriodMonthlyStatus](../interfaces/listresponseprojectperiodmonthlystatus.md)›*

Find overall status by project period.

**`result`** ListResponseProjectPeriodMonthlyStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | - | Format is yyyy-MM-dd (to and excl.). |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | number | - | Element ID |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectPeriodMonthlyStatus](../interfaces/listresponseprojectperiodmonthlystatus.md)›*

___

### `Static` projectPeriodOverallStatusOverallStatus

▸ **projectPeriodOverallStatusOverallStatus**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectPeriodOverallStatus](../interfaces/responsewrapperprojectperiodoverallstatus.md)›*

Find overall status by project period.

**`result`** ResponseWrapperProjectPeriodOverallStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`dateFrom` | string | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | Format is yyyy-MM-dd (to and excl.). |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectPeriodOverallStatus](../interfaces/responsewrapperprojectperiodoverallstatus.md)›*
