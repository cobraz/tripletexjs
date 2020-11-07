[tripletexjs](../README.md) › [OrderService](orderservice.md)

# Class: OrderService

## Hierarchy

* **OrderService**

## Index

### Methods

* [orderApproveSubscriptionInvoiceApproveSubscriptionInvoice](orderservice.md#static-orderapprovesubscriptioninvoiceapprovesubscriptioninvoice)
* [orderAttachAttach](orderservice.md#static-orderattachattach)
* [orderGet](orderservice.md#static-orderget)
* [orderInvoiceInvoice](orderservice.md#static-orderinvoiceinvoice)
* [orderInvoiceMultipleOrdersInvoiceMultipleOrders](orderservice.md#static-orderinvoicemultipleordersinvoicemultipleorders)
* [orderListPostList](orderservice.md#static-orderlistpostlist)
* [orderPost](orderservice.md#static-orderpost)
* [orderPut](orderservice.md#static-orderput)
* [orderSearch](orderservice.md#static-ordersearch)
* [orderUnApproveSubscriptionInvoiceUnApproveSubscriptionInvoice](orderservice.md#static-orderunapprovesubscriptioninvoiceunapprovesubscriptioninvoice)

## Methods

### `Static` orderApproveSubscriptionInvoiceApproveSubscriptionInvoice

▸ **orderApproveSubscriptionInvoiceApproveSubscriptionInvoice**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

To create a subscription invoice, first create a order with the subscription enabled, then approve it with this method. This approves the order for subscription invoicing.

**`result`** ResponseWrapperInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of order to approve for subscription invoicing. |
`invoiceDate` | string | The approval date for the subscription. |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` orderAttachAttach

▸ **orderAttachAttach**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

Attach document to specified order ID.

**`result`** ResponseWrapperDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` orderGet

▸ **orderGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrder](../interfaces/responsewrapperorder.md)›*

Get order by ID.

**`result`** ResponseWrapperOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperOrder](../interfaces/responsewrapperorder.md)›*

___

### `Static` orderInvoiceInvoice

▸ **orderInvoiceInvoice**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

Create new invoice from order.

**`result`** ResponseWrapperInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`id` | number | - | ID of order to invoice. |
`invoiceDate` | string | - | The invoice date |
`paidAmount` | undefined &#124; number | - | Paid amount to register prepayment of the invoice, in invoice currency. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid. This amount is in the invoice currency. |
`paymentTypeId` | undefined &#124; number | - | Payment type to register prepayment of the invoice. paymentTypeId and paidAmount are optional, but both must be provided if the invoice has already been paid. The payment type must be related to an account with the same currency as the invoice. |
`sendToCustomer` | boolean | true | Send invoice to customer |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` orderInvoiceMultipleOrdersInvoiceMultipleOrders

▸ **orderInvoiceMultipleOrdersInvoiceMultipleOrders**(`__namedParameters`: object): *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

[BETA] Charges a single customer invoice from multiple orders. The orders must be to the same customer, currency, due date, receiver email and attn.

**`result`** ResponseWrapperInvoice successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | string | List of Order IDs - to the same customer, separated by comma. |
`invoiceDate` | string | The invoice date |

**Returns:** *Promise‹[ResponseWrapperInvoice](../interfaces/responsewrapperinvoice.md)›*

___

### `Static` orderListPostList

▸ **orderListPostList**(`__namedParameters`: object): *Promise‹[ListResponseOrder](../interfaces/listresponseorder.md)›*

[BETA] Create multiple Orders with OrderLines. Max 100 at a time.

**`result`** ListResponseOrder successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Order](../modules/order.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseOrder](../interfaces/listresponseorder.md)›*

___

### `Static` orderPost

▸ **orderPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrder](../interfaces/responsewrapperorder.md)›*

Create order.

**`result`** ResponseWrapperOrder successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Order](../modules/order.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperOrder](../interfaces/responsewrapperorder.md)›*

___

### `Static` orderPut

▸ **orderPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrder](../interfaces/responsewrapperorder.md)›*

Update order.

**`result`** ResponseWrapperOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Order](../modules/order.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperOrder](../interfaces/responsewrapperorder.md)›*

___

### `Static` orderSearch

▸ **orderSearch**(`__namedParameters`: object): *Promise‹[ListResponseOrder](../interfaces/listresponseorder.md)›*

Find orders corresponding with sent data.

**`result`** ListResponseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`customerId` | undefined &#124; string | - | List of IDs |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isClosed` | undefined &#124; false &#124; true | - | Equals |
`isSubscription` | undefined &#124; false &#124; true | - | Equals |
`number` | undefined &#124; string | - | Equals |
`orderDateFrom` | string | - | From and including |
`orderDateTo` | string | - | To and excluding |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseOrder](../interfaces/listresponseorder.md)›*

___

### `Static` orderUnApproveSubscriptionInvoiceUnApproveSubscriptionInvoice

▸ **orderUnApproveSubscriptionInvoiceUnApproveSubscriptionInvoice**(`__namedParameters`: object): *Promise‹any›*

Unapproves the order for subscription invoicing.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of order to unapprove for subscription invoicing. |

**Returns:** *Promise‹any›*
