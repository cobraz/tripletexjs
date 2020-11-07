[tripletexjs](../README.md) › [LedgerAccountService](ledgeraccountservice.md)

# Class: LedgerAccountService

## Hierarchy

* **LedgerAccountService**

## Index

### Methods

* [ledgerAccountDelete](ledgeraccountservice.md#static-ledgeraccountdelete)
* [ledgerAccountGet](ledgeraccountservice.md#static-ledgeraccountget)
* [ledgerAccountListDeleteByIds](ledgeraccountservice.md#static-ledgeraccountlistdeletebyids)
* [ledgerAccountListPostList](ledgeraccountservice.md#static-ledgeraccountlistpostlist)
* [ledgerAccountListPutList](ledgeraccountservice.md#static-ledgeraccountlistputlist)
* [ledgerAccountPost](ledgeraccountservice.md#static-ledgeraccountpost)
* [ledgerAccountPut](ledgeraccountservice.md#static-ledgeraccountput)
* [ledgerAccountSearch](ledgeraccountservice.md#static-ledgeraccountsearch)

## Methods

### `Static` ledgerAccountDelete

▸ **ledgerAccountDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete account.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` ledgerAccountGet

▸ **ledgerAccountGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccount](../interfaces/responsewrapperaccount.md)›*

Get account by ID.

**`result`** ResponseWrapperAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperAccount](../interfaces/responsewrapperaccount.md)›*

___

### `Static` ledgerAccountListDeleteByIds

▸ **ledgerAccountListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete multiple accounts.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` ledgerAccountListPostList

▸ **ledgerAccountListPostList**(`__namedParameters`: object): *Promise‹[ListResponseAccount](../interfaces/listresponseaccount.md)›*

[BETA] Create several accounts.

**`result`** ListResponseAccount successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Account](../modules/account.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseAccount](../interfaces/listresponseaccount.md)›*

___

### `Static` ledgerAccountListPutList

▸ **ledgerAccountListPutList**(`__namedParameters`: object): *Promise‹[ListResponseAccount](../interfaces/listresponseaccount.md)›*

[BETA] Update multiple accounts.

**`result`** ListResponseAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Account](../modules/account.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseAccount](../interfaces/listresponseaccount.md)›*

___

### `Static` ledgerAccountPost

▸ **ledgerAccountPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccount](../interfaces/responsewrapperaccount.md)›*

[BETA] Create a new account.

**`result`** ResponseWrapperAccount successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Account](../modules/account.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperAccount](../interfaces/responsewrapperaccount.md)›*

___

### `Static` ledgerAccountPut

▸ **ledgerAccountPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperAccount](../interfaces/responsewrapperaccount.md)›*

[BETA] Update account.

**`result`** ResponseWrapperAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Account](../modules/account.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperAccount](../interfaces/responsewrapperaccount.md)›*

___

### `Static` ledgerAccountSearch

▸ **ledgerAccountSearch**(`__namedParameters`: object): *Promise‹[ListResponseAccount](../interfaces/listresponseaccount.md)›*

Find accounts corresponding with sent data.

**`result`** ListResponseAccount successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isApplicableForSupplierInvoice` | boolean | - | Equals |
`isBankAccount` | boolean | - | Equals |
`isInactive` | boolean | - | Equals |
`number` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseAccount](../interfaces/listresponseaccount.md)›*
