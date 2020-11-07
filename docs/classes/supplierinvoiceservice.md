[tripletexjs](../README.md) › [SupplierInvoiceService](supplierinvoiceservice.md)

# Class: SupplierInvoiceService

## Hierarchy

* **SupplierInvoiceService**

## Index

### Methods

* [supplierInvoiceAddRecipientAddRecipient](supplierinvoiceservice.md#static-supplierinvoiceaddrecipientaddrecipient)
* [supplierInvoiceAddRecipientAddRecipientToMany](supplierinvoiceservice.md#static-supplierinvoiceaddrecipientaddrecipienttomany)
* [supplierInvoiceApproveApprove](supplierinvoiceservice.md#static-supplierinvoiceapproveapprove)
* [supplierInvoiceApproveApproveMany](supplierinvoiceservice.md#static-supplierinvoiceapproveapprovemany)
* [supplierInvoiceForApprovalGetApprovalInvoices](supplierinvoiceservice.md#static-supplierinvoiceforapprovalgetapprovalinvoices)
* [supplierInvoiceGet](supplierinvoiceservice.md#static-supplierinvoiceget)
* [supplierInvoicePdfDownloadPdf](supplierinvoiceservice.md#static-supplierinvoicepdfdownloadpdf)
* [supplierInvoiceRejectReject](supplierinvoiceservice.md#static-supplierinvoicerejectreject)
* [supplierInvoiceRejectRejectMany](supplierinvoiceservice.md#static-supplierinvoicerejectrejectmany)
* [supplierInvoiceSearch](supplierinvoiceservice.md#static-supplierinvoicesearch)
* [supplierInvoiceVoucherPostingsPutPostings](supplierinvoiceservice.md#static-supplierinvoicevoucherpostingsputpostings)

## Methods

### `Static` supplierInvoiceAddRecipientAddRecipient

▸ **supplierInvoiceAddRecipientAddRecipient**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

[BETA] Add recipient to supplier invoices.

**`result`** ResponseWrapperSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | comment |
`employeeId` | number | ID of the elements |
`invoiceId` | number | Invoice ID. |

**Returns:** *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

___

### `Static` supplierInvoiceAddRecipientAddRecipientToMany

▸ **supplierInvoiceAddRecipientAddRecipientToMany**(`__namedParameters`: object): *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

[BETA] Add recipient.

**`result`** ListResponseSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | comment |
`employeeId` | number | Element ID |
`invoiceIds` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

___

### `Static` supplierInvoiceApproveApprove

▸ **supplierInvoiceApproveApprove**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

[BETA] Approve supplier invoice.

**`result`** ResponseWrapperSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | comment |
`invoiceId` | number | ID of the elements |

**Returns:** *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

___

### `Static` supplierInvoiceApproveApproveMany

▸ **supplierInvoiceApproveApproveMany**(`__namedParameters`: object): *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

[BETA] Approve supplier invoices.

**`result`** ListResponseSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | comment |
`invoiceIds` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

___

### `Static` supplierInvoiceForApprovalGetApprovalInvoices

▸ **supplierInvoiceForApprovalGetApprovalInvoices**(`__namedParameters`: object): *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

[BETA] Get supplierInvoices for approval

**`result`** ListResponseSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employeeId` | number | - | Default is logged in employee |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`searchText` | string | - | Search for department, employee, project and more |
`showAll` | boolean | false | Show all or just your own |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

___

### `Static` supplierInvoiceGet

▸ **supplierInvoiceGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

[BETA] Get supplierInvoice by ID.

**`result`** ResponseWrapperSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

___

### `Static` supplierInvoicePdfDownloadPdf

▸ **supplierInvoicePdfDownloadPdf**(`__namedParameters`: object): *Promise‹string›*

[BETA] Get supplierInvoice document by invoice ID.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`invoiceId` | number | Invoice ID from which document is downloaded. |

**Returns:** *Promise‹string›*

___

### `Static` supplierInvoiceRejectReject

▸ **supplierInvoiceRejectReject**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

[BETA] reject supplier invoice.

**`result`** ResponseWrapperSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | - |
`invoiceId` | number | Invoice ID. |

**Returns:** *Promise‹[ResponseWrapperSupplierInvoice](../interfaces/responsewrappersupplierinvoice.md)›*

___

### `Static` supplierInvoiceRejectRejectMany

▸ **supplierInvoiceRejectRejectMany**(`__namedParameters`: object): *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

[BETA] reject supplier invoices.

**`result`** ListResponseSupplierInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | - |
`invoiceIds` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

___

### `Static` supplierInvoiceSearch

▸ **supplierInvoiceSearch**(`__namedParameters`: object): *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

[BETA] Find supplierInvoices corresponding with sent data.

**`result`** ListResponseSupplierInvoice successful operation

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
`invoiceNumber` | string | - | Equals |
`kid` | string | - | Equals |
`sorting` | string | - | Sorting pattern |
`supplierId` | string | - | Equals |
`voucherId` | string | - | Equals |

**Returns:** *Promise‹[ListResponseSupplierInvoice](../interfaces/listresponsesupplierinvoice.md)›*

___

### `Static` supplierInvoiceVoucherPostingsPutPostings

▸ **supplierInvoiceVoucherPostingsPutPostings**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

[BETA] Put debit postings.

**`result`** ResponseWrapperVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [OrderLinePostingDTO](../interfaces/orderlinepostingdto.md)[] | - | Postings |
`id` | number | - | Voucher id |
`sendToLedger` | boolean | false | Equals |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*
