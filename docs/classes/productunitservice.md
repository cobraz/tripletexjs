[tripletexjs](../README.md) › [ProductUnitService](productunitservice.md)

# Class: ProductUnitService

## Hierarchy

* **ProductUnitService**

## Index

### Methods

* [productUnitDelete](productunitservice.md#static-productunitdelete)
* [productUnitGet](productunitservice.md#static-productunitget)
* [productUnitListPostList](productunitservice.md#static-productunitlistpostlist)
* [productUnitListPutList](productunitservice.md#static-productunitlistputlist)
* [productUnitPost](productunitservice.md#static-productunitpost)
* [productUnitPut](productunitservice.md#static-productunitput)
* [productUnitSearch](productunitservice.md#static-productunitsearch)

## Methods

### `Static` productUnitDelete

▸ **productUnitDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete product unit by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` productUnitGet

▸ **productUnitGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductUnit](../interfaces/responsewrapperproductunit.md)›*

Get product unit by ID.

**`result`** ResponseWrapperProductUnit successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductUnit](../interfaces/responsewrapperproductunit.md)›*

___

### `Static` productUnitListPostList

▸ **productUnitListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProductUnit](../interfaces/listresponseproductunit.md)›*

[BETA] Create multiple product units.

**`result`** ListResponseProductUnit successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductUnit](../interfaces/productunit.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProductUnit](../interfaces/listresponseproductunit.md)›*

___

### `Static` productUnitListPutList

▸ **productUnitListPutList**(`__namedParameters`: object): *Promise‹[ListResponseProductUnit](../interfaces/listresponseproductunit.md)›*

[BETA] Update list of product units.

**`result`** ListResponseProductUnit successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductUnit](../interfaces/productunit.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseProductUnit](../interfaces/listresponseproductunit.md)›*

___

### `Static` productUnitPost

▸ **productUnitPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductUnit](../interfaces/responsewrapperproductunit.md)›*

[BETA] Create new product unit.

**`result`** ResponseWrapperProductUnit successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductUnit](../interfaces/productunit.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProductUnit](../interfaces/responsewrapperproductunit.md)›*

___

### `Static` productUnitPut

▸ **productUnitPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductUnit](../interfaces/responsewrapperproductunit.md)›*

[BETA] Update product unit.

**`result`** ResponseWrapperProductUnit successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductUnit](../interfaces/productunit.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductUnit](../interfaces/responsewrapperproductunit.md)›*

___

### `Static` productUnitSearch

▸ **productUnitSearch**(`__namedParameters`: object): *Promise‹[ListResponseProductUnit](../interfaces/listresponseproductunit.md)›*

Find product units corresponding with sent data.

**`result`** ListResponseProductUnit successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`commonCode` | undefined &#124; string | - | Common codes |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`name` | undefined &#124; string | - | Names |
`nameShort` | undefined &#124; string | - | Short names |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProductUnit](../interfaces/listresponseproductunit.md)›*
