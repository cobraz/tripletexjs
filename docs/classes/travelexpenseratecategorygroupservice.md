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
`fields` | undefined &#124; string | Fields filter pattern |
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
`dateFrom` | undefined &#124; string | - | From and including |
`dateTo` | undefined &#124; string | - | To and excluding |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`isForeignTravel` | undefined &#124; false &#124; true | - | Equals |
`name` | undefined &#124; string | - | Containing |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelExpenseRateCategoryGroup](../interfaces/listresponsetravelexpenseratecategorygroup.md)›*
