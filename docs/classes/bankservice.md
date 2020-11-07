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
`fields` | undefined &#124; string | Fields filter pattern |
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
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isAutoPaySupported` | undefined &#124; false &#124; true | - | Equals |
`isBankReconciliationSupport` | undefined &#124; false &#124; true | - | Equals |
`registerNumbers` | undefined &#124; string | - | Bank register number (four digits) |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBank](../interfaces/listresponsebank.md)›*
