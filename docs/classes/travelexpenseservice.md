[tripletexjs](../README.md) › [TravelExpenseService](travelexpenseservice.md)

# Class: TravelExpenseService

## Hierarchy

* **TravelExpenseService**

## Index

### Methods

* [travelExpenseApproveApprove](travelexpenseservice.md#static-travelexpenseapproveapprove)
* [travelExpenseAttachmentDeleteAttachment](travelexpenseservice.md#static-travelexpenseattachmentdeleteattachment)
* [travelExpenseAttachmentDownloadAttachment](travelexpenseservice.md#static-travelexpenseattachmentdownloadattachment)
* [travelExpenseAttachmentListUploadAttachments](travelexpenseservice.md#static-travelexpenseattachmentlistuploadattachments)
* [travelExpenseAttachmentUploadAttachment](travelexpenseservice.md#static-travelexpenseattachmentuploadattachment)
* [travelExpenseCopyCopy](travelexpenseservice.md#static-travelexpensecopycopy)
* [travelExpenseCreateVouchersCreateVouchers](travelexpenseservice.md#static-travelexpensecreatevoucherscreatevouchers)
* [travelExpenseDelete](travelexpenseservice.md#static-travelexpensedelete)
* [travelExpenseDeliverDeliver](travelexpenseservice.md#static-travelexpensedeliverdeliver)
* [travelExpenseGet](travelexpenseservice.md#static-travelexpenseget)
* [travelExpensePost](travelexpenseservice.md#static-travelexpensepost)
* [travelExpensePut](travelexpenseservice.md#static-travelexpenseput)
* [travelExpenseSearch](travelexpenseservice.md#static-travelexpensesearch)
* [travelExpenseUnapproveUnapprove](travelexpenseservice.md#static-travelexpenseunapproveunapprove)
* [travelExpenseUndeliverUndeliver](travelexpenseservice.md#static-travelexpenseundeliverundeliver)

## Methods

### `Static` travelExpenseApproveApprove

▸ **travelExpenseApproveApprove**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

[BETA] Approve travel expenses.

**`result`** ListResponseTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

___

### `Static` travelExpenseAttachmentDeleteAttachment

▸ **travelExpenseAttachmentDeleteAttachment**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete attachment.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`sendToInbox` | boolean | false | Should the attachment be sent to inbox rather than deleted? |
`split` | boolean | false | If sendToInbox is true, should the attachment be split into one voucher per page? |
`travelExpenseId` | number | - | ID of attachment containing the attachment to delete. |
`version` | number | - | Version of voucher containing the attachment to delete. |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseAttachmentDownloadAttachment

▸ **travelExpenseAttachmentDownloadAttachment**(`__namedParameters`: object): *Promise‹string›*

Get attachment by travel expense ID.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`travelExpenseId` | number | Travel Expense ID from which PDF is downloaded. |

**Returns:** *Promise‹string›*

___

### `Static` travelExpenseAttachmentListUploadAttachments

▸ **travelExpenseAttachmentListUploadAttachments**(`__namedParameters`: object): *Promise‹any›*

Upload multiple attachments to travel expense.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [FormDataMultiPart](../interfaces/formdatamultipart.md) | - | Multipart files |
`createNewCost` | boolean | false | Create new cost row when you add the attachment |
`travelExpenseId` | number | - | Travel Expense ID to upload attachment to. |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseAttachmentUploadAttachment

▸ **travelExpenseAttachmentUploadAttachment**(`__namedParameters`: object): *Promise‹any›*

Upload attachment to travel expense.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`createNewCost` | boolean | false | Create new cost row when you add the attachment |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | - | The file |
`travelExpenseId` | number | - | Travel Expense ID to upload attachment to. |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseCopyCopy

▸ **travelExpenseCopyCopy**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

[BETA] Copy travel expense.

**`result`** ResponseWrapperTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

___

### `Static` travelExpenseCreateVouchersCreateVouchers

▸ **travelExpenseCreateVouchersCreateVouchers**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

[BETA] Create vouchers

**`result`** ListResponseTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`date` | string | yyyy-MM-dd. Defaults to today. |
`id` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

___

### `Static` travelExpenseDelete

▸ **travelExpenseDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete travel expense.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseDeliverDeliver

▸ **travelExpenseDeliverDeliver**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

[BETA] Deliver travel expenses.

**`result`** ListResponseTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

___

### `Static` travelExpenseGet

▸ **travelExpenseGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

[BETA] Get travel expense by ID.

**`result`** ResponseWrapperTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

___

### `Static` travelExpensePost

▸ **travelExpensePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

[BETA] Create travel expense.

**`result`** ResponseWrapperTravelExpense successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [TravelExpense](../modules/travelexpense.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

___

### `Static` travelExpensePut

▸ **travelExpensePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

[BETA] Update travel expense.

**`result`** ResponseWrapperTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [TravelExpense](../modules/travelexpense.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpense](../interfaces/responsewrappertravelexpense.md)›*

___

### `Static` travelExpenseSearch

▸ **travelExpenseSearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

[BETA] Find travel expenses corresponding with sent data.

**`result`** ListResponseTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`departmentId` | string | - | Equals |
`departureDateFrom` | string | - | From and including |
`employeeId` | string | - | Equals |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`projectId` | string | - | Equals |
`projectManagerId` | string | - | Equals |
`returnDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |
`state` | "ALL" &#124; "OPEN" &#124; "APPROVED" &#124; "SALARY_PAID" &#124; "DELIVERED" | "ALL" | category |

**Returns:** *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

___

### `Static` travelExpenseUnapproveUnapprove

▸ **travelExpenseUnapproveUnapprove**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

[BETA] Unapprove travel expenses.

**`result`** ListResponseTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

___

### `Static` travelExpenseUndeliverUndeliver

▸ **travelExpenseUndeliverUndeliver**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*

[BETA] Undeliver travel expenses.

**`result`** ListResponseTravelExpense successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the elements |

**Returns:** *Promise‹[ListResponseTravelExpense](../interfaces/listresponsetravelexpense.md)›*
