[tripletexjs](../README.md) › [LedgerVoucherService](ledgervoucherservice.md)

# Class: LedgerVoucherService

## Hierarchy

* **LedgerVoucherService**

## Index

### Methods

* [ledgerVoucherAttachmentDeleteAttachment](ledgervoucherservice.md#static-ledgervoucherattachmentdeleteattachment)
* [ledgerVoucherAttachmentUploadAttachment](ledgervoucherservice.md#static-ledgervoucherattachmentuploadattachment)
* [ledgerVoucherDelete](ledgervoucherservice.md#static-ledgervoucherdelete)
* [ledgerVoucherGet](ledgervoucherservice.md#static-ledgervoucherget)
* [ledgerVoucherImportDocumentImportDocument](ledgervoucherservice.md#static-ledgervoucherimportdocumentimportdocument)
* [ledgerVoucherImportGbat10ImportGbat10](ledgervoucherservice.md#static-ledgervoucherimportgbat10importgbat10)
* [ledgerVoucherListPutList](ledgervoucherservice.md#static-ledgervoucherlistputlist)
* [ledgerVoucherNonPostedNonPosted](ledgervoucherservice.md#static-ledgervouchernonpostednonposted)
* [ledgerVoucherOptionsOptions](ledgervoucherservice.md#static-ledgervoucheroptionsoptions)
* [ledgerVoucherPdfDownloadPdf](ledgervoucherservice.md#static-ledgervoucherpdfdownloadpdf)
* [ledgerVoucherPdfUploadPdf](ledgervoucherservice.md#static-ledgervoucherpdfuploadpdf)
* [ledgerVoucherPost](ledgervoucherservice.md#static-ledgervoucherpost)
* [ledgerVoucherPut](ledgervoucherservice.md#static-ledgervoucherput)
* [ledgerVoucherReverseReverse](ledgervoucherservice.md#static-ledgervoucherreversereverse)
* [ledgerVoucherSearch](ledgervoucherservice.md#static-ledgervouchersearch)
* [ledgerVoucherSendToInboxSendToInbox](ledgervoucherservice.md#static-ledgervouchersendtoinboxsendtoinbox)
* [ledgerVoucherSendToLedgerSendToLedger](ledgervoucherservice.md#static-ledgervouchersendtoledgersendtoledger)

## Methods

### `Static` ledgerVoucherAttachmentDeleteAttachment

▸ **ledgerVoucherAttachmentDeleteAttachment**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete attachment.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`id` | number | - | ID of voucher containing the attachment to delete. |
`sendToInbox` | boolean | false | Should the attachment be sent to inbox rather than deleted? |
`split` | boolean | false | If sendToInbox is true, should the attachment be split into one voucher per page? |
`version` | number | - | Version of voucher containing the attachment to delete. |

**Returns:** *Promise‹any›*

___

### `Static` ledgerVoucherAttachmentUploadAttachment

▸ **ledgerVoucherAttachmentUploadAttachment**(`__namedParameters`: object): *Promise‹any›*

Upload attachment to voucher. If the voucher already has an attachment the content will be appended to the existing attachment as new PDF page(s). Valid document formats are PDF, PNG, JPEG and TIFF. Non PDF formats will be converted to PDF. Send as multipart form.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`voucherId` | number | Voucher ID to upload attachment to. |

**Returns:** *Promise‹any›*

___

### `Static` ledgerVoucherDelete

▸ **ledgerVoucherDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete voucher by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` ledgerVoucherGet

▸ **ledgerVoucherGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

Get voucher by ID.

**`result`** ResponseWrapperVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

___

### `Static` ledgerVoucherImportDocumentImportDocument

▸ **ledgerVoucherImportDocumentImportDocument**(`__namedParameters`: object): *Promise‹[ListResponseVoucher](../interfaces/listresponsevoucher.md)›*

[BETA] Upload a document to create one or more vouchers. Valid document formats are PDF, PNG, JPEG, TIFF and EHF. Send as multipart form.

**`result`** ListResponseVoucher successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`description` | string | - | Optional description to use for the voucher(s). If omitted the file name will be used. |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | - | The file |
`split` | boolean | false | If the document consists of several pages, should the document be split into one voucher per page? |

**Returns:** *Promise‹[ListResponseVoucher](../interfaces/listresponsevoucher.md)›*

___

### `Static` ledgerVoucherImportGbat10ImportGbat10

▸ **ledgerVoucherImportGbat10ImportGbat10**(`__namedParameters`: object): *Promise‹any›*

Import GBAT10. Send as multipart form.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encoding` | string | "utf-8" | The file encoding |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | - | The file |
`generateVatPostings` | boolean | - | If the import should generate VAT postings |

**Returns:** *Promise‹any›*

___

### `Static` ledgerVoucherListPutList

▸ **ledgerVoucherListPutList**(`__namedParameters`: object): *Promise‹[ListResponseVoucher](../interfaces/listresponsevoucher.md)›*

[BETA] Update multiple vouchers. Postings with guiRow==0 will be deleted and regenerated.

**`result`** ListResponseVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [Voucher](../interfaces/voucher.md)[] | - | JSON representing updates to object. Should have ID and version set. |
`sendToLedger` | boolean | true | Should the voucher be sent to ledger? Requires the "Advanced Voucher" permission. |

**Returns:** *Promise‹[ListResponseVoucher](../interfaces/listresponsevoucher.md)›*

___

### `Static` ledgerVoucherNonPostedNonPosted

▸ **ledgerVoucherNonPostedNonPosted**(`__namedParameters`: object): *Promise‹[ListResponseVoucher](../interfaces/listresponsevoucher.md)›*

[BETA] Find non-posted vouchers.

**`result`** ListResponseVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`changedSince` | string | - | Only return elements that have changed since this date and time |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`includeNonApproved` | boolean | false | Include non-approved vouchers in the result. |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseVoucher](../interfaces/listresponsevoucher.md)›*

___

### `Static` ledgerVoucherOptionsOptions

▸ **ledgerVoucherOptionsOptions**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucherOptions](../interfaces/responsewrappervoucheroptions.md)›*

[BETA] Returns a data structure containing meta information about operations that are available for this voucher. Currently only implemented for DELETE: It is possible to check if the voucher is deletable.

**`result`** ResponseWrapperVoucherOptions successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperVoucherOptions](../interfaces/responsewrappervoucheroptions.md)›*

___

### `Static` ledgerVoucherPdfDownloadPdf

▸ **ledgerVoucherPdfDownloadPdf**(`__namedParameters`: object): *Promise‹string›*

Get PDF representation of voucher by ID.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`voucherId` | number | Voucher ID from which PDF is downloaded. |

**Returns:** *Promise‹string›*

___

### `Static` ledgerVoucherPdfUploadPdf

▸ **ledgerVoucherPdfUploadPdf**(`__namedParameters`: object): *Promise‹any›*

[DEPRECATED] Use POST ledger/voucher/{voucherId}/attachment instead.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`fileName` | string | File name to store the pdf under. Will not be the same as the filename on the file returned. |
`voucherId` | number | Voucher ID to upload PDF to. |

**Returns:** *Promise‹any›*

___

### `Static` ledgerVoucherPost

▸ **ledgerVoucherPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

Add new voucher. IMPORTANT: Also creates postings. Only the gross amounts will be used

**`result`** ResponseWrapperVoucher successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [Voucher](../interfaces/voucher.md) | - | JSON representing the new object to be created. Should not have ID and version set. |
`sendToLedger` | boolean | true | Should the voucher be sent to ledger? Requires the "Advanced Voucher" permission. |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

___

### `Static` ledgerVoucherPut

▸ **ledgerVoucherPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

[BETA] Update voucher. Postings with guiRow==0 will be deleted and regenerated.

**`result`** ResponseWrapperVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [Voucher](../interfaces/voucher.md) | - | Partial object describing what should be updated |
`id` | number | - | Element ID |
`sendToLedger` | boolean | true | Should the voucher be sent to ledger? Requires the "Advanced Voucher" permission. |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

___

### `Static` ledgerVoucherReverseReverse

▸ **ledgerVoucherReverseReverse**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

Reverses the voucher, and returns the reversed voucher. Supports reversing most voucher types, except salary transactions.

**`result`** ResponseWrapperVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`date` | string | Reverse voucher date |
`id` | number | ID of voucher that should be reversed. |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

___

### `Static` ledgerVoucherSearch

▸ **ledgerVoucherSearch**(`__namedParameters`: object): *Promise‹[VoucherSearchResponse](../interfaces/vouchersearchresponse.md)›*

Find vouchers corresponding with sent data.

**`result`** VoucherSearchResponse successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`number` | string | - | List of IDs |
`numberFrom` | number | - | From and including |
`numberTo` | number | - | To and excluding |
`sorting` | string | - | Sorting pattern |
`typeId` | string | - | List of IDs |

**Returns:** *Promise‹[VoucherSearchResponse](../interfaces/vouchersearchresponse.md)›*

___

### `Static` ledgerVoucherSendToInboxSendToInbox

▸ **ledgerVoucherSendToInboxSendToInbox**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

[BETA] Send voucher to inbox.

**`result`** ResponseWrapperVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`comment` | string | Description of why the voucher was rejected. This parameter is only used if the approval feature is enabled. |
`id` | number | ID of voucher that should be sent to inbox. |
`version` | number | Version of voucher that should be sent to inbox. |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

___

### `Static` ledgerVoucherSendToLedgerSendToLedger

▸ **ledgerVoucherSendToLedgerSendToLedger**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*

[BETA] Send voucher to ledger.

**`result`** ResponseWrapperVoucher successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of voucher that should be sent to ledger. |
`number` | number | Voucher number to use. If omitted or 0 the system will assign the number. |
`version` | number | Version of voucher that should be sent to ledger. |

**Returns:** *Promise‹[ResponseWrapperVoucher](../interfaces/responsewrappervoucher.md)›*
