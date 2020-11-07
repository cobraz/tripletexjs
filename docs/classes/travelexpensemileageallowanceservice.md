[tripletexjs](../README.md) › [TravelExpenseMileageAllowanceService](travelexpensemileageallowanceservice.md)

# Class: TravelExpenseMileageAllowanceService

## Hierarchy

* **TravelExpenseMileageAllowanceService**

## Index

### Methods

* [travelExpenseMileageAllowanceDelete](travelexpensemileageallowanceservice.md#static-travelexpensemileageallowancedelete)
* [travelExpenseMileageAllowanceGet](travelexpensemileageallowanceservice.md#static-travelexpensemileageallowanceget)
* [travelExpenseMileageAllowancePost](travelexpensemileageallowanceservice.md#static-travelexpensemileageallowancepost)
* [travelExpenseMileageAllowancePut](travelexpensemileageallowanceservice.md#static-travelexpensemileageallowanceput)
* [travelExpenseMileageAllowanceSearch](travelexpensemileageallowanceservice.md#static-travelexpensemileageallowancesearch)

## Methods

### `Static` travelExpenseMileageAllowanceDelete

▸ **travelExpenseMileageAllowanceDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete mileage allowance.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` travelExpenseMileageAllowanceGet

▸ **travelExpenseMileageAllowanceGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperMileageAllowance](../interfaces/responsewrappermileageallowance.md)›*

[BETA] Get mileage allowance by ID.

**`result`** ResponseWrapperMileageAllowance successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperMileageAllowance](../interfaces/responsewrappermileageallowance.md)›*

___

### `Static` travelExpenseMileageAllowancePost

▸ **travelExpenseMileageAllowancePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperMileageAllowance](../interfaces/responsewrappermileageallowance.md)›*

[BETA] Create mileage allowance.

**`result`** ResponseWrapperMileageAllowance successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [MileageAllowance](../interfaces/mileageallowance.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperMileageAllowance](../interfaces/responsewrappermileageallowance.md)›*

___

### `Static` travelExpenseMileageAllowancePut

▸ **travelExpenseMileageAllowancePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperMileageAllowance](../interfaces/responsewrappermileageallowance.md)›*

[BETA] Update mileage allowance.

**`result`** ResponseWrapperMileageAllowance successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [MileageAllowance](../interfaces/mileageallowance.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperMileageAllowance](../interfaces/responsewrappermileageallowance.md)›*

___

### `Static` travelExpenseMileageAllowanceSearch

▸ **travelExpenseMileageAllowanceSearch**(`__namedParameters`: object): *Promise‹[ListResponseMileageAllowance](../interfaces/listresponsemileageallowance.md)›*

[BETA] Find mileage allowances corresponding with sent data.

**`result`** ListResponseMileageAllowance successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`amountFrom` | string | - | From and including |
`amountTo` | string | - | To and excluding |
`count` | number | 1000 | Number of elements to return |
`dateFrom` | string | - | From and including |
`dateTo` | string | - | To and excluding |
`departureLocation` | string | - | Containing |
`destination` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`isCompanyCar` | boolean | - | Equals |
`kmFrom` | string | - | From and including |
`kmTo` | string | - | To and excluding |
`rateCategoryId` | string | - | Equals |
`rateFrom` | string | - | From and including |
`rateTo` | string | - | To and excluding |
`rateTypeId` | string | - | Equals |
`sorting` | string | - | Sorting pattern |
`travelExpenseId` | string | - | Equals |

**Returns:** *Promise‹[ListResponseMileageAllowance](../interfaces/listresponsemileageallowance.md)›*
