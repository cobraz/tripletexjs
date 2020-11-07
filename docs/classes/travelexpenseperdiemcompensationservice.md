[tripletexjs](../README.md) › [TravelExpensePerDiemCompensationService](travelexpenseperdiemcompensationservice.md)

# Class: TravelExpensePerDiemCompensationService

## Hierarchy

* **TravelExpensePerDiemCompensationService**

## Index

### Methods

* [travelExpensePerDiemCompensationDelete](travelexpenseperdiemcompensationservice.md#static-travelexpenseperdiemcompensationdelete)
* [travelExpensePerDiemCompensationGet](travelexpenseperdiemcompensationservice.md#static-travelexpenseperdiemcompensationget)
* [travelExpensePerDiemCompensationPost](travelexpenseperdiemcompensationservice.md#static-travelexpenseperdiemcompensationpost)
* [travelExpensePerDiemCompensationPut](travelexpenseperdiemcompensationservice.md#static-travelexpenseperdiemcompensationput)
* [travelExpensePerDiemCompensationSearch](travelexpenseperdiemcompensationservice.md#static-travelexpenseperdiemcompensationsearch)

## Methods

### `Static` travelExpensePerDiemCompensationDelete

▸ **travelExpensePerDiemCompensationDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete per diem compensation.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` travelExpensePerDiemCompensationGet

▸ **travelExpensePerDiemCompensationGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperPerDiemCompensation](../interfaces/responsewrapperperdiemcompensation.md)›*

[BETA] Get per diem compensation by ID.

**`result`** ResponseWrapperPerDiemCompensation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPerDiemCompensation](../interfaces/responsewrapperperdiemcompensation.md)›*

___

### `Static` travelExpensePerDiemCompensationPost

▸ **travelExpensePerDiemCompensationPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperPerDiemCompensation](../interfaces/responsewrapperperdiemcompensation.md)›*

[BETA] Create per diem compensation.

**`result`** ResponseWrapperPerDiemCompensation successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PerDiemCompensation](../modules/perdiemcompensation.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperPerDiemCompensation](../interfaces/responsewrapperperdiemcompensation.md)›*

___

### `Static` travelExpensePerDiemCompensationPut

▸ **travelExpensePerDiemCompensationPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperPerDiemCompensation](../interfaces/responsewrapperperdiemcompensation.md)›*

[BETA] Update per diem compensation.

**`result`** ResponseWrapperPerDiemCompensation successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [PerDiemCompensation](../modules/perdiemcompensation.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperPerDiemCompensation](../interfaces/responsewrapperperdiemcompensation.md)›*

___

### `Static` travelExpensePerDiemCompensationSearch

▸ **travelExpensePerDiemCompensationSearch**(`__namedParameters`: object): *Promise‹[ListResponsePerDiemCompensation](../interfaces/listresponseperdiemcompensation.md)›*

[BETA] Find per diem compensations corresponding with sent data.

**`result`** ListResponsePerDiemCompensation successful operation

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
`isDeductionForBreakfast` | boolean | - | Equals |
`isDinnerDeduction` | boolean | - | Equals |
`isLunchDeduction` | boolean | - | Equals |
`location` | string | - | Containing |
`overnightAccommodation` | "NONE" &#124; "HOTEL" &#124; "BOARDING_HOUSE_WITHOUT_COOKING" &#124; "BOARDING_HOUSE_WITH_COOKING" | - | Equals |
`rateCategoryId` | string | - | Equals |
`rateFrom` | string | - | From and including |
`rateTo` | string | - | To and excluding |
`rateTypeId` | string | - | Equals |
`sorting` | string | - | Sorting pattern |
`travelExpenseId` | string | - | Equals |

**Returns:** *Promise‹[ListResponsePerDiemCompensation](../interfaces/listresponseperdiemcompensation.md)›*
