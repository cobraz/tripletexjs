[tripletexjs](../README.md) › [DivisionService](divisionservice.md)

# Class: DivisionService

## Hierarchy

* **DivisionService**

## Index

### Methods

* [divisionListPostList](divisionservice.md#static-divisionlistpostlist)
* [divisionListPutList](divisionservice.md#static-divisionlistputlist)
* [divisionPost](divisionservice.md#static-divisionpost)
* [divisionPut](divisionservice.md#static-divisionput)
* [divisionSearch](divisionservice.md#static-divisionsearch)

## Methods

### `Static` divisionListPostList

▸ **divisionListPostList**(`__namedParameters`: object): *Promise‹[ListResponseDivision](../interfaces/listresponsedivision.md)›*

[BETA] Create divisions.

**`result`** ListResponseDivision successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Division](../interfaces/division.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseDivision](../interfaces/listresponsedivision.md)›*

___

### `Static` divisionListPutList

▸ **divisionListPutList**(`__namedParameters`: object): *Promise‹[ListResponseDivision](../interfaces/listresponsedivision.md)›*

[BETA] Update multiple divisions.

**`result`** ListResponseDivision successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Division](../interfaces/division.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseDivision](../interfaces/listresponsedivision.md)›*

___

### `Static` divisionPost

▸ **divisionPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDivision](../interfaces/responsewrapperdivision.md)›*

[BETA] Create division.

**`result`** ResponseWrapperDivision successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Division](../interfaces/division.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperDivision](../interfaces/responsewrapperdivision.md)›*

___

### `Static` divisionPut

▸ **divisionPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperDivision](../interfaces/responsewrapperdivision.md)›*

[BETA] Update division information.

**`result`** ResponseWrapperDivision successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Division](../interfaces/division.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDivision](../interfaces/responsewrapperdivision.md)›*

___

### `Static` divisionSearch

▸ **divisionSearch**(`__namedParameters`: object): *Promise‹[ListResponseDivision](../interfaces/listresponsedivision.md)›*

[BETA] Get divisions.

**`result`** ListResponseDivision successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDivision](../interfaces/listresponsedivision.md)›*
