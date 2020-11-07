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
`fields` | undefined &#124; string | Fields filter pattern |
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
`description` | undefined &#124; string | - | Containing |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isInactive` | undefined &#124; false &#124; true | - | Equals |
`showOnEmployeeExpenses` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelCostCategory](../interfaces/listresponsetravelcostcategory.md)›*
