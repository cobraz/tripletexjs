[tripletexjs](../README.md) › [PurchaseOrderDeviationService](purchaseorderdeviationservice.md)

# Class: PurchaseOrderDeviationService

## Hierarchy

* **PurchaseOrderDeviationService**

## Index

### Methods

* [purchaseOrderDeviationApproveApprove](purchaseorderdeviationservice.md#static-purchaseorderdeviationapproveapprove)
* [purchaseOrderDeviationDelete](purchaseorderdeviationservice.md#static-purchaseorderdeviationdelete)
* [purchaseOrderDeviationDeliverDeliver](purchaseorderdeviationservice.md#static-purchaseorderdeviationdeliverdeliver)
* [purchaseOrderDeviationGet](purchaseorderdeviationservice.md#static-purchaseorderdeviationget)
* [purchaseOrderDeviationListPostList](purchaseorderdeviationservice.md#static-purchaseorderdeviationlistpostlist)
* [purchaseOrderDeviationListPutList](purchaseorderdeviationservice.md#static-purchaseorderdeviationlistputlist)
* [purchaseOrderDeviationPost](purchaseorderdeviationservice.md#static-purchaseorderdeviationpost)
* [purchaseOrderDeviationPut](purchaseorderdeviationservice.md#static-purchaseorderdeviationput)
* [purchaseOrderDeviationSearch](purchaseorderdeviationservice.md#static-purchaseorderdeviationsearch)
* [purchaseOrderDeviationUndeliverUndeliver](purchaseorderdeviationservice.md#static-purchaseorderdeviationundeliverundeliver)

## Methods

### `Static` purchaseOrderDeviationApproveApprove

▸ **purchaseOrderDeviationApproveApprove**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Approve deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Purchase Order ID. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderDeviationDelete

▸ **purchaseOrderDeviationDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete goods receipt by purchase order ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderDeviationDeliverDeliver

▸ **purchaseOrderDeviationDeliverDeliver**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Send deviations to approval. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Purchase Order ID. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

___

### `Static` purchaseOrderDeviationGet

▸ **purchaseOrderDeviationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperDeviation](../interfaces/responsewrapperdeviation.md)›*

 [BETA] Get deviation by order line ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperDeviation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDeviation](../interfaces/responsewrapperdeviation.md)›*

___

### `Static` purchaseOrderDeviationListPostList

▸ **purchaseOrderDeviationListPostList**(`__namedParameters`: object): *Promise‹[ListResponseDeviation](../interfaces/listresponsedeviation.md)›*

[BETA] Register multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseDeviation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Deviation](../modules/deviation.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseDeviation](../interfaces/listresponsedeviation.md)›*

___

### `Static` purchaseOrderDeviationListPutList

▸ **purchaseOrderDeviationListPutList**(`__namedParameters`: object): *Promise‹[ListResponseDeviation](../interfaces/listresponsedeviation.md)›*

[BETA] Update multiple deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseDeviation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Deviation](../modules/deviation.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseDeviation](../interfaces/listresponsedeviation.md)›*

___

### `Static` purchaseOrderDeviationPost

▸ **purchaseOrderDeviationPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDeviation](../interfaces/responsewrapperdeviation.md)›*

[BETA] Register deviation on goods receipt. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperDeviation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Deviation](../modules/deviation.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperDeviation](../interfaces/responsewrapperdeviation.md)›*

___

### `Static` purchaseOrderDeviationPut

▸ **purchaseOrderDeviationPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperDeviation](../interfaces/responsewrapperdeviation.md)›*

Update deviation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperDeviation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Deviation](../modules/deviation.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDeviation](../interfaces/responsewrapperdeviation.md)›*

___

### `Static` purchaseOrderDeviationSearch

▸ **purchaseOrderDeviationSearch**(`__namedParameters`: object): *Promise‹[ListResponseDeviation](../interfaces/listresponsedeviation.md)›*

[BETA] Find handled deviations for purchase order. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponseDeviation successful operation

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

**Returns:** *Promise‹[ListResponseDeviation](../interfaces/listresponsedeviation.md)›*

___

### `Static` purchaseOrderDeviationUndeliverUndeliver

▸ **purchaseOrderDeviationUndeliverUndeliver**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*

[BETA] Undeliver the deviations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrder successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Purchase Order ID. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrder](../interfaces/responsewrapperpurchaseorder.md)›*
