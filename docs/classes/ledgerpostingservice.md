[tripletexjs](../README.md) › [LedgerPostingService](ledgerpostingservice.md)

# Class: LedgerPostingService

## Hierarchy

* **LedgerPostingService**

## Index

### Methods

* [ledgerPostingGet](ledgerpostingservice.md#static-ledgerpostingget)
* [ledgerPostingOpenPostOpenPost](ledgerpostingservice.md#static-ledgerpostingopenpostopenpost)
* [ledgerPostingSearch](ledgerpostingservice.md#static-ledgerpostingsearch)

## Methods

### `Static` ledgerPostingGet

▸ **ledgerPostingGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPosting](../interfaces/responsewrapperposting.md)›*

Find postings by ID.

**`result`** ResponseWrapperPosting successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPosting](../interfaces/responsewrapperposting.md)›*

___

### `Static` ledgerPostingOpenPostOpenPost

▸ **ledgerPostingOpenPostOpenPost**(`__namedParameters`: object): *Promise‹[ListResponsePosting](../interfaces/listresponseposting.md)›*

Find open posts corresponding with sent data.

**`result`** ListResponsePosting successful operation

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

**Returns:** *Promise‹[ListResponsePosting](../interfaces/listresponseposting.md)›*

___

### `Static` ledgerPostingSearch

▸ **ledgerPostingSearch**(`__namedParameters`: object): *Promise‹[ListResponsePosting](../interfaces/listresponseposting.md)›*

Find postings corresponding with sent data.

**`result`** ListResponsePosting successful operation

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

**Returns:** *Promise‹[ListResponsePosting](../interfaces/listresponseposting.md)›*
