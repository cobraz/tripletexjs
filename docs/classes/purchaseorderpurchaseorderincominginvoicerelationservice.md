[tripletexjs](../README.md) › [PurchaseOrderPurchaseOrderIncomingInvoiceRelationService](purchaseorderpurchaseorderincominginvoicerelationservice.md)

# Class: PurchaseOrderPurchaseOrderIncomingInvoiceRelationService

## Hierarchy

* **PurchaseOrderPurchaseOrderIncomingInvoiceRelationService**

## Index

### Methods

* [purchaseOrderPurchaseOrderIncomingInvoiceRelationDelete](purchaseorderpurchaseorderincominginvoicerelationservice.md#static-purchaseorderpurchaseorderincominginvoicerelationdelete)
* [purchaseOrderPurchaseOrderIncomingInvoiceRelationGet](purchaseorderpurchaseorderincominginvoicerelationservice.md#static-purchaseorderpurchaseorderincominginvoicerelationget)
* [purchaseOrderPurchaseOrderIncomingInvoiceRelationListDeleteByIds](purchaseorderpurchaseorderincominginvoicerelationservice.md#static-purchaseorderpurchaseorderincominginvoicerelationlistdeletebyids)
* [purchaseOrderPurchaseOrderIncomingInvoiceRelationListPostList](purchaseorderpurchaseorderincominginvoicerelationservice.md#static-purchaseorderpurchaseorderincominginvoicerelationlistpostlist)
* [purchaseOrderPurchaseOrderIncomingInvoiceRelationPost](purchaseorderpurchaseorderincominginvoicerelationservice.md#static-purchaseorderpurchaseorderincominginvoicerelationpost)
* [purchaseOrderPurchaseOrderIncomingInvoiceRelationSearch](purchaseorderpurchaseorderincominginvoicerelationservice.md#static-purchaseorderpurchaseorderincominginvoicerelationsearch)

## Methods

### `Static` purchaseOrderPurchaseOrderIncomingInvoiceRelationDelete

▸ **purchaseOrderPurchaseOrderIncomingInvoiceRelationDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete purchase order voucher relation. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderPurchaseOrderIncomingInvoiceRelationGet

▸ **purchaseOrderPurchaseOrderIncomingInvoiceRelationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrderIncomingInvoiceRelation](../interfaces/responsewrapperpurchaseorderincominginvoicerelation.md)›*

[BETA] Find purchase order relation to voucher by ID. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrderIncomingInvoiceRelation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrderIncomingInvoiceRelation](../interfaces/responsewrapperpurchaseorderincominginvoicerelation.md)›*

___

### `Static` purchaseOrderPurchaseOrderIncomingInvoiceRelationListDeleteByIds

▸ **purchaseOrderPurchaseOrderIncomingInvoiceRelationListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete multiple purchase order voucher relations. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` purchaseOrderPurchaseOrderIncomingInvoiceRelationListPostList

▸ **purchaseOrderPurchaseOrderIncomingInvoiceRelationListPostList**(`__namedParameters`: object): *Promise‹[ListResponsePurchaseOrderIncomingInvoiceRelation](../interfaces/listresponsepurchaseorderincominginvoicerelation.md)›*

[BETA] Create a new list of relations between purchase order and voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponsePurchaseOrderIncomingInvoiceRelation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PurchaseOrderIncomingInvoiceRelation](../interfaces/purchaseorderincominginvoicerelation.md)[] | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponsePurchaseOrderIncomingInvoiceRelation](../interfaces/listresponsepurchaseorderincominginvoicerelation.md)›*

___

### `Static` purchaseOrderPurchaseOrderIncomingInvoiceRelationPost

▸ **purchaseOrderPurchaseOrderIncomingInvoiceRelationPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperPurchaseOrderIncomingInvoiceRelation](../interfaces/responsewrapperpurchaseorderincominginvoicerelation.md)›*

[BETA] Create new relation between purchase order and a voucher. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ResponseWrapperPurchaseOrderIncomingInvoiceRelation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PurchaseOrderIncomingInvoiceRelation](../interfaces/purchaseorderincominginvoicerelation.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperPurchaseOrderIncomingInvoiceRelation](../interfaces/responsewrapperpurchaseorderincominginvoicerelation.md)›*

___

### `Static` purchaseOrderPurchaseOrderIncomingInvoiceRelationSearch

▸ **purchaseOrderPurchaseOrderIncomingInvoiceRelationSearch**(`__namedParameters`: object): *Promise‹[ListResponsePurchaseOrderIncomingInvoiceRelation](../interfaces/listresponsepurchaseorderincominginvoicerelation.md)›*

[BETA] Find purchase order relation to voucher with sent data. Only available for users that have activated the Logistics Plus Beta-program in 'Our customer account'

**`result`** ListResponsePurchaseOrderIncomingInvoiceRelation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`orderOutId` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |
`voucherId` | string | - | List of IDs |

**Returns:** *Promise‹[ListResponsePurchaseOrderIncomingInvoiceRelation](../interfaces/listresponsepurchaseorderincominginvoicerelation.md)›*
