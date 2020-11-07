[tripletexjs](../README.md) › [BankReconciliationMatchService](bankreconciliationmatchservice.md)

# Class: BankReconciliationMatchService

## Hierarchy

* **BankReconciliationMatchService**

## Index

### Methods

* [bankReconciliationMatchDelete](bankreconciliationmatchservice.md#static-bankreconciliationmatchdelete)
* [bankReconciliationMatchGet](bankreconciliationmatchservice.md#static-bankreconciliationmatchget)
* [bankReconciliationMatchPost](bankreconciliationmatchservice.md#static-bankreconciliationmatchpost)
* [bankReconciliationMatchPut](bankreconciliationmatchservice.md#static-bankreconciliationmatchput)
* [bankReconciliationMatchSearch](bankreconciliationmatchservice.md#static-bankreconciliationmatchsearch)
* [bankReconciliationMatchSuggestSuggest](bankreconciliationmatchservice.md#static-bankreconciliationmatchsuggestsuggest)

## Methods

### `Static` bankReconciliationMatchDelete

▸ **bankReconciliationMatchDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete a bank reconciliation match by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` bankReconciliationMatchGet

▸ **bankReconciliationMatchGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliationMatch](../interfaces/responsewrapperbankreconciliationmatch.md)›*

[BETA] Get bank reconciliation match by ID.

**`result`** ResponseWrapperBankReconciliationMatch successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankReconciliationMatch](../interfaces/responsewrapperbankreconciliationmatch.md)›*

___

### `Static` bankReconciliationMatchPost

▸ **bankReconciliationMatchPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliationMatch](../interfaces/responsewrapperbankreconciliationmatch.md)›*

[BETA] Create a bank reconciliation match.

**`result`** ResponseWrapperBankReconciliationMatch successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [BankReconciliationMatch](../modules/bankreconciliationmatch.md) | Partial object describing what should be updated |

**Returns:** *Promise‹[ResponseWrapperBankReconciliationMatch](../interfaces/responsewrapperbankreconciliationmatch.md)›*

___

### `Static` bankReconciliationMatchPut

▸ **bankReconciliationMatchPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliationMatch](../interfaces/responsewrapperbankreconciliationmatch.md)›*

[BETA] Update a bank reconciliation match by ID.

**`result`** ResponseWrapperBankReconciliationMatch successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [BankReconciliationMatch](../modules/bankreconciliationmatch.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankReconciliationMatch](../interfaces/responsewrapperbankreconciliationmatch.md)›*

___

### `Static` bankReconciliationMatchSearch

▸ **bankReconciliationMatchSearch**(`__namedParameters`: object): *Promise‹[ListResponseBankReconciliationMatch](../interfaces/listresponsebankreconciliationmatch.md)›*

[BETA] Find bank reconciliation match corresponding with sent data.

**`result`** ListResponseBankReconciliationMatch successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`bankReconciliationId` | string | - | List of bank reconciliation IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBankReconciliationMatch](../interfaces/listresponsebankreconciliationmatch.md)›*

___

### `Static` bankReconciliationMatchSuggestSuggest

▸ **bankReconciliationMatchSuggestSuggest**(`__namedParameters`: object): *Promise‹[ListResponseBankReconciliationMatch](../interfaces/listresponsebankreconciliationmatch.md)›*

[BETA] Suggest matches for a bank reconciliation by ID.

**`result`** ListResponseBankReconciliationMatch successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`bankReconciliationId` | number | Element ID |

**Returns:** *Promise‹[ListResponseBankReconciliationMatch](../interfaces/listresponsebankreconciliationmatch.md)›*
