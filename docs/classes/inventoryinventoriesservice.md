[tripletexjs](../README.md) › [InventoryInventoriesService](inventoryinventoriesservice.md)

# Class: InventoryInventoriesService

## Hierarchy

* **InventoryInventoriesService**

## Index

### Methods

* [inventoryInventoriesSearch](inventoryinventoriesservice.md#static-inventoryinventoriessearch)

## Methods

### `Static` inventoryInventoriesSearch

▸ **inventoryInventoriesSearch**(`__namedParameters`: object): *Promise‹[ListResponseInventories](../interfaces/listresponseinventories.md)›*

[BETA] Find inventories corresponding with sent data.

**`result`** ListResponseInventories successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | Format is yyyy-MM-dd (from and incl.). |
`dateTo` | string | - | Format is yyyy-MM-dd (to and incl.). |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`productId` | number | - | Element ID |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseInventories](../interfaces/listresponseinventories.md)›*
