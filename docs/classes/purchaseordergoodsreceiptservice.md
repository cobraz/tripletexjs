[tripletexjs](../README.md) › [PurchaseOrderGoodsReceiptService](purchaseordergoodsreceiptservice.md)

# Class: PurchaseOrderGoodsReceiptService

## Hierarchy

* **PurchaseOrderGoodsReceiptService**

## Index

### Methods

* [purchaseOrderGoodsReceiptConfirmConfirm](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptconfirmconfirm)
* [purchaseOrderGoodsReceiptDelete](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptdelete)
* [purchaseOrderGoodsReceiptGet](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptget)
* [purchaseOrderGoodsReceiptListDeleteByIds](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptlistdeletebyids)
* [purchaseOrderGoodsReceiptListPostList](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptlistpostlist)
* [purchaseOrderGoodsReceiptPost](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptpost)
* [purchaseOrderGoodsReceiptPut](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptput)
* [purchaseOrderGoodsReceiptReceiveAndConfirmReceiveAndConfirm](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptreceiveandconfirmreceiveandconfirm)
* [purchaseOrderGoodsReceiptRegisterGoodsReceiptRegisterGoodsReceipt](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptregistergoodsreceiptregistergoodsreceipt)
* [purchaseOrderGoodsReceiptSearch](purchaseordergoodsreceiptservice.md#static-purchaseordergoodsreceiptsearch)

## Methods

### `Static` purchaseOrderGoodsReceiptConfirmConfirm

▸ **purchaseOrderGoodsReceiptConfirmConfirm**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Confirm goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`createRestOrder` | boolean | false | Create restorder if quantity received is less than ordered |
`id` | number | - | Purchase Order ID. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderGoodsReceiptDelete

▸ **purchaseOrderGoodsReceiptDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderGoodsReceiptGet

▸ **purchaseOrderGoodsReceiptGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

[BETA] Get goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceipt successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

___

### `Static` purchaseOrderGoodsReceiptListDeleteByIds

▸ **purchaseOrderGoodsReceiptListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete multiple goods receipt by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderGoodsReceiptListPostList

▸ **purchaseOrderGoodsReceiptListPostList**(`__namedParameters`: object): *Promise‹[ListResponseGoodsReceipt](../interfaces/listresponsegoodsreceipt.md)›*

[BETA] Register multiple goods receipt without an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseGoodsReceipt successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [GoodsReceipt](../modules/goodsreceipt.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseGoodsReceipt](../interfaces/listresponsegoodsreceipt.md)›*

___

### `Static` purchaseOrderGoodsReceiptPost

▸ **purchaseOrderGoodsReceiptPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

[BETA] Register goods receipt without an existing purchase order. When registration of several goods receipt, use /list for better performance. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceipt successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [GoodsReceipt](../modules/goodsreceipt.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

___

### `Static` purchaseOrderGoodsReceiptPut

▸ **purchaseOrderGoodsReceiptPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

[BETA] Update goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceipt successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [GoodsReceipt](../modules/goodsreceipt.md) | Partial object describing what should be updated |
`id` | number | Goods Receipt ID. |

**Returns:** *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

___

### `Static` purchaseOrderGoodsReceiptReceiveAndConfirmReceiveAndConfirm

▸ **purchaseOrderGoodsReceiptReceiveAndConfirmReceiveAndConfirm**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA]  Receive all ordered products and approve goods receipt. Only available for users that have activated the Logistics/Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Purchase Order ID. |
`inventoryId` | number | ID of inventory. Main inventory is set as default |
`receivedDate` | string | The approval date for the subscription. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderGoodsReceiptRegisterGoodsReceiptRegisterGoodsReceipt

▸ **purchaseOrderGoodsReceiptRegisterGoodsReceiptRegisterGoodsReceipt**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

[BETA] Register goods receipt. Quantity received on the products is set to the same as quantity ordered. To update the quantity received, use PUT /purchaseOrder/goodsReceiptLine/{id}. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceipt successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Purchase Order ID. |
`inventoryId` | number | ID of inventory. Main inventory is set as default |
`registrationDate` | string | yyyy-MM-dd. Defaults to today. |

**Returns:** *Promise‹[ResponseWrapperGoodsReceipt](../interfaces/responsewrappergoodsreceipt.md)›*

___

### `Static` purchaseOrderGoodsReceiptSearch

▸ **purchaseOrderGoodsReceiptSearch**(`__namedParameters`: object): *Promise‹[ListResponseGoodsReceipt](../interfaces/listresponsegoodsreceipt.md)›*

[BETA] Get goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseGoodsReceipt successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`receivedDateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`receivedDateTo` | string | - | Format is yyyy-MM-dd (to and incl.). |
`sorting` | string | - | Sorting pattern |
`status` | "STATUS_OPEN" &#124; "STATUS_CONFIRMED" | - | Equals |
`withoutPurchase` | boolean | false | Equals |

**Returns:** *Promise‹[ListResponseGoodsReceipt](../interfaces/listresponsegoodsreceipt.md)›*
