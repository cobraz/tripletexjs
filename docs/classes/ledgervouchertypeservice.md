[tripletexjs](../README.md) › [LedgerVoucherTypeService](ledgervouchertypeservice.md)

# Class: LedgerVoucherTypeService

## Hierarchy

* **LedgerVoucherTypeService**

## Index

### Methods

* [ledgerVoucherTypeGet](ledgervouchertypeservice.md#static-ledgervouchertypeget)
* [ledgerVoucherTypeSearch](ledgervouchertypeservice.md#static-ledgervouchertypesearch)

## Methods

### `Static` ledgerVoucherTypeGet

▸ **ledgerVoucherTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucherType](../interfaces/responsewrappervouchertype.md)›*

Get voucher type by ID.

**`result`** ResponseWrapperVoucherType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperVoucherType](../interfaces/responsewrappervouchertype.md)›*

___

### `Static` ledgerVoucherTypeSearch

▸ **ledgerVoucherTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseVoucherType](../interfaces/listresponsevouchertype.md)›*

Find voucher types corresponding with sent data.

**`result`** ListResponseVoucherType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`name` | string | - | Containing |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseVoucherType](../interfaces/listresponsevouchertype.md)›*
