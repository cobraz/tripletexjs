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
`fields` | string | Fields filter pattern |
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
`ameldingWageCode` | string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`isRequiresOvernightAccommodation` | boolean | - | Equals |
`isValidAccommodation` | boolean | - | Equals |
`isValidDayTrip` | boolean | - | Equals |
`isValidDomestic` | boolean | - | Equals |
`name` | string | - | Containing |
`requiresZone` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |
`travelReportRateCategoryGroupId` | number | - | Equals |
`type` | "PER_DIEM" &#124; "ACCOMMODATION_ALLOWANCE" &#124; "MILEAGE_ALLOWANCE" | - | Equals |
`wageCodeNumber` | string | - | Equals |

**Returns:** *Promise‹[ListResponseTravelExpenseRateCategory](../interfaces/listresponsetravelexpenseratecategory.md)›*
