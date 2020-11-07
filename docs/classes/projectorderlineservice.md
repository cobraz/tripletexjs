[tripletexjs](../README.md) › [ProjectOrderlineService](projectorderlineservice.md)

# Class: ProjectOrderlineService

## Hierarchy

* **ProjectOrderlineService**

## Index

### Methods

* [projectOrderlineDelete](projectorderlineservice.md#static-projectorderlinedelete)
* [projectOrderlineGet](projectorderlineservice.md#static-projectorderlineget)
* [projectOrderlineListPostList](projectorderlineservice.md#static-projectorderlinelistpostlist)
* [projectOrderlinePost](projectorderlineservice.md#static-projectorderlinepost)
* [projectOrderlinePut](projectorderlineservice.md#static-projectorderlineput)
* [projectOrderlineSearch](projectorderlineservice.md#static-projectorderlinesearch)

## Methods

### `Static` projectOrderlineDelete

▸ **projectOrderlineDelete**(`__namedParameters`: object): *Promise‹any›*

Delete order line by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` projectOrderlineGet

▸ **projectOrderlineGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectOrderLine](../interfaces/responsewrapperprojectorderline.md)›*

[BETA] Get order line by ID.

**`result`** ResponseWrapperProjectOrderLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectOrderLine](../interfaces/responsewrapperprojectorderline.md)›*

___

### `Static` projectOrderlineListPostList

▸ **projectOrderlineListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProjectOrderLine](../interfaces/listresponseprojectorderline.md)›*

[BETA] Create multiple order lines.

**`result`** ListResponseProjectOrderLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectOrderLine](../interfaces/projectorderline.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProjectOrderLine](../interfaces/listresponseprojectorderline.md)›*

___

### `Static` projectOrderlinePost

▸ **projectOrderlinePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectOrderLine](../interfaces/responsewrapperprojectorderline.md)›*

[BETA] Create order line. When creating several order lines, use /list for better performance.

**`result`** ResponseWrapperProjectOrderLine successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectOrderLine](../interfaces/projectorderline.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProjectOrderLine](../interfaces/responsewrapperprojectorderline.md)›*

___

### `Static` projectOrderlinePut

▸ **projectOrderlinePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectOrderLine](../interfaces/responsewrapperprojectorderline.md)›*

[BETA] Update project orderline.

**`result`** ResponseWrapperProjectOrderLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectOrderLine](../interfaces/projectorderline.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectOrderLine](../interfaces/responsewrapperprojectorderline.md)›*

___

### `Static` projectOrderlineSearch

▸ **projectOrderlineSearch**(`__namedParameters`: object): *Promise‹[ListResponseProjectOrderLine](../interfaces/listresponseprojectorderline.md)›*

[BETA] Find all order lines for project.

**`result`** ListResponseProjectOrderLine successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`projectId` | number | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectOrderLine](../interfaces/listresponseprojectorderline.md)›*
