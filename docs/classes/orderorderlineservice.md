[tripletexjs](../README.md) › [OrderOrderlineService](orderorderlineservice.md)

# Class: OrderOrderlineService

## Hierarchy

* **OrderOrderlineService**

## Index

### Methods

* [orderOrderlineDelete](orderorderlineservice.md#static-orderorderlinedelete)
* [orderOrderlineGet](orderorderlineservice.md#static-orderorderlineget)
* [orderOrderlineListPostList](orderorderlineservice.md#static-orderorderlinelistpostlist)
* [orderOrderlinePost](orderorderlineservice.md#static-orderorderlinepost)

## Methods

### `Static` orderOrderlineDelete

▸ **orderOrderlineDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete order line by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` orderOrderlineGet

▸ **orderOrderlineGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrderLine](../interfaces/responsewrapperorderline.md)›*

Get order line by ID.

**`result`** ResponseWrapperOrderLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperOrderLine](../interfaces/responsewrapperorderline.md)›*

___

### `Static` orderOrderlineListPostList

▸ **orderOrderlineListPostList**(`__namedParameters`: object): *Promise‹[ListResponseOrderLine](../interfaces/listresponseorderline.md)›*

Create multiple order lines.

**`result`** ListResponseOrderLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [OrderLine](../interfaces/orderline.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseOrderLine](../interfaces/listresponseorderline.md)›*

___

### `Static` orderOrderlinePost

▸ **orderOrderlinePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrderLine](../interfaces/responsewrapperorderline.md)›*

Create order line. When creating several order lines, use /list for better performance.

**`result`** ResponseWrapperOrderLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [OrderLine](../interfaces/orderline.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperOrderLine](../interfaces/responsewrapperorderline.md)›*
