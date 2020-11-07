[tripletexjs](../README.md) › [ProductGroupService](productgroupservice.md)

# Class: ProductGroupService

## Hierarchy

* **ProductGroupService**

## Index

### Methods

* [productGroupDelete](productgroupservice.md#static-productgroupdelete)
* [productGroupGet](productgroupservice.md#static-productgroupget)
* [productGroupListDeleteByIds](productgroupservice.md#static-productgrouplistdeletebyids)
* [productGroupListPostList](productgroupservice.md#static-productgrouplistpostlist)
* [productGroupListPutList](productgroupservice.md#static-productgrouplistputlist)
* [productGroupPost](productgroupservice.md#static-productgrouppost)
* [productGroupPut](productgroupservice.md#static-productgroupput)
* [productGroupSearch](productgroupservice.md#static-productgroupsearch)

## Methods

### `Static` productGroupDelete

▸ **productGroupDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete product group.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` productGroupGet

▸ **productGroupGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductGroup](../interfaces/responsewrapperproductgroup.md)›*

[BETA] Find product group by ID.

**`result`** ResponseWrapperProductGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductGroup](../interfaces/responsewrapperproductgroup.md)›*

___

### `Static` productGroupListDeleteByIds

▸ **productGroupListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete multiple product groups.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` productGroupListPostList

▸ **productGroupListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProductGroup](../interfaces/listresponseproductgroup.md)›*

[BETA] Add multiple products groups.

**`result`** ListResponseProductGroup successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductGroup](../interfaces/productgroup.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProductGroup](../interfaces/listresponseproductgroup.md)›*

___

### `Static` productGroupListPutList

▸ **productGroupListPutList**(`__namedParameters`: object): *Promise‹[ListResponseProductGroup](../interfaces/listresponseproductgroup.md)›*

[BETA] Update a list of product groups.

**`result`** ListResponseProductGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductGroup](../interfaces/productgroup.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseProductGroup](../interfaces/listresponseproductgroup.md)›*

___

### `Static` productGroupPost

▸ **productGroupPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductGroup](../interfaces/responsewrapperproductgroup.md)›*

[BETA] Create new product group.

**`result`** ResponseWrapperProductGroup successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductGroup](../interfaces/productgroup.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProductGroup](../interfaces/responsewrapperproductgroup.md)›*

___

### `Static` productGroupPut

▸ **productGroupPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductGroup](../interfaces/responsewrapperproductgroup.md)›*

[BETA] Update product group.

**`result`** ResponseWrapperProductGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductGroup](../interfaces/productgroup.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductGroup](../interfaces/responsewrapperproductgroup.md)›*

___

### `Static` productGroupSearch

▸ **productGroupSearch**(`__namedParameters`: object): *Promise‹[ListResponseProductGroup](../interfaces/listresponseproductgroup.md)›*

[BETA] Find product group with sent data

**`result`** ListResponseProductGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`name` | undefined &#124; string | - | Containing |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProductGroup](../interfaces/listresponseproductgroup.md)›*
