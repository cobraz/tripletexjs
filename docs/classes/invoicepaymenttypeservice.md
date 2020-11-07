[tripletexjs](../README.md) › [InvoicePaymentTypeService](invoicepaymenttypeservice.md)

# Class: InvoicePaymentTypeService

## Hierarchy

* **InvoicePaymentTypeService**

## Index

### Methods

* [invoicePaymentTypeGet](invoicepaymenttypeservice.md#static-invoicepaymenttypeget)
* [invoicePaymentTypeSearch](invoicepaymenttypeservice.md#static-invoicepaymenttypesearch)

## Methods

### `Static` invoicePaymentTypeGet

▸ **invoicePaymentTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPaymentType](../interfaces/responsewrapperpaymenttype.md)›*

Get payment type by ID.

**`result`** ResponseWrapperPaymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPaymentType](../interfaces/responsewrapperpaymenttype.md)›*

___

### `Static` invoicePaymentTypeSearch

▸ **invoicePaymentTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponsePaymentType](../interfaces/listresponsepaymenttype.md)›*

Find payment type corresponding with sent data.

**`result`** ListResponsePaymentType successful operation

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

**Returns:** *Promise‹[ListResponsePaymentType](../interfaces/listresponsepaymenttype.md)›*
