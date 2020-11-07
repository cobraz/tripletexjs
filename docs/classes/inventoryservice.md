[tripletexjs](../README.md) › [InventoryService](inventoryservice.md)

# Class: InventoryService

## Hierarchy

* **InventoryService**

## Index

### Methods

* [inventoryDelete](inventoryservice.md#static-inventorydelete)
* [inventoryGet](inventoryservice.md#static-inventoryget)
* [inventoryPost](inventoryservice.md#static-inventorypost)
* [inventoryPut](inventoryservice.md#static-inventoryput)
* [inventorySearch](inventoryservice.md#static-inventorysearch)

## Methods

### `Static` inventoryDelete

▸ **inventoryDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete inventory.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` inventoryGet

▸ **inventoryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperInventory](../interfaces/responsewrapperinventory.md)›*

Get inventory by ID.

**`result`** ResponseWrapperInventory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperInventory](../interfaces/responsewrapperinventory.md)›*

___

### `Static` inventoryPost

▸ **inventoryPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperInventory](../interfaces/responsewrapperinventory.md)›*

[BETA] Create new inventory.

**`result`** ResponseWrapperInventory successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Inventory](../interfaces/inventory.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperInventory](../interfaces/responsewrapperinventory.md)›*

___

### `Static` inventoryPut

▸ **inventoryPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperInventory](../interfaces/responsewrapperinventory.md)›*

[BETA] Update inventory.

**`result`** ResponseWrapperInventory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Inventory](../interfaces/inventory.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperInventory](../interfaces/responsewrapperinventory.md)›*

___

### `Static` inventorySearch

▸ **inventorySearch**(`__namedParameters`: object): *Promise‹[ListResponseInventory](../interfaces/listresponseinventory.md)›*

Find inventory corresponding with sent data.

**`result`** ListResponseInventory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isInactive` | boolean | - | Equals |
`isMainInventory` | boolean | - | Equals |
`name` | string | - | Containing |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseInventory](../interfaces/listresponseinventory.md)›*
