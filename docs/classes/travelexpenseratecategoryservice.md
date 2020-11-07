[tripletexjs](../README.md) › [TravelExpenseRateCategoryService](travelexpenseratecategoryservice.md)

# Class: TravelExpenseRateCategoryService

## Hierarchy

* **TravelExpenseRateCategoryService**

## Index

### Methods

* [travelExpenseRateCategoryGet](travelexpenseratecategoryservice.md#static-travelexpenseratecategoryget)
* [travelExpenseRateCategorySearch](travelexpenseratecategoryservice.md#static-travelexpenseratecategorysearch)

## Methods

### `Static` travelExpenseRateCategoryGet

▸ **travelExpenseRateCategoryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpenseRateCategory](../interfaces/responsewrappertravelexpenseratecategory.md)›*

[BETA] Get travel expense rate category by ID.

**`result`** ResponseWrapperTravelExpenseRateCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpenseRateCategory](../interfaces/responsewrappertravelexpenseratecategory.md)›*

___

### `Static` travelExpenseRateCategorySearch

▸ **travelExpenseRateCategorySearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpenseRateCategory](../interfaces/listresponsetravelexpenseratecategory.md)›*

[BETA] Find rate categories corresponding with sent data.

**`result`** ListResponseTravelExpenseRateCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`ameldingWageCode` | undefined &#124; string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | undefined &#124; string | - | From and including |
`dateTo` | undefined &#124; string | - | To and excluding |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`isRequiresOvernightAccommodation` | undefined &#124; false &#124; true | - | Equals |
`isValidAccommodation` | undefined &#124; false &#124; true | - | Equals |
`isValidDayTrip` | undefined &#124; false &#124; true | - | Equals |
`isValidDomestic` | undefined &#124; false &#124; true | - | Equals |
`name` | undefined &#124; string | - | Containing |
`requiresZone` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`travelReportRateCategoryGroupId` | undefined &#124; number | - | Equals |
`type` | undefined &#124; "PER_DIEM" &#124; "ACCOMMODATION_ALLOWANCE" &#124; "MILEAGE_ALLOWANCE" | - | Equals |
`wageCodeNumber` | undefined &#124; string | - | Equals |

**Returns:** *Promise‹[ListResponseTravelExpenseRateCategory](../interfaces/listresponsetravelexpenseratecategory.md)›*
