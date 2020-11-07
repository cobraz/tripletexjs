[tripletexjs](../README.md) › [LedgerAccountingPeriodService](ledgeraccountingperiodservice.md)

# Class: LedgerAccountingPeriodService

## Hierarchy

* **LedgerAccountingPeriodService**

## Index

### Methods

* [ledgerAccountingPeriodGet](ledgeraccountingperiodservice.md#static-ledgeraccountingperiodget)
* [ledgerAccountingPeriodSearch](ledgeraccountingperiodservice.md#static-ledgeraccountingperiodsearch)

## Methods

### `Static` ledgerAccountingPeriodGet

▸ **ledgerAccountingPeriodGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccountingPeriod](../interfaces/responsewrapperaccountingperiod.md)›*

Get accounting period by ID.

**`result`** ResponseWrapperAccountingPeriod successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperAccountingPeriod](../interfaces/responsewrapperaccountingperiod.md)›*

___

### `Static` ledgerAccountingPeriodSearch

▸ **ledgerAccountingPeriodSearch**(`__namedParameters`: object): *Promise‹[ListResponseAccountingPeriod](../interfaces/listresponseaccountingperiod.md)›*

Find accounting periods corresponding with sent data.

**`result`** ListResponseAccountingPeriod successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1400 | Number of elements to return |
`endFrom` | string | - | From and including |
`endTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`numberFrom` | number | - | From and including |
`numberTo` | number | - | To and excluding |
`sorting` | string | - | Sorting pattern |
`startFrom` | string | - | From and including |
`startTo` | string | - | To and excluding |

**Returns:** *Promise‹[ListResponseAccountingPeriod](../interfaces/listresponseaccountingperiod.md)›*
