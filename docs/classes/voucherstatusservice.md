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
`fields` | undefined &#124; string | Fields filter pattern |
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
`body` | undefined &#124; [VoucherStatus](../modules/voucherstatus.md) | JSON representing the new object to be created. Should not have ID and version set. |

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
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`ids` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |
`voucherIds` | undefined &#124; string | - | List of IDs |

**Returns:** *Promise‹[ListResponseVoucherStatus](../interfaces/listresponsevoucherstatus.md)›*
