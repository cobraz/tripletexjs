[tripletexjs](../README.md) › [TravelExpenseAccommodationAllowanceService](travelexpenseaccommodationallowanceservice.md)

# Class: TravelExpenseAccommodationAllowanceService

## Hierarchy

* **TravelExpenseAccommodationAllowanceService**

## Index

### Methods

* [travelExpenseAccommodationAllowanceDelete](travelexpenseaccommodationallowanceservice.md#static-travelexpenseaccommodationallowancedelete)
* [travelExpenseAccommodationAllowanceGet](travelexpenseaccommodationallowanceservice.md#static-travelexpenseaccommodationallowanceget)
* [travelExpenseAccommodationAllowancePost](travelexpenseaccommodationallowanceservice.md#static-travelexpenseaccommodationallowancepost)
* [travelExpenseAccommodationAllowancePut](travelexpenseaccommodationallowanceservice.md#static-travelexpenseaccommodationallowanceput)
* [travelExpenseAccommodationAllowanceSearch](travelexpenseaccommodationallowanceservice.md#static-travelexpenseaccommodationallowancesearch)

## Methods

### `Static` travelExpenseAccommodationAllowanceDelete

▸ **travelExpenseAccommodationAllowanceDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete accommodation allowance.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseAccommodationAllowanceGet

▸ **travelExpenseAccommodationAllowanceGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccommodationAllowance](../interfaces/responsewrapperaccommodationallowance.md)›*

[BETA] Get travel accommodation allowance by ID.

**`result`** ResponseWrapperAccommodationAllowance successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperAccommodationAllowance](../interfaces/responsewrapperaccommodationallowance.md)›*

___

### `Static` travelExpenseAccommodationAllowancePost

▸ **travelExpenseAccommodationAllowancePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccommodationAllowance](../interfaces/responsewrapperaccommodationallowance.md)›*

[BETA] Create accommodation allowance.

**`result`** ResponseWrapperAccommodationAllowance successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [AccommodationAllowance](../interfaces/accommodationallowance.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperAccommodationAllowance](../interfaces/responsewrapperaccommodationallowance.md)›*

___

### `Static` travelExpenseAccommodationAllowancePut

▸ **travelExpenseAccommodationAllowancePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccommodationAllowance](../interfaces/responsewrapperaccommodationallowance.md)›*

[BETA] Update accommodation allowance.

**`result`** ResponseWrapperAccommodationAllowance successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [AccommodationAllowance](../interfaces/accommodationallowance.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperAccommodationAllowance](../interfaces/responsewrapperaccommodationallowance.md)›*

___

### `Static` travelExpenseAccommodationAllowanceSearch

▸ **travelExpenseAccommodationAllowanceSearch**(`__namedParameters`: object): *Promise‹[ListResponseAccommodationAllowance](../interfaces/listresponseaccommodationallowance.md)›*

[BETA] Find accommodation allowances corresponding with sent data.

**`result`** ListResponseAccommodationAllowance successful operation

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
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`location` | string | - | Containing |
`rateCategoryId` | string | - | Equals |
`rateFrom` | string | - | From and including |
`rateTo` | string | - | To and excluding |
`rateTypeId` | string | - | Equals |
`sorting` | string | - | Sorting pattern |
`travelExpenseId` | string | - | Equals |

**Returns:** *Promise‹[ListResponseAccommodationAllowance](../interfaces/listresponseaccommodationallowance.md)›*
