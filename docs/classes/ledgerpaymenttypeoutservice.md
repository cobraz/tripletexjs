[tripletexjs](../README.md) › [LedgerPaymentTypeOutService](ledgerpaymenttypeoutservice.md)

# Class: LedgerPaymentTypeOutService

## Hierarchy

* **LedgerPaymentTypeOutService**

## Index

### Methods

* [ledgerPaymentTypeOutDelete](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutdelete)
* [ledgerPaymentTypeOutGet](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutget)
* [ledgerPaymentTypeOutListPostList](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutlistpostlist)
* [ledgerPaymentTypeOutListPutList](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutlistputlist)
* [ledgerPaymentTypeOutPost](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutpost)
* [ledgerPaymentTypeOutPut](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutput)
* [ledgerPaymentTypeOutSearch](ledgerpaymenttypeoutservice.md#static-ledgerpaymenttypeoutsearch)

## Methods

### `Static` ledgerPaymentTypeOutDelete

▸ **ledgerPaymentTypeOutDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete payment type for outgoing payments by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` ledgerPaymentTypeOutGet

▸ **ledgerPaymentTypeOutGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPaymentTypeOut](../interfaces/responsewrapperpaymenttypeout.md)›*

[BETA] Get payment type for outgoing payments by ID.

**`result`** ResponseWrapperPaymentTypeOut successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPaymentTypeOut](../interfaces/responsewrapperpaymenttypeout.md)›*

___

### `Static` ledgerPaymentTypeOutListPostList

▸ **ledgerPaymentTypeOutListPostList**(`__namedParameters`: object): *Promise‹[ListResponsePaymentTypeOut](../interfaces/listresponsepaymenttypeout.md)›*

[BETA] Create multiple payment types for outgoing payments at once

**`result`** ListResponsePaymentTypeOut successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PaymentTypeOut](../interfaces/paymenttypeout.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponsePaymentTypeOut](../interfaces/listresponsepaymenttypeout.md)›*

___

### `Static` ledgerPaymentTypeOutListPutList

▸ **ledgerPaymentTypeOutListPutList**(`__namedParameters`: object): *Promise‹[ListResponsePaymentTypeOut](../interfaces/listresponsepaymenttypeout.md)›*

[BETA] Update multiple payment types for outgoing payments at once

**`result`** ListResponsePaymentTypeOut successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PaymentTypeOut](../interfaces/paymenttypeout.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponsePaymentTypeOut](../interfaces/listresponsepaymenttypeout.md)›*

___

### `Static` ledgerPaymentTypeOutPost

▸ **ledgerPaymentTypeOutPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperPaymentTypeOut](../interfaces/responsewrapperpaymenttypeout.md)›*

[BETA] Create new payment type for outgoing payments

**`result`** ResponseWrapperPaymentTypeOut successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PaymentTypeOut](../interfaces/paymenttypeout.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperPaymentTypeOut](../interfaces/responsewrapperpaymenttypeout.md)›*

___

### `Static` ledgerPaymentTypeOutPut

▸ **ledgerPaymentTypeOutPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperPaymentTypeOut](../interfaces/responsewrapperpaymenttypeout.md)›*

[BETA] Update existing payment type for outgoing payments

**`result`** ResponseWrapperPaymentTypeOut successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PaymentTypeOut](../interfaces/paymenttypeout.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPaymentTypeOut](../interfaces/responsewrapperpaymenttypeout.md)›*

___

### `Static` ledgerPaymentTypeOutSearch

▸ **ledgerPaymentTypeOutSearch**(`__namedParameters`: object): *Promise‹[ListResponsePaymentTypeOut](../interfaces/listresponsepaymenttypeout.md)›*

[BETA] Gets payment types for outgoing payments
This is an API endpoint for getting payment types for outgoing payments. This is equivalent to the section 'Outgoing Payments' under Accounts Settings in Tripletex. These are the payment types listed in supplier invoices, vat returns, salary payments and Tax/ENI

**`result`** ListResponsePaymentTypeOut successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isInactive` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponsePaymentTypeOut](../interfaces/listresponsepaymenttypeout.md)›*
