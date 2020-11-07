[tripletexjs](../README.md) › [ProductGroupRelationService](productgrouprelationservice.md)

# Class: ProductGroupRelationService

## Hierarchy

* **ProductGroupRelationService**

## Index

### Methods

* [productGroupRelationDelete](productgrouprelationservice.md#static-productgrouprelationdelete)
* [productGroupRelationGet](productgrouprelationservice.md#static-productgrouprelationget)
* [productGroupRelationListDeleteByIds](productgrouprelationservice.md#static-productgrouprelationlistdeletebyids)
* [productGroupRelationListPostList](productgrouprelationservice.md#static-productgrouprelationlistpostlist)
* [productGroupRelationPost](productgrouprelationservice.md#static-productgrouprelationpost)
* [productGroupRelationSearch](productgrouprelationservice.md#static-productgrouprelationsearch)

## Methods

### `Static` productGroupRelationDelete

▸ **productGroupRelationDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete product group relation.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` productGroupRelationGet

▸ **productGroupRelationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductGroupRelation](../interfaces/responsewrapperproductgrouprelation.md)›*

[BETA] Find product group relation by ID.

**`result`** ResponseWrapperProductGroupRelation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductGroupRelation](../interfaces/responsewrapperproductgrouprelation.md)›*

___

### `Static` productGroupRelationListDeleteByIds

▸ **productGroupRelationListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete multiple product group relations.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` productGroupRelationListPostList

▸ **productGroupRelationListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProductGroupRelation](../interfaces/listresponseproductgrouprelation.md)›*

[BETA] Add multiple products group relations.

**`result`** ListResponseProductGroupRelation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProductGroupRelation](../interfaces/productgrouprelation.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProductGroupRelation](../interfaces/listresponseproductgrouprelation.md)›*

___

### `Static` productGroupRelationPost

▸ **productGroupRelationPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductGroupRelation](../interfaces/responsewrapperproductgrouprelation.md)›*

[BETA] Create new product group relation.

**`result`** ResponseWrapperProductGroupRelation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProductGroupRelation](../interfaces/productgrouprelation.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProductGroupRelation](../interfaces/responsewrapperproductgrouprelation.md)›*

___

### `Static` productGroupRelationSearch

▸ **productGroupRelationSearch**(`__namedParameters`: object): *Promise‹[ListResponseProductGroupRelation](../interfaces/listresponseproductgrouprelation.md)›*

[BETA] Find product group relation with sent data.

**`result`** ListResponseProductGroupRelation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`productGroupId` | string | - | List of IDs |
`productId` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProductGroupRelation](../interfaces/listresponseproductgrouprelation.md)›*
