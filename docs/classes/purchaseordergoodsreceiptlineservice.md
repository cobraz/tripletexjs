[tripletexjs](../README.md) › [PurchaseOrderGoodsReceiptLineService](purchaseordergoodsreceiptlineservice.md)

# Class: PurchaseOrderGoodsReceiptLineService

## Hierarchy

* **PurchaseOrderGoodsReceiptLineService**

## Index

### Methods

* [purchaseOrderGoodsReceiptLineDelete](purchaseordergoodsreceiptlineservice.md#static-purchaseordergoodsreceiptlinedelete)
* [purchaseOrderGoodsReceiptLineGet](purchaseordergoodsreceiptlineservice.md#static-purchaseordergoodsreceiptlineget)
* [purchaseOrderGoodsReceiptLineListPostList](purchaseordergoodsreceiptlineservice.md#static-purchaseordergoodsreceiptlinelistpostlist)
* [purchaseOrderGoodsReceiptLinePost](purchaseordergoodsreceiptlineservice.md#static-purchaseordergoodsreceiptlinepost)
* [purchaseOrderGoodsReceiptLinePut](purchaseordergoodsreceiptlineservice.md#static-purchaseordergoodsreceiptlineput)
* [purchaseOrderGoodsReceiptLineSearch](purchaseordergoodsreceiptlineservice.md#static-purchaseordergoodsreceiptlinesearch)

## Methods

### `Static` purchaseOrderGoodsReceiptLineDelete

▸ **purchaseOrderGoodsReceiptLineDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete goods receipt line by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderGoodsReceiptLineGet

▸ **purchaseOrderGoodsReceiptLineGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceiptLine](../interfaces/responsewrappergoodsreceiptline.md)›*

[BETA] Get goods receipt line by purchase order line ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceiptLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperGoodsReceiptLine](../interfaces/responsewrappergoodsreceiptline.md)›*

___

### `Static` purchaseOrderGoodsReceiptLineListPostList

▸ **purchaseOrderGoodsReceiptLineListPostList**(`__namedParameters`: object): *Promise‹[ListResponseGoodsReceiptLine](../interfaces/listresponsegoodsreceiptline.md)›*

[BETA] Register multiple new goods receipt on an existing purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseGoodsReceiptLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [GoodsReceiptLine](../interfaces/goodsreceiptline.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseGoodsReceiptLine](../interfaces/listresponsegoodsreceiptline.md)›*

___

### `Static` purchaseOrderGoodsReceiptLinePost

▸ **purchaseOrderGoodsReceiptLinePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceiptLine](../interfaces/responsewrappergoodsreceiptline.md)›*

[BETA] Register new goods receipt; new product on an existing purchase order. When registration of several goods receipt, use /list for better performance. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceiptLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [GoodsReceiptLine](../interfaces/goodsreceiptline.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperGoodsReceiptLine](../interfaces/responsewrappergoodsreceiptline.md)›*

___

### `Static` purchaseOrderGoodsReceiptLinePut

▸ **purchaseOrderGoodsReceiptLinePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperGoodsReceiptLine](../interfaces/responsewrappergoodsreceiptline.md)›*

[BETA] Enter goods receipt on purchase order line. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperGoodsReceiptLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [GoodsReceiptLine](../interfaces/goodsreceiptline.md) | Partial object describing what should be updated |
`id` | number | Purchase Order Line ID |

**Returns:** *Promise‹[ResponseWrapperGoodsReceiptLine](../interfaces/responsewrappergoodsreceiptline.md)›*

___

### `Static` purchaseOrderGoodsReceiptLineSearch

▸ **purchaseOrderGoodsReceiptLineSearch**(`__namedParameters`: object): *Promise‹[ListResponseGoodsReceiptLine](../interfaces/listresponsegoodsreceiptline.md)›*

[BETA] Find goods receipt lines for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseGoodsReceiptLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`purchaseOrderId` | number | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseGoodsReceiptLine](../interfaces/listresponsegoodsreceiptline.md)›*
