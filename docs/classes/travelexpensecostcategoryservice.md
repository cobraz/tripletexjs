[tripletexjs](../README.md) › [TravelExpenseCostCategoryService](travelexpensecostcategoryservice.md)

# Class: TravelExpenseCostCategoryService

## Hierarchy

* **TravelExpenseCostCategoryService**

## Index

### Methods

* [travelExpenseCostCategoryGet](travelexpensecostcategoryservice.md#static-travelexpensecostcategoryget)
* [travelExpenseCostCategorySearch](travelexpensecostcategoryservice.md#static-travelexpensecostcategorysearch)

## Methods

### `Static` travelExpenseCostCategoryGet

▸ **travelExpenseCostCategoryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelCostCategory](../interfaces/responsewrappertravelcostcategory.md)›*

[BETA] Get cost category by ID.

**`result`** ResponseWrapperTravelCostCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelCostCategory](../interfaces/responsewrappertravelcostcategory.md)›*

___

### `Static` travelExpenseCostCategorySearch

▸ **travelExpenseCostCategorySearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelCostCategory](../interfaces/listresponsetravelcostcategory.md)›*

[BETA] Find cost category corresponding with sent data.

**`result`** ListResponseTravelCostCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isInactive` | boolean | - | Equals |
`showOnEmployeeExpenses` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelCostCategory](../interfaces/listresponsetravelcostcategory.md)›*
