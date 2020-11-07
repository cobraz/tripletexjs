[tripletexjs](../README.md) › [LedgerVatTypeService](ledgervattypeservice.md)

# Class: LedgerVatTypeService

## Hierarchy

* **LedgerVatTypeService**

## Index

### Methods

* [ledgerVatTypeGet](ledgervattypeservice.md#static-ledgervattypeget)
* [ledgerVatTypeSearch](ledgervattypeservice.md#static-ledgervattypesearch)

## Methods

### `Static` ledgerVatTypeGet

▸ **ledgerVatTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperVatType](../interfaces/responsewrappervattype.md)›*

Get vat type by ID.

**`result`** ResponseWrapperVatType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperVatType](../interfaces/responsewrappervattype.md)›*

___

### `Static` ledgerVatTypeSearch

▸ **ledgerVatTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseVatType](../interfaces/listresponsevattype.md)›*

Find vat types corresponding with sent data.

**`result`** ListResponseVatType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`number` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseVatType](../interfaces/listresponsevattype.md)›*
