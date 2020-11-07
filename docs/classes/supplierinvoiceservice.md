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
`comment` | undefined &#124; string | comment |
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
`comment` | undefined &#124; string | comment |
`employeeId` | number | Element ID |
`invoiceIds` | undefined &#124; string | ID of the elements |

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
`comment` | undefined &#124; string | comment |
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
`comment` | undefined &#124; string | comment |
`invoiceIds` | undefined &#124; string | ID of the elements |

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
`employeeId` | undefined &#124; number | - | Default is logged in employee |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`searchText` | undefined &#124; string | - | Search for department, employee, project and more |
`showAll` | boolean | false | Show all or just your own |
`sorting` | undefined &#124; string | - | Sorting pattern |

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
`fields` | undefined &#124; string | Fields filter pattern |
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
`invoiceIds` | undefined &#124; string | ID of the elements |

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
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`invoiceDateFrom` | string | - | From and including |
`invoiceDateTo` | string | - | To and excluding |
`invoiceNumber` | undefined &#124; string | - | Equals |
`kid` | undefined &#124; string | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`supplierId` | undefined &#124; string | - | Equals |
`voucherId` | undefined &#124; string | - | Equals |

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
`body` | undefined &#124; [OrderLinePostingDTO](../interfaces/orderlinepostingdto.md)[] | - | Postings |
`id` | number | - | Voucher id |
`sendToLedger` | boolean | false | Equals |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*
