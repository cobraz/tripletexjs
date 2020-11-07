[tripletexjs](../README.md) › [CompanySalesmodulesService](companysalesmodulesservice.md)

# Class: CompanySalesmodulesService

## Hierarchy

* **CompanySalesmodulesService**

## Index

### Methods

* [companySalesmodulesGet](companysalesmodulesservice.md#static-companysalesmodulesget)
* [companySalesmodulesPost](companysalesmodulesservice.md#static-companysalesmodulespost)

## Methods

### `Static` companySalesmodulesGet

▸ **companySalesmodulesGet**(`__namedParameters`: object): *Promise‹[ListResponseSalesModuleDTO](../interfaces/listresponsesalesmoduledto.md)›*

[BETA] Get active sales modules.

**`result`** ListResponseSalesModuleDTO successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseSalesModuleDTO](../interfaces/listresponsesalesmoduledto.md)›*

___

### `Static` companySalesmodulesPost

▸ **companySalesmodulesPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperSalesModuleDTO](../interfaces/responsewrappersalesmoduledto.md)›*

[BETA] Add (activate) a new sales module.

**`result`** ResponseWrapperSalesModuleDTO successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [SalesModuleDTO](../modules/salesmoduledto.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperSalesModuleDTO](../interfaces/responsewrappersalesmoduledto.md)›*
