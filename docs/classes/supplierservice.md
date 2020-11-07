[tripletexjs](../README.md) › [SupplierService](supplierservice.md)

# Class: SupplierService

## Hierarchy

* **SupplierService**

## Index

### Methods

* [supplierDelete](supplierservice.md#static-supplierdelete)
* [supplierGet](supplierservice.md#static-supplierget)
* [supplierListPostList](supplierservice.md#static-supplierlistpostlist)
* [supplierListPutList](supplierservice.md#static-supplierlistputlist)
* [supplierPost](supplierservice.md#static-supplierpost)
* [supplierPut](supplierservice.md#static-supplierput)
* [supplierSearch](supplierservice.md#static-suppliersearch)

## Methods

### `Static` supplierDelete

▸ **supplierDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete supplier by ID

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` supplierGet

▸ **supplierGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplier](../interfaces/responsewrappersupplier.md)›*

Get supplier by ID.

**`result`** ResponseWrapperSupplier successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSupplier](../interfaces/responsewrappersupplier.md)›*

___

### `Static` supplierListPostList

▸ **supplierListPostList**(`__namedParameters`: object): *Promise‹[ListResponseSupplier](../interfaces/listresponsesupplier.md)›*

[BETA] Create multiple suppliers. Related supplier addresses may also be created.

**`result`** ListResponseSupplier successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Supplier](../interfaces/supplier.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseSupplier](../interfaces/listresponsesupplier.md)›*

___

### `Static` supplierListPutList

▸ **supplierListPutList**(`__namedParameters`: object): *Promise‹[ListResponseSupplier](../interfaces/listresponsesupplier.md)›*

[BETA] Update multiple suppliers. Addresses can also be updated.

**`result`** ListResponseSupplier successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Supplier](../interfaces/supplier.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseSupplier](../interfaces/listresponsesupplier.md)›*

___

### `Static` supplierPost

▸ **supplierPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplier](../interfaces/responsewrappersupplier.md)›*

Create supplier. Related supplier addresses may also be created.

**`result`** ResponseWrapperSupplier successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Supplier](../interfaces/supplier.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperSupplier](../interfaces/responsewrappersupplier.md)›*

___

### `Static` supplierPut

▸ **supplierPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperSupplier](../interfaces/responsewrappersupplier.md)›*

Update supplier.

**`result`** ResponseWrapperSupplier successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Supplier](../interfaces/supplier.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperSupplier](../interfaces/responsewrappersupplier.md)›*

___

### `Static` supplierSearch

▸ **supplierSearch**(`__namedParameters`: object): *Promise‹[ListResponseSupplier](../interfaces/listresponsesupplier.md)›*

Find suppliers corresponding with sent data.

**`result`** ListResponseSupplier successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountManagerId` | undefined &#124; string | - | List of IDs |
`changedSince` | undefined &#124; string | - | Only return elements that have changed since this date and time |
`count` | number | 1000 | Number of elements to return |
`email` | undefined &#124; string | - | Equals |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`invoiceEmail` | undefined &#124; string | - | Equals |
`isInactive` | boolean | false | Equals |
`isWholesaler` | undefined &#124; false &#124; true | - | Equals |
`organizationNumber` | undefined &#124; string | - | Equals |
`showProducts` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`supplierNumber` | undefined &#124; string | - | List of IDs |

**Returns:** *Promise‹[ListResponseSupplier](../interfaces/listresponsesupplier.md)›*
