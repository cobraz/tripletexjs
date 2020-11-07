[tripletexjs](../README.md) › [ProductUnitMasterService](productunitmasterservice.md)

# Class: ProductUnitMasterService

## Hierarchy

* **ProductUnitMasterService**

## Index

### Methods

* [productUnitMasterGet](productunitmasterservice.md#static-productunitmasterget)
* [productUnitMasterSearch](productunitmasterservice.md#static-productunitmastersearch)

## Methods

### `Static` productUnitMasterGet

▸ **productUnitMasterGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProductUnitMaster](../interfaces/responsewrapperproductunitmaster.md)›*

[BETA] Get product unit master by ID.

**`result`** ResponseWrapperProductUnitMaster successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProductUnitMaster](../interfaces/responsewrapperproductunitmaster.md)›*

___

### `Static` productUnitMasterSearch

▸ **productUnitMasterSearch**(`__namedParameters`: object): *Promise‹[ListResponseProductUnitMaster](../interfaces/listresponseproductunitmaster.md)›*

[BETA] Find product units master corresponding with sent data.

**`result`** ListResponseProductUnitMaster successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`commonCode` | undefined &#124; string | - | Common codes |
`count` | number | 2100 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`isInactive` | undefined &#124; false &#124; true | - | Inactive units |
`name` | undefined &#124; string | - | Names |
`nameShort` | undefined &#124; string | - | Short names |
`peppolName` | undefined &#124; string | - | Peppol names |
`peppolSymbol` | undefined &#124; string | - | Peppol symbols |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProductUnitMaster](../interfaces/listresponseproductunitmaster.md)›*
