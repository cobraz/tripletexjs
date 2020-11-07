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
`fields` | undefined &#124; string | Fields filter pattern |
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

**Returns:** *Promise‹[ListResponsePosting](../interfaces/listresponseposting.md)›*
