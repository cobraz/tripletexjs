[tripletexjs](../README.md) › [TravelExpensezoneService](travelexpensezoneservice.md)

# Class: TravelExpensezoneService

## Hierarchy

* **TravelExpensezoneService**

## Index

### Methods

* [travelExpenseZoneGet](travelexpensezoneservice.md#static-travelexpensezoneget)
* [travelExpenseZoneSearch](travelexpensezoneservice.md#static-travelexpensezonesearch)

## Methods

### `Static` travelExpenseZoneGet

▸ **travelExpenseZoneGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelExpenseZone](../interfaces/responsewrappertravelexpensezone.md)›*

Get travel expense zone by ID.

**`result`** ResponseWrapperTravelExpenseZone successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelExpenseZone](../interfaces/responsewrappertravelexpensezone.md)›*

___

### `Static` travelExpenseZoneSearch

▸ **travelExpenseZoneSearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelExpenseZone](../interfaces/listresponsetravelexpensezone.md)›*

Find travel expense zones corresponding with sent data.

**`result`** ListResponseTravelExpenseZone successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`code` | string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isDisabled` | boolean | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelExpenseZone](../interfaces/listresponsetravelexpensezone.md)›*
