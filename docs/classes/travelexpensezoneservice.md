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
`fields` | undefined &#124; string | Fields filter pattern |
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
`code` | undefined &#124; string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isDisabled` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelExpenseZone](../interfaces/listresponsetravelexpensezone.md)›*
