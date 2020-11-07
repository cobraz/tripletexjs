[tripletexjs](../README.md) › [TravelExpensePassengerService](travelexpensepassengerservice.md)

# Class: TravelExpensePassengerService

## Hierarchy

* **TravelExpensePassengerService**

## Index

### Methods

* [travelExpensePassengerDelete](travelexpensepassengerservice.md#static-travelexpensepassengerdelete)
* [travelExpensePassengerGet](travelexpensepassengerservice.md#static-travelexpensepassengerget)
* [travelExpensePassengerPost](travelexpensepassengerservice.md#static-travelexpensepassengerpost)
* [travelExpensePassengerPut](travelexpensepassengerservice.md#static-travelexpensepassengerput)
* [travelExpensePassengerSearch](travelexpensepassengerservice.md#static-travelexpensepassengersearch)

## Methods

### `Static` travelExpensePassengerDelete

▸ **travelExpensePassengerDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete passenger.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` travelExpensePassengerGet

▸ **travelExpensePassengerGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPassenger](../interfaces/responsewrapperpassenger.md)›*

[BETA] Get passenger by ID.

**`result`** ResponseWrapperPassenger successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPassenger](../interfaces/responsewrapperpassenger.md)›*

___

### `Static` travelExpensePassengerPost

▸ **travelExpensePassengerPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperPassenger](../interfaces/responsewrapperpassenger.md)›*

[BETA] Create passenger.

**`result`** ResponseWrapperPassenger successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Passenger](../interfaces/passenger.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperPassenger](../interfaces/responsewrapperpassenger.md)›*

___

### `Static` travelExpensePassengerPut

▸ **travelExpensePassengerPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperPassenger](../interfaces/responsewrapperpassenger.md)›*

[BETA] Update passenger.

**`result`** ResponseWrapperPassenger successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Passenger](../interfaces/passenger.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPassenger](../interfaces/responsewrapperpassenger.md)›*

___

### `Static` travelExpensePassengerSearch

▸ **travelExpensePassengerSearch**(`__namedParameters`: object): *Promise‹[ListResponsePassenger](../interfaces/listresponsepassenger.md)›*

[BETA] Find passengers corresponding with sent data.

**`result`** ListResponsePassenger successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`mileageAllowance` | string | - | Equals |
`name` | string | - | Containing |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponsePassenger](../interfaces/listresponsepassenger.md)›*
