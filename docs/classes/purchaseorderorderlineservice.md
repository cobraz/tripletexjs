[tripletexjs](../README.md) › [PurchaseOrderOrderlineService](purchaseorderorderlineservice.md)

# Class: PurchaseOrderOrderlineService

## Hierarchy

* **PurchaseOrderOrderlineService**

## Index

### Methods

* [purchaseOrderOrderlineDelete](purchaseorderorderlineservice.md#static-purchaseorderorderlinedelete)
* [purchaseOrderOrderlineGet](purchaseorderorderlineservice.md#static-purchaseorderorderlineget)
* [purchaseOrderOrderlinePost](purchaseorderorderlineservice.md#static-purchaseorderorderlinepost)
* [purchaseOrderOrderlinePut](purchaseorderorderlineservice.md#static-purchaseorderorderlineput)

## Methods

### `Static` purchaseOrderOrderlineDelete

▸ **purchaseOrderOrderlineDelete**(`__namedParameters`: object): *Promise‹any›*

 [BETA] Delete purchase order line.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderOrderlineGet

▸ **purchaseOrderOrderlineGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrderline](../interfaces/responsewrapperpurchaseorderline.md)›*

 [BETA] Find purchase order line by ID.

**`result`** ResponseWrapperPurchaseOrderline successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrderline](../interfaces/responsewrapperpurchaseorderline.md)›*

___

### `Static` purchaseOrderOrderlinePost

▸ **purchaseOrderOrderlinePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrderline](../interfaces/responsewrapperpurchaseorderline.md)›*

 [BETA] Creates purchase order line.

**`result`** ResponseWrapperPurchaseOrderline successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [PurchaseOrderline](../interfaces/purchaseorderline.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrderline](../interfaces/responsewrapperpurchaseorderline.md)›*

___

### `Static` purchaseOrderOrderlinePut

▸ **purchaseOrderOrderlinePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrderline](../interfaces/responsewrapperpurchaseorderline.md)›*

 [BETA] Updates purchase order line

**`result`** ResponseWrapperPurchaseOrderline successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [PurchaseOrderline](../interfaces/purchaseorderline.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrderline](../interfaces/responsewrapperpurchaseorderline.md)›*
