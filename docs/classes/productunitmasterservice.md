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
`fields` | string | Fields filter pattern |
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
`commonCode` | string | - | Common codes |
`count` | number | 2100 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isInactive` | boolean | - | Inactive units |
`name` | string | - | Names |
`nameShort` | string | - | Short names |
`peppolName` | string | - | Peppol names |
`peppolSymbol` | string | - | Peppol symbols |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProductUnitMaster](../interfaces/listresponseproductunitmaster.md)›*
