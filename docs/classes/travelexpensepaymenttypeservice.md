[tripletexjs](../README.md) › [TravelExpensePaymentTypeService](travelexpensepaymenttypeservice.md)

# Class: TravelExpensePaymentTypeService

## Hierarchy

* **TravelExpensePaymentTypeService**

## Index

### Methods

* [travelExpensePaymentTypeGet](travelexpensepaymenttypeservice.md#static-travelexpensepaymenttypeget)
* [travelExpensePaymentTypeSearch](travelexpensepaymenttypeservice.md#static-travelexpensepaymenttypesearch)

## Methods

### `Static` travelExpensePaymentTypeGet

▸ **travelExpensePaymentTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTravelPaymentType](../interfaces/responsewrappertravelpaymenttype.md)›*

[BETA] Get payment type by ID.

**`result`** ResponseWrapperTravelPaymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTravelPaymentType](../interfaces/responsewrappertravelpaymenttype.md)›*

___

### `Static` travelExpensePaymentTypeSearch

▸ **travelExpensePaymentTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseTravelPaymentType](../interfaces/listresponsetravelpaymenttype.md)›*

[BETA] Find payment type corresponding with sent data.

**`result`** ListResponseTravelPaymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | undefined &#124; string | - | Containing |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isInactive` | undefined &#124; false &#124; true | - | Equals |
`showOnEmployeeExpenses` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTravelPaymentType](../interfaces/listresponsetravelpaymenttype.md)›*
