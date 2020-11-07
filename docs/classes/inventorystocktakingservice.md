[tripletexjs](../README.md) › [InventoryStocktakingService](inventorystocktakingservice.md)

# Class: InventoryStocktakingService

## Hierarchy

* **InventoryStocktakingService**

## Index

### Methods

* [inventoryStocktakingDelete](inventorystocktakingservice.md#static-inventorystocktakingdelete)
* [inventoryStocktakingGet](inventorystocktakingservice.md#static-inventorystocktakingget)
* [inventoryStocktakingPost](inventorystocktakingservice.md#static-inventorystocktakingpost)
* [inventoryStocktakingPut](inventorystocktakingservice.md#static-inventorystocktakingput)
* [inventoryStocktakingSearch](inventorystocktakingservice.md#static-inventorystocktakingsearch)

## Methods

### `Static` inventoryStocktakingDelete

▸ **inventoryStocktakingDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete stocktaking.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` inventoryStocktakingGet

▸ **inventoryStocktakingGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperStocktaking](../interfaces/responsewrapperstocktaking.md)›*

[BETA] Get stocktaking by ID.

**`result`** ResponseWrapperStocktaking successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperStocktaking](../interfaces/responsewrapperstocktaking.md)›*

___

### `Static` inventoryStocktakingPost

▸ **inventoryStocktakingPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperStocktaking](../interfaces/responsewrapperstocktaking.md)›*

[BETA] Create new stocktaking.

**`result`** ResponseWrapperStocktaking successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Stocktaking](../modules/stocktaking.md) | JSON representing the new object to be created. Should not have ID and version set. |
`typeOfStocktaking` | "ALL_PRODUCTS_WITH_INVENTORIES" &#124; "INCLUDE_PRODUCTS" &#124; "NO_PRODUCTS" | - |

**Returns:** *Promise‹[ResponseWrapperStocktaking](../interfaces/responsewrapperstocktaking.md)›*

___

### `Static` inventoryStocktakingPut

▸ **inventoryStocktakingPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperStocktaking](../interfaces/responsewrapperstocktaking.md)›*

[BETA] Update stocktaking.

**`result`** ResponseWrapperStocktaking successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Stocktaking](../modules/stocktaking.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperStocktaking](../interfaces/responsewrapperstocktaking.md)›*

___

### `Static` inventoryStocktakingSearch

▸ **inventoryStocktakingSearch**(`__namedParameters`: object): *Promise‹[ListResponseStocktaking](../interfaces/listresponsestocktaking.md)›*

[BETA] Find stocktaking corresponding with sent data.

**`result`** ListResponseStocktaking successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`inventoryId` | number | - | Equals |
`isCompleted` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseStocktaking](../interfaces/listresponsestocktaking.md)›*
