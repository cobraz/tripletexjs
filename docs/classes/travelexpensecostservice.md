[tripletexjs](../README.md) › [TravelExpenseCostService](travelexpensecostservice.md)

# Class: TravelExpenseCostService

## Hierarchy

* **TravelExpenseCostService**

## Index

### Methods

* [travelExpenseCostDelete](travelexpensecostservice.md#static-travelexpensecostdelete)
* [travelExpenseCostGet](travelexpensecostservice.md#static-travelexpensecostget)
* [travelExpenseCostPost](travelexpensecostservice.md#static-travelexpensecostpost)
* [travelExpenseCostPut](travelexpensecostservice.md#static-travelexpensecostput)
* [travelExpenseCostSearch](travelexpensecostservice.md#static-travelexpensecostsearch)

## Methods

### `Static` travelExpenseCostDelete

▸ **travelExpenseCostDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete cost.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseCostGet

▸ **travelExpenseCostGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperCost](../interfaces/responsewrappercost.md)›*

[BETA] Get cost by ID.

**`result`** ResponseWrapperCost successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCost](../interfaces/responsewrappercost.md)›*

___

### `Static` travelExpenseCostPost

▸ **travelExpenseCostPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperCost](../interfaces/responsewrappercost.md)›*

[BETA] Create cost.

**`result`** ResponseWrapperCost successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Cost](../interfaces/cost.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperCost](../interfaces/responsewrappercost.md)›*

___

### `Static` travelExpenseCostPut

▸ **travelExpenseCostPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperCost](../interfaces/responsewrappercost.md)›*

[BETA] Update cost.

**`result`** ResponseWrapperCost successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Cost](../interfaces/cost.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCost](../interfaces/responsewrappercost.md)›*

___

### `Static` travelExpenseCostSearch

▸ **travelExpenseCostSearch**(`__namedParameters`: object): *Promise‹[ListResponseCost](../interfaces/listresponsecost.md)›*

[BETA] Find costs corresponding with sent data.

**`result`** ListResponseCost successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`address` | string | - | Containing |
`amountFrom` | string | - | From and including |
`amountTo` | string | - | To and excluding |
`count` | number | 1000 | Number of elements to return |
`countFrom` | number | - | From and including |
`countTo` | number | - | To and excluding |
`currencyId` | string | - | Equals |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`location` | string | - | Containing |
`rateFrom` | string | - | From and including |
`rateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |
`travelExpenseId` | string | - | Equals |
`vatTypeId` | string | - | Equals |

**Returns:** *Promise‹[ListResponseCost](../interfaces/listresponsecost.md)›*
