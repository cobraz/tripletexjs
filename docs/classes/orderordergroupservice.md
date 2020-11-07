[tripletexjs](../README.md) › [OrderOrderGroupService](orderordergroupservice.md)

# Class: OrderOrderGroupService

## Hierarchy

* **OrderOrderGroupService**

## Index

### Methods

* [orderOrderGroupDelete](orderordergroupservice.md#static-orderordergroupdelete)
* [orderOrderGroupGet](orderordergroupservice.md#static-orderordergroupget)
* [orderOrderGroupPost](orderordergroupservice.md#static-orderordergrouppost)
* [orderOrderGroupPut](orderordergroupservice.md#static-orderordergroupput)
* [orderOrderGroupSearch](orderordergroupservice.md#static-orderordergroupsearch)

## Methods

### `Static` orderOrderGroupDelete

▸ **orderOrderGroupDelete**(`__namedParameters`: object): *Promise‹any›*

[Beta] Delete orderGroup by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` orderOrderGroupGet

▸ **orderOrderGroupGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrderGroup](../interfaces/responsewrapperordergroup.md)›*

[Beta] Get orderGroup by ID. A orderGroup is a way to group orderLines, and add comments and subtotals

**`result`** ResponseWrapperOrderGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperOrderGroup](../interfaces/responsewrapperordergroup.md)›*

___

### `Static` orderOrderGroupPost

▸ **orderOrderGroupPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrderGroup](../interfaces/responsewrapperordergroup.md)›*

[Beta] Post orderGroup.

**`result`** ResponseWrapperOrderGroup successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [OrderGroup](../interfaces/ordergroup.md) | JSON representing the new object to be created. Should not have ID and version set. |
`orderLineIds` | string | List of IDs |

**Returns:** *Promise‹[ResponseWrapperOrderGroup](../interfaces/responsewrapperordergroup.md)›*

___

### `Static` orderOrderGroupPut

▸ **orderOrderGroupPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperOrderGroup](../interfaces/responsewrapperordergroup.md)›*

[Beta] Put orderGroup.

**`result`** ResponseWrapperOrderGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`body` | [OrderGroup](../interfaces/ordergroup.md) | - | JSON representing the new object to be created. Should not have ID and version set. |
`orderLineIds` | string | - | List of IDs |
`removeExistingOrderLines` | boolean | false | Should existing orderLines be removed from this orderGroup |

**Returns:** *Promise‹[ResponseWrapperOrderGroup](../interfaces/responsewrapperordergroup.md)›*

___

### `Static` orderOrderGroupSearch

▸ **orderOrderGroupSearch**(`__namedParameters`: object): *Promise‹[ListResponseOrderGroup](../interfaces/listresponseordergroup.md)›*

[BETA] Find orderGroups corresponding with sent data.

**`result`** ListResponseOrderGroup successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`ids` | string | - | List of IDs |
`orderIds` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseOrderGroup](../interfaces/listresponseordergroup.md)›*
