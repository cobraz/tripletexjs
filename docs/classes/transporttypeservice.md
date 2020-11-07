[tripletexjs](../README.md) › [TransportTypeService](transporttypeservice.md)

# Class: TransportTypeService

## Hierarchy

* **TransportTypeService**

## Index

### Methods

* [transportTypeGet](transporttypeservice.md#static-transporttypeget)
* [transportTypeSearch](transporttypeservice.md#static-transporttypesearch)

## Methods

### `Static` transportTypeGet

▸ **transportTypeGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperTransportType](../interfaces/responsewrappertransporttype.md)›*

 [BETA] Find transport type by ID.

**`result`** ResponseWrapperTransportType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperTransportType](../interfaces/responsewrappertransporttype.md)›*

___

### `Static` transportTypeSearch

▸ **transportTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseTransportType](../interfaces/listresponsetransporttype.md)›*

 [BETA] Search transport type.

**`result`** ListResponseTransportType successful operation

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
`supplierId` | number[] | - | List of valid suppliers ids. |

**Returns:** *Promise‹[ListResponseTransportType](../interfaces/listresponsetransporttype.md)›*
