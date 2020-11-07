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
`accountId` | number | - | Element ID |
`count` | number | 1000 | Number of elements to return |
`customerId` | number | - | Element ID |
`date` | string | - | Invoice date. Format is yyyy-MM-dd (to and excl.). |
`departmentId` | number | - | Element ID |
`employeeId` | number | - | Element ID |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`productId` | number | - | Element ID |
`projectId` | number | - | Element ID |
`sorting` | string | - | Sorting pattern |
`supplierId` | number | - | Element ID |

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
`accountId` | number | - | Element ID |
`count` | number | 1000 | Number of elements to return |
`customerId` | number | - | Element ID |
`dateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | - | Format is yyyy-MM-dd (to and excl.). |
`departmentId` | number | - | Element ID |
`employeeId` | number | - | Element ID |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`openPostings` | string | - | Deprecated |
`productId` | number | - | Element ID |
`projectId` | number | - | Element ID |
`sorting` | string | - | Sorting pattern |
`supplierId` | number | - | Element ID |

**Returns:** *Promise‹[ListResponseLedgerAccount](../interfaces/listresponseledgeraccount.md)›*
