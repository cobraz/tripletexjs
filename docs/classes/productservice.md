[tripletexjs](../README.md) › [ProductService](productservice.md)

# Class: ProductService

## Hierarchy

* **ProductService**

## Index

### Methods

* [productDelete](productservice.md#static-productdelete)
* [productGet](productservice.md#static-productget)
* [productListPostList](productservice.md#static-productlistpostlist)
* [productListPutList](productservice.md#static-productlistputlist)
* [productPost](productservice.md#static-productpost)
* [productPut](productservice.md#static-productput)
* [productSearch](productservice.md#static-productsearch)

## Methods

### `Static` productDelete

▸ **productDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete product.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` productGet

▸ **productGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProduct](../interfaces/responsewrapperproduct.md)›*

Get product by ID.

**`result`** ResponseWrapperProduct successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProduct](../interfaces/responsewrapperproduct.md)›*

___

### `Static` productListPostList

▸ **productListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProduct](../interfaces/listresponseproduct.md)›*

[BETA] Add multiple products.

**`result`** ListResponseProduct successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Product](../interfaces/product.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProduct](../interfaces/listresponseproduct.md)›*

___

### `Static` productListPutList

▸ **productListPutList**(`__namedParameters`: object): *Promise‹[ListResponseProduct](../interfaces/listresponseproduct.md)›*

[BETA] Update a list of products.

**`result`** ListResponseProduct successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Product](../interfaces/product.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseProduct](../interfaces/listresponseproduct.md)›*

___

### `Static` productPost

▸ **productPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProduct](../interfaces/responsewrapperproduct.md)›*

Create new product.

**`result`** ResponseWrapperProduct successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Product](../interfaces/product.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProduct](../interfaces/responsewrapperproduct.md)›*

___

### `Static` productPut

▸ **productPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProduct](../interfaces/responsewrapperproduct.md)›*

Update product.

**`result`** ResponseWrapperProduct successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Product](../interfaces/product.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProduct](../interfaces/responsewrapperproduct.md)›*

___

### `Static` productSearch

▸ **productSearch**(`__namedParameters`: object): *Promise‹[ListResponseProduct](../interfaces/listresponseproduct.md)›*

Find products corresponding with sent data.

**`result`** ListResponseProduct successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountId` | string | - | Equals |
`costExcludingVatCurrencyFrom` | number | - | From and including |
`costExcludingVatCurrencyTo` | number | - | To and excluding |
`count` | number | 1000 | Number of elements to return |
`currencyId` | string | - | Equals |
`departmentId` | string | - | Equals |
`ean` | string | - | Equals |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`isInactive` | boolean | - | Equals |
`isStockItem` | boolean | - | Equals |
`name` | string | - | Containing |
`number` | string | - | DEPRECATED. List of product numbers (Integer only) |
`priceExcludingVatCurrencyFrom` | number | - | From and including |
`priceExcludingVatCurrencyTo` | number | - | To and excluding |
`priceIncludingVatCurrencyFrom` | number | - | From and including |
`priceIncludingVatCurrencyTo` | number | - | To and excluding |
`productNumber` | string[] | - | List of valid product numbers |
`productUnitId` | string | - | Equals |
`sorting` | string | - | Sorting pattern |
`vatTypeId` | string | - | Equals |

**Returns:** *Promise‹[ListResponseProduct](../interfaces/listresponseproduct.md)›*
