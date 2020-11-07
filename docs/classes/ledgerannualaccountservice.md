[tripletexjs](../README.md) › [LedgerAnnualAccountService](ledgerannualaccountservice.md)

# Class: LedgerAnnualAccountService

## Hierarchy

* **LedgerAnnualAccountService**

## Index

### Methods

* [ledgerAnnualAccountGet](ledgerannualaccountservice.md#static-ledgerannualaccountget)
* [ledgerAnnualAccountSearch](ledgerannualaccountservice.md#static-ledgerannualaccountsearch)

## Methods

### `Static` ledgerAnnualAccountGet

▸ **ledgerAnnualAccountGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperAnnualAccount](../interfaces/responsewrapperannualaccount.md)›*

Get annual account by ID.

**`result`** ResponseWrapperAnnualAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperAnnualAccount](../interfaces/responsewrapperannualaccount.md)›*

___

### `Static` ledgerAnnualAccountSearch

▸ **ledgerAnnualAccountSearch**(`__namedParameters`: object): *Promise‹[ListResponseAnnualAccount](../interfaces/listresponseannualaccount.md)›*

Find annual accounts corresponding with sent data.

**`result`** ListResponseAnnualAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |
`yearFrom` | number | - | From and including |
`yearTo` | number | - | To and excluding |

**Returns:** *Promise‹[ListResponseAnnualAccount](../interfaces/listresponseannualaccount.md)›*
