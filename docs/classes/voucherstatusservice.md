[tripletexjs](../README.md) › [VoucherStatusService](voucherstatusservice.md)

# Class: VoucherStatusService

## Hierarchy

* **VoucherStatusService**

## Index

### Methods

* [voucherStatusGet](voucherstatusservice.md#static-voucherstatusget)
* [voucherStatusPost](voucherstatusservice.md#static-voucherstatuspost)
* [voucherStatusSearch](voucherstatusservice.md#static-voucherstatussearch)

## Methods

### `Static` voucherStatusGet

▸ **voucherStatusGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucherStatus](../interfaces/responsewrappervoucherstatus.md)›*

[BETA] Get voucherStatus by ID.

**`result`** ResponseWrapperVoucherStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperVoucherStatus](../interfaces/responsewrappervoucherstatus.md)›*

___

### `Static` voucherStatusPost

▸ **voucherStatusPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperVoucherStatus](../interfaces/responsewrappervoucherstatus.md)›*

[BETA] Post new voucherStatus.

**`result`** ResponseWrapperVoucherStatus successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [VoucherStatus](../modules/voucherstatus.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperVoucherStatus](../interfaces/responsewrappervoucherstatus.md)›*

___

### `Static` voucherStatusSearch

▸ **voucherStatusSearch**(`__namedParameters`: object): *Promise‹[ListResponseVoucherStatus](../interfaces/listresponsevoucherstatus.md)›*

[BETA] Find voucherStatus corresponding with sent data. The voucherStatus is used to coordinate integration processes. Requires setup done by Tripletex, currently supports debt collection.

**`result`** ListResponseVoucherStatus successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`ids` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |
`voucherIds` | string | - | List of IDs |

**Returns:** *Promise‹[ListResponseVoucherStatus](../interfaces/listresponsevoucherstatus.md)›*
