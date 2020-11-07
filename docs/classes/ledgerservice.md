[tripletexjs](../README.md) › [LedgerService](ledgerservice.md)

# Class: LedgerService

## Hierarchy

* **LedgerService**

## Index

### Methods

* [ledgerOpenPostOpenPost](ledgerservice.md#static-ledgeropenpostopenpost)
* [ledgerSearch](ledgerservice.md#static-ledgersearch)

## Methods

### `Static` ledgerOpenPostOpenPost

▸ **ledgerOpenPostOpenPost**(`__namedParameters`: object): *Promise‹[ListResponseLedgerAccount](../interfaces/listresponseledgeraccount.md)›*

Find open posts corresponding with sent data.

**`result`** ListResponseLedgerAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountId` | undefined &#124; number | - | Element ID |
`count` | number | 1000 | Number of elements to return |
`customerId` | undefined &#124; number | - | Element ID |
`date` | string | - | Invoice date. Format is yyyy-MM-dd (to and excl.). |
`departmentId` | undefined &#124; number | - | Element ID |
`employeeId` | undefined &#124; number | - | Element ID |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`productId` | undefined &#124; number | - | Element ID |
`projectId` | undefined &#124; number | - | Element ID |
`sorting` | undefined &#124; string | - | Sorting pattern |
`supplierId` | undefined &#124; number | - | Element ID |

**Returns:** *Promise‹[ListResponseLedgerAccount](../interfaces/listresponseledgeraccount.md)›*

___

### `Static` ledgerSearch

▸ **ledgerSearch**(`__namedParameters`: object): *Promise‹[ListResponseLedgerAccount](../interfaces/listresponseledgeraccount.md)›*

Get ledger (hovedbok).

**`result`** ListResponseLedgerAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountId` | undefined &#124; number | - | Element ID |
`count` | number | 1000 | Number of elements to return |
`customerId` | undefined &#124; number | - | Element ID |
`dateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | - | Format is yyyy-MM-dd (to and excl.). |
`departmentId` | undefined &#124; number | - | Element ID |
`employeeId` | undefined &#124; number | - | Element ID |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`openPostings` | undefined &#124; string | - | Deprecated |
`productId` | undefined &#124; number | - | Element ID |
`projectId` | undefined &#124; number | - | Element ID |
`sorting` | undefined &#124; string | - | Sorting pattern |
`supplierId` | undefined &#124; number | - | Element ID |

**Returns:** *Promise‹[ListResponseLedgerAccount](../interfaces/listresponseledgeraccount.md)›*
