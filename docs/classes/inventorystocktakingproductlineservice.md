[tripletexjs](../README.md) › [InventoryStocktakingProductlineService](inventorystocktakingproductlineservice.md)

# Class: InventoryStocktakingProductlineService

## Hierarchy

* **InventoryStocktakingProductlineService**

## Index

### Methods

* [inventoryStocktakingProductlineDelete](inventorystocktakingproductlineservice.md#static-inventorystocktakingproductlinedelete)
* [inventoryStocktakingProductlineGet](inventorystocktakingproductlineservice.md#static-inventorystocktakingproductlineget)
* [inventoryStocktakingProductlinePost](inventorystocktakingproductlineservice.md#static-inventorystocktakingproductlinepost)
* [inventoryStocktakingProductlinePut](inventorystocktakingproductlineservice.md#static-inventorystocktakingproductlineput)
* [inventoryStocktakingProductlineSearch](inventorystocktakingproductlineservice.md#static-inventorystocktakingproductlinesearch)

## Methods

### `Static` inventoryStocktakingProductlineDelete

▸ **inventoryStocktakingProductlineDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete product line.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` inventoryStocktakingProductlineGet

▸ **inventoryStocktakingProductlineGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductLine](../interfaces/responsewrapperproductline.md)›*

[BETA] Get product line by ID.

**`result`** ResponseWrapperProductLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductLine](../interfaces/responsewrapperproductline.md)›*

___

### `Static` inventoryStocktakingProductlinePost

▸ **inventoryStocktakingProductlinePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductLine](../interfaces/responsewrapperproductline.md)›*

[BETA] Create product line. When creating several product lines, use /list for better performance.

**`result`** ResponseWrapperProductLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductLine](../interfaces/productline.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProductLine](../interfaces/responsewrapperproductline.md)›*

___

### `Static` inventoryStocktakingProductlinePut

▸ **inventoryStocktakingProductlinePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductLine](../interfaces/responsewrapperproductline.md)›*

[BETA] Update product line.

**`result`** ResponseWrapperProductLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProductLine](../interfaces/productline.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductLine](../interfaces/responsewrapperproductline.md)›*

___

### `Static` inventoryStocktakingProductlineSearch

▸ **inventoryStocktakingProductlineSearch**(`__namedParameters`: object): *Promise‹[ListResponseProductLine](../interfaces/listresponseproductline.md)›*

[BETA] Find all product lines by stocktaking ID.

**`result`** ListResponseProductLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |
`stocktakingId` | number | - | Equals |

**Returns:** *Promise‹[ListResponseProductLine](../interfaces/listresponseproductline.md)›*
