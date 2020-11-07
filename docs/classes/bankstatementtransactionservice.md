[tripletexjs](../README.md) › [BankStatementTransactionService](bankstatementtransactionservice.md)

# Class: BankStatementTransactionService

## Hierarchy

* **BankStatementTransactionService**

## Index

### Methods

* [bankStatementTransactionDetailsGetDetails](bankstatementtransactionservice.md#static-bankstatementtransactiondetailsgetdetails)
* [bankStatementTransactionGet](bankstatementtransactionservice.md#static-bankstatementtransactionget)
* [bankStatementTransactionSearch](bankstatementtransactionservice.md#static-bankstatementtransactionsearch)

## Methods

### `Static` bankStatementTransactionDetailsGetDetails

▸ **bankStatementTransactionDetailsGetDetails**(`__namedParameters`: object): *Promise‹[ResponseWrapperObject](../interfaces/responsewrapperobject.md)›*

[BETA] Get additional details about transaction by ID.

**`result`** ResponseWrapperObject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperObject](../interfaces/responsewrapperobject.md)›*

___

### `Static` bankStatementTransactionGet

▸ **bankStatementTransactionGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankTransaction](../interfaces/responsewrapperbanktransaction.md)›*

[BETA] Get bank transaction by ID.

**`result`** ResponseWrapperBankTransaction successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankTransaction](../interfaces/responsewrapperbanktransaction.md)›*

___

### `Static` bankStatementTransactionSearch

▸ **bankStatementTransactionSearch**(`__namedParameters`: object): *Promise‹[ListResponseBankTransaction](../interfaces/listresponsebanktransaction.md)›*

[BETA] Find bank transaction corresponding with sent data.

**`result`** ListResponseBankTransaction successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`bankStatementId` | number | - | Bank statement ID |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBankTransaction](../interfaces/listresponsebanktransaction.md)›*
