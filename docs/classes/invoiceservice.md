[tripletexjs](../README.md) › [InvoiceService](invoiceservice.md)

# Class: InvoiceService

## Hierarchy

* **InvoiceService**

## Index

### Methods

* [invoiceCreateCreditNoteCreateCreditNote](invoiceservice.md#static-invoicecreatecreditnotecreatecreditnote)
* [invoiceCreateReminderCreateReminder](invoiceservice.md#static-invoicecreateremindercreatereminder)
* [invoiceGet](invoiceservice.md#static-invoiceget)
* [invoiceListPostList](invoiceservice.md#static-invoicelistpostlist)
* [invoicePaymentPayment](invoiceservice.md#static-invoicepaymentpayment)
* [invoicePdfDownloadPdf](invoiceservice.md#static-invoicepdfdownloadpdf)
* [invoicePost](invoiceservice.md#static-invoicepost)
* [invoiceSearch](invoiceservice.md#static-invoicesearch)
* [invoiceSendSend](invoiceservice.md#static-invoicesendsend)

## Methods

### `Static` invoiceCreateCreditNoteCreateCreditNote

▸ **invoiceCreateCreditNoteCreateCreditNote**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

Creates a new Invoice representing a credit memo that nullifies the given invoice. Updates this invoice and any pre-existing inverse invoice.

**`result`** ResponseWrapperInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | Comment |
`creditNoteEmail` | string | The credit note will be sent electronically if this field is filled out |
`date` | string | Credit note date |
`id` | number | Invoice id |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` invoiceCreateReminderCreateReminder

▸ **invoiceCreateReminderCreateReminder**(`__namedParameters`: object): *Promise‹any›*

Create invoice reminder and sends it by the given dispatch type. Supports the reminder types SOFT_REMINDER, REMINDER and NOTICE_OF_DEBT_COLLECTION. DispatchType NETS_PRINT must have type NOTICE_OF_DEBT_COLLECTION. SMS and NETS_PRINT must be activated prior to usage in the API.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`date` | string | - | yyyy-MM-dd. Defaults to today. |
`dispatchType` | "NETS_PRINT" &#124; "EMAIL" &#124; "SMS" | - | dispatchType |
`id` | number | - | Element ID |
`includeCharge` | boolean | false | Equals |
`includeInterest` | boolean | false | Equals |
`smsNumber` | string | - | SMS number (must be a valid Norwegian telephone number) |
`type` | "SOFT_REMINDER" &#124; "REMINDER" &#124; "NOTICE_OF_DEBT_COLLECTION" &#124; "DEBT_COLLECTION" | - | type |

**Returns:** *Promise‹any›*

___

### `Static` invoiceGet

▸ **invoiceGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

Get invoice by ID.

**`result`** ResponseWrapperInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` invoiceListPostList

▸ **invoiceListPostList**(`__namedParameters`: object): *Promise‹[ListResponseInvoice](../interfaces/listresponseinvoice.md)›*

[BETA] Create multiple invoices. Max 100 at a time.

**`result`** ListResponseInvoice successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [Invoice](../modules/invoice.md)[] | - | JSON representing a list of new object to be created. Should not have ID and version set. |
`sendToCustomer` | boolean | true | Equals |

**Returns:** *Promise‹[ListResponseInvoice](../interfaces/listresponseinvoice.md)›*

___

### `Static` invoicePaymentPayment

▸ **invoicePaymentPayment**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

Update invoice. The invoice is updated with payment information. The amount is in the invoice’s currency.

**`result`** ResponseWrapperInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Invoice id |
`paidAmount` | number | Amount paid by customer in the company currency, typically NOK. |
`paidAmountCurrency` | number | Amount paid by customer in the invoice currency. Optional, but required for invoices in alternate currencies. |
`paymentDate` | string | Payment date |
`paymentTypeId` | number | PaymentType id |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` invoicePdfDownloadPdf

▸ **invoicePdfDownloadPdf**(`__namedParameters`: object): *Promise‹string›*

Get invoice document by invoice ID.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`invoiceId` | number | Invoice ID from which PDF is downloaded. |

**Returns:** *Promise‹string›*

___

### `Static` invoicePost

▸ **invoicePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

Create invoice. Related Order and OrderLines can be created first, or included as new objects inside the Invoice.

**`result`** ResponseWrapperInvoice successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [Invoice](../modules/invoice.md) | - | JSON representing the new object to be created. Should not have ID and version set. |
`paidAmount` | number | - | Paid amount to register prepayment of the invoice, in invoice currency. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid. |
`paymentTypeId` | number | - | Payment type to register prepayment of the invoice. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid. |
`sendToCustomer` | boolean | true | Equals |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` invoiceSearch

▸ **invoiceSearch**(`__namedParameters`: object): *Promise‹[ListResponseInvoice](../interfaces/listresponseinvoice.md)›*

Find invoices corresponding with sent data. Includes charged outgoing invoices only.

**`result`** ListResponseInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`customerId` | string | - | Equals |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`invoiceDateFrom` | string | - | From and including |
`invoiceDateTo` | string | - | To and excluding |
`invoiceNumber` | string | - | Equals |
`kid` | string | - | Equals |
`sorting` | string | - | Sorting pattern |
`voucherId` | string | - | Equals |

**Returns:** *Promise‹[ListResponseInvoice](../interfaces/listresponseinvoice.md)›*

___

### `Static` invoiceSendSend

▸ **invoiceSendSend**(`__namedParameters`: object): *Promise‹any›*

Send invoice by ID and sendType. Optionally override email recipient.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |
`overrideEmailAddress` | string | Will override email address if sendType = EMAIL |
`sendType` | "EMAIL" &#124; "EHF" &#124; "EFAKTURA" &#124; "VIPPS" &#124; "PAPER" | SendType |

**Returns:** *Promise‹any›*
