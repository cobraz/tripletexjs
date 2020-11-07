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
`fields` | string | Fields filter pattern |
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
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`number` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseVatType](../interfaces/listresponsevattype.md)›*
