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
`fields` | string | Fields filter pattern |
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
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`isValidAccommodation` | boolean | - | Equals |
`isValidDayTrip` | boolean | - | Equals |
`isValidDomestic` | boolean | - | Equals |
`isValidForeignTravel` | boolean | - | Equals |
`rateCategoryId` | string | - | Equals |
`requiresOvernightAccommodation` | boolean | - | Equals |
`requiresZone` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |
`type` | "PER_DIEM" &#124; "ACCOMMODATION_ALLOWANCE" &#124; "MILEAGE_ALLOWANCE" | - | Equals |

**Returns:** *Promise‹[ListResponseTravelExpenseRate](../interfaces/listresponsetravelexpenserate.md)›*
