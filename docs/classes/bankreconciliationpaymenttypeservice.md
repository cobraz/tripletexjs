[tripletexjs](../README.md) › [BankReconciliationPaymentTypeService](bankreconciliationpaymenttypeservice.md)

# Class: BankReconciliationPaymentTypeService

## Hierarchy

* **BankReconciliationPaymentTypeService**

## Index

### Methods

* [bankReconciliationPaymentTypeGet](bankreconciliationpaymenttypeservice.md#static-bankreconciliationpaymenttypeget)
* [bankReconciliationPaymentTypeSearch](bankreconciliationpaymenttypeservice.md#static-bankreconciliationpaymenttypesearch)

## Methods

### `Static` bankReconciliationPaymentTypeGet

▸ **bankReconciliationPaymentTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankReconciliationPaymentType](../interfaces/responsewrapperbankreconciliationpaymenttype.md)›*

[BETA] Get payment type by ID.

**`result`** ResponseWrapperBankReconciliationPaymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankReconciliationPaymentType](../interfaces/responsewrapperbankreconciliationpaymenttype.md)›*

___

### `Static` bankReconciliationPaymentTypeSearch

▸ **bankReconciliationPaymentTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseBankReconciliationPaymentType](../interfaces/listresponsebankreconciliationpaymenttype.md)›*

[BETA] Find payment type corresponding with sent data.

**`result`** ListResponseBankReconciliationPaymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | undefined &#124; string | - | Containing |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBankReconciliationPaymentType](../interfaces/listresponsebankreconciliationpaymenttype.md)›*
