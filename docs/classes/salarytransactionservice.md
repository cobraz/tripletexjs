[tripletexjs](../README.md) › [SalaryTransactionService](salarytransactionservice.md)

# Class: SalaryTransactionService

## Hierarchy

* **SalaryTransactionService**

## Index

### Methods

* [salaryTransactionDelete](salarytransactionservice.md#static-salarytransactiondelete)
* [salaryTransactionGet](salarytransactionservice.md#static-salarytransactionget)
* [salaryTransactionPost](salarytransactionservice.md#static-salarytransactionpost)

## Methods

### `Static` salaryTransactionDelete

▸ **salaryTransactionDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete salary transaction by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` salaryTransactionGet

▸ **salaryTransactionGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalaryTransaction](../interfaces/responsewrappersalarytransaction.md)›*

[BETA] Find salary transaction by ID.

**`result`** ResponseWrapperSalaryTransaction successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSalaryTransaction](../interfaces/responsewrappersalarytransaction.md)›*

___

### `Static` salaryTransactionPost

▸ **salaryTransactionPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalaryTransaction](../interfaces/responsewrappersalarytransaction.md)›*

[BETA] Create a new salary transaction.

**`result`** ResponseWrapperSalaryTransaction successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [SalaryTransaction](../interfaces/salarytransaction.md) | - | JSON representing the new object to be created. Should not have ID and version set. |
`generateTaxDeduction` | boolean | false | Generate tax deduction |

**Returns:** *Promise‹[ResponseWrapperSalaryTransaction](../interfaces/responsewrappersalarytransaction.md)›*
