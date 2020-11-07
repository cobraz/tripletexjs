[tripletexjs](../README.md) › [InvoiceDetailsService](invoicedetailsservice.md)

# Class: InvoiceDetailsService

## Hierarchy

* **InvoiceDetailsService**

## Index

### Methods

* [invoiceDetailsGet](invoicedetailsservice.md#static-invoicedetailsget)
* [invoiceDetailsSearch](invoicedetailsservice.md#static-invoicedetailssearch)

## Methods

### `Static` invoiceDetailsGet

▸ **invoiceDetailsGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectInvoiceDetails](../interfaces/responsewrapperprojectinvoicedetails.md)›*

Get ProjectInvoiceDetails by ID.

**`result`** ResponseWrapperProjectInvoiceDetails successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectInvoiceDetails](../interfaces/responsewrapperprojectinvoicedetails.md)›*

___

### `Static` invoiceDetailsSearch

▸ **invoiceDetailsSearch**(`__namedParameters`: object): *Promise‹[ListResponseProjectInvoiceDetails](../interfaces/listresponseprojectinvoicedetails.md)›*

Find ProjectInvoiceDetails corresponding with sent data.

**`result`** ListResponseProjectInvoiceDetails successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`invoiceDateFrom` | string | - | From and including |
`invoiceDateTo` | string | - | To and excluding |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectInvoiceDetails](../interfaces/listresponseprojectinvoicedetails.md)›*
