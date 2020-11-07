[tripletexjs](../README.md) › [PurchaseOrderService](purchaseorderservice.md)

# Class: PurchaseOrderService

## Hierarchy

* **PurchaseOrderService**

## Index

### Methods

* [purchaseOrderDelete](purchaseorderservice.md#static-purchaseorderdelete)
* [purchaseOrderGet](purchaseorderservice.md#static-purchaseorderget)
* [purchaseOrderPost](purchaseorderservice.md#static-purchaseorderpost)
* [purchaseOrderPut](purchaseorderservice.md#static-purchaseorderput)
* [purchaseOrderSearch](purchaseorderservice.md#static-purchaseordersearch)
* [purchaseOrderSendByEmailSendByEmail](purchaseorderservice.md#static-purchaseordersendbyemailsendbyemail)
* [purchaseOrderSendSend](purchaseorderservice.md#static-purchaseordersendsend)

## Methods

### `Static` purchaseOrderDelete

▸ **purchaseOrderDelete**(`__namedParameters`: object): *Promise‹any›*

 [BETA] Delete purchase order.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderGet

▸ **purchaseOrderGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

 [BETA] Find purchase order by ID.

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderPost

▸ **purchaseOrderPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Creates a new purchase order

**`result`** ResponseWrapperPurchaseOrder successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PurchaseOrder](../modules/purchaseorder.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderPut

▸ **purchaseOrderPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

 [BETA] Update purchase order.

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PurchaseOrder](../modules/purchaseorder.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderSearch

▸ **purchaseOrderSearch**(`__namedParameters`: object): *Promise‹[ListResponsePurchaseOrder](../interfaces/listresponsepurchaseorder.md)›*

[BETA] Find purchase orders with send data

**`result`** ListResponsePurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`creationDateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`creationDateTo` | string | - | Format is yyyy-MM-dd (to and incl.). |
`deliveryDateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`deliveryDateTo` | string | - | Format is yyyy-MM-dd (to and incl.). |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isClosed` | boolean | - | Equals |
`number` | string | - | Equals |
`projectId` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |
`supplierId` | string | - | List of IDs |
`withDeviationOnly` | boolean | false | Equals |

**Returns:** *Promise‹[ListResponsePurchaseOrder](../interfaces/listresponsepurchaseorder.md)›*

___

### `Static` purchaseOrderSendByEmailSendByEmail

▸ **purchaseOrderSendByEmailSendByEmail**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Send purchase order by customisable email.

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`emailAddress` | string | Email address |
`id` | number | Element ID |
`message` | string | Message |
`subject` | string | Subject |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderSendSend

▸ **purchaseOrderSendSend**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Send purchase order by id and sendType.

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`id` | number | - | Element ID |
`sendType` | "EMAIL" &#124; "DEFAULT" &#124; "FTP" | "DEFAULT" | Send type.DEFAULT will determine the send parameter based on the supplier type. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*
