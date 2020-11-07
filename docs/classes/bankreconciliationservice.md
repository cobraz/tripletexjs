[tripletexjs](../README.md) › [BankReconciliationService](bankreconciliationservice.md)

# Class: BankReconciliationService

## Hierarchy

* **BankReconciliationService**

## Index

### Methods

* [bankReconciliationAdjustmentAdjustment](bankreconciliationservice.md#static-bankreconciliationadjustmentadjustment)
* [bankReconciliationDelete](bankreconciliationservice.md#static-bankreconciliationdelete)
* [bankReconciliationGet](bankreconciliationservice.md#static-bankreconciliationget)
* [bankReconciliationLastClosedLastClosed](bankreconciliationservice.md#static-bankreconciliationlastclosedlastclosed)
* [bankReconciliationPost](bankreconciliationservice.md#static-bankreconciliationpost)
* [bankReconciliationPut](bankreconciliationservice.md#static-bankreconciliationput)
* [bankReconciliationSearch](bankreconciliationservice.md#static-bankreconciliationsearch)

## Methods

### `Static` bankReconciliationAdjustmentAdjustment

▸ **bankReconciliationAdjustmentAdjustment**(`__namedParameters`: object): *Promise‹[ListResponseBankReconciliationAdjustment](../interfaces/listresponsebankreconciliationadjustment.md)›*

[BETA] Add an adjustment to reconciliation by ID.

**`result`** ListResponseBankReconciliationAdjustment successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [BankReconciliationAdjustment](../interfaces/bankreconciliationadjustment.md)[] | Adjustments |
`id` | number | Element ID |

**Returns:** *Promise‹[ListResponseBankReconciliationAdjustment](../interfaces/listresponsebankreconciliationadjustment.md)›*

___

### `Static` bankReconciliationDelete

▸ **bankReconciliationDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete bank reconciliation by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` bankReconciliationGet

▸ **bankReconciliationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

[BETA] Get bank reconciliation.

**`result`** ResponseWrapperBankReconciliation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

___

### `Static` bankReconciliationLastClosedLastClosed

▸ **bankReconciliationLastClosedLastClosed**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

[BETA] Get last closed reconciliation by account ID.

**`result`** ResponseWrapperBankReconciliation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountId` | number | Account ID |
`after` | undefined &#124; string | Format is yyyy-MM-dd |
`fields` | undefined &#124; string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

___

### `Static` bankReconciliationPost

▸ **bankReconciliationPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

[BETA] Post a bank reconciliation.

**`result`** ResponseWrapperBankReconciliation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [BankReconciliation](../modules/bankreconciliation.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

___

### `Static` bankReconciliationPut

▸ **bankReconciliationPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

[BETA] Update a bank reconciliation.

**`result`** ResponseWrapperBankReconciliation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [BankReconciliation](../modules/bankreconciliation.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankReconciliation](../interfaces/responsewrapperbankreconciliation.md)›*

___

### `Static` bankReconciliationSearch

▸ **bankReconciliationSearch**(`__namedParameters`: object): *Promise‹[ListResponseBankReconciliation](../interfaces/listresponsebankreconciliation.md)›*

[BETA] Find bank reconciliation corresponding with sent data.

**`result`** ListResponseBankReconciliation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountId` | undefined &#124; string | - | List of IDs |
`accountingPeriodId` | undefined &#124; string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBankReconciliation](../interfaces/listresponsebankreconciliation.md)›*
