[tripletexjs](../README.md) › [TravelExpenseRateService](travelexpenserateservice.md)

# Class: TravelExpenseRateService

## Hierarchy

* **TravelExpenseRateService**

## Index

### Methods

* [travelExpenseRateGet](travelexpenserateservice.md#static-travelexpenserateget)
* [travelExpenseRateSearch](travelexpenserateservice.md#static-travelexpenseratesearch)

## Methods

### `Static` travelExpenseRateGet

▸ **travelExpenseRateGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpenseRate](../interfaces/responsewrappertravelexpenserate.md)›*

[BETA] Get travel expense rate by ID.

**`result`** ResponseWrapperTravelExpenseRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpenseRate](../interfaces/responsewrappertravelexpenserate.md)›*

___

### `Static` travelExpenseRateSearch

▸ **travelExpenseRateSearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpenseRate](../interfaces/listresponsetravelexpenserate.md)›*

[BETA] Find rates corresponding with sent data.

**`result`** ListResponseTravelExpenseRate successful operation

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
`isValidAccommodation` | undefined &#124; false &#124; true | - | Equals |
`isValidDayTrip` | undefined &#124; false &#124; true | - | Equals |
`isValidDomestic` | undefined &#124; false &#124; true | - | Equals |
`isValidForeignTravel` | undefined &#124; false &#124; true | - | Equals |
`rateCategoryId` | undefined &#124; string | - | Equals |
`requiresOvernightAccommodation` | undefined &#124; false &#124; true | - | Equals |
`requiresZone` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`type` | undefined &#124; "PER_DIEM" &#124; "ACCOMMODATION_ALLOWANCE" &#124; "MILEAGE_ALLOWANCE" | - | Equals |

**Returns:** *Promise‹[ListResponseTravelExpenseRate](../interfaces/listresponsetravelexpenserate.md)›*
