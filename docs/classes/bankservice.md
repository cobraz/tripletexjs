[tripletexjs](../README.md) › [BankService](bankservice.md)

# Class: BankService

## Hierarchy

* **BankService**

## Index

### Methods

* [bankGet](bankservice.md#static-bankget)
* [bankSearch](bankservice.md#static-banksearch)

## Methods

### `Static` bankGet

▸ **bankGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperBank](../interfaces/responsewrapperbank.md)›*

[BETA] Get bank.

**`result`** ResponseWrapperBank successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBank](../interfaces/responsewrapperbank.md)›*

___

### `Static` bankSearch

▸ **bankSearch**(`__namedParameters`: object): *Promise‹[ListResponseBank](../interfaces/listresponsebank.md)›*

[BETA] Find bank corresponding with sent data.

**`result`** ListResponseBank successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isAutoPaySupported` | boolean | - | Equals |
`isBankReconciliationSupport` | boolean | - | Equals |
`registerNumbers` | string | - | Bank register number (four digits) |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBank](../interfaces/listresponsebank.md)›*
