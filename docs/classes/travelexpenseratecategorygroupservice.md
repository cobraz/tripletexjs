[tripletexjs](../README.md) › [TravelExpenseRateCategoryGroupService](travelexpenseratecategorygroupservice.md)

# Class: TravelExpenseRateCategoryGroupService

## Hierarchy

* **TravelExpenseRateCategoryGroupService**

## Index

### Methods

* [travelExpenseRateCategoryGroupGet](travelexpenseratecategorygroupservice.md#static-travelexpenseratecategorygroupget)
* [travelExpenseRateCategoryGroupSearch](travelexpenseratecategorygroupservice.md#static-travelexpenseratecategorygroupsearch)

## Methods

### `Static` travelExpenseRateCategoryGroupGet

▸ **travelExpenseRateCategoryGroupGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpenseRateCategoryGroup](../interfaces/responsewrappertravelexpenseratecategorygroup.md)›*

[BETA] Get travel report rate category group by ID.

**`result`** ResponseWrapperTravelExpenseRateCategoryGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpenseRateCategoryGroup](../interfaces/responsewrappertravelexpenseratecategorygroup.md)›*

___

### `Static` travelExpenseRateCategoryGroupSearch

▸ **travelExpenseRateCategoryGroupSearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpenseRateCategoryGroup](../interfaces/listresponsetravelexpenseratecategorygroup.md)›*

[BETA] Find rate categoriy groups corresponding with sent data.

**`result`** ListResponseTravelExpenseRateCategoryGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`isForeignTravel` | boolean | - | Equals |
`name` | string | - | Containing |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelExpenseRateCategoryGroup](../interfaces/listresponsetravelexpenseratecategorygroup.md)›*
