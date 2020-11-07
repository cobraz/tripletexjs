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
`fields` | undefined &#124; string | Fields filter pattern |
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
`endFrom` | undefined &#124; string | - | From and including |
`endTo` | undefined &#124; string | - | To and excluding |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`numberFrom` | undefined &#124; number | - | From and including |
`numberTo` | undefined &#124; number | - | To and excluding |
`sorting` | undefined &#124; string | - | Sorting pattern |
`startFrom` | undefined &#124; string | - | From and including |
`startTo` | undefined &#124; string | - | To and excluding |

**Returns:** *Promise‹[ListResponseAccountingPeriod](../interfaces/listresponseaccountingperiod.md)›*
