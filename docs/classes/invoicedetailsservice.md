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
`fields` | string | Fields filter pattern |
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
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`invoiceDateFrom` | string | - | From and including |
`invoiceDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectInvoiceDetails](../interfaces/listresponseprojectinvoicedetails.md)›*
