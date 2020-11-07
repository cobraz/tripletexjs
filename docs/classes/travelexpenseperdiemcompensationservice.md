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
`fields` | undefined &#124; string | Fields filter pattern |
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
`body` | undefined &#124; [PerDiemCompensation](../modules/perdiemcompensation.md) | JSON representing the new object to be created. Should not have ID and version set. |

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
`body` | undefined &#124; [PerDiemCompensation](../modules/perdiemcompensation.md) | Partial object describing what should be updated |
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
`address` | undefined &#124; string | - | Containing |
`amountFrom` | undefined &#124; string | - | From and including |
`amountTo` | undefined &#124; string | - | To and excluding |
`count` | number | 1000 | Number of elements to return |
`countFrom` | undefined &#124; number | - | From and including |
`countTo` | undefined &#124; number | - | To and excluding |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`isDeductionForBreakfast` | undefined &#124; false &#124; true | - | Equals |
`isDinnerDeduction` | undefined &#124; false &#124; true | - | Equals |
`isLunchDeduction` | undefined &#124; false &#124; true | - | Equals |
`location` | undefined &#124; string | - | Containing |
`overnightAccommodation` | undefined &#124; "NONE" &#124; "HOTEL" &#124; "BOARDING_HOUSE_WITHOUT_COOKING" &#124; "BOARDING_HOUSE_WITH_COOKING" | - | Equals |
`rateCategoryId` | undefined &#124; string | - | Equals |
`rateFrom` | undefined &#124; string | - | From and including |
`rateTo` | undefined &#124; string | - | To and excluding |
`rateTypeId` | undefined &#124; string | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`travelExpenseId` | undefined &#124; string | - | Equals |

**Returns:** *Promise‹[ListResponsePerDiemCompensation](../interfaces/listresponseperdiemcompensation.md)›*
