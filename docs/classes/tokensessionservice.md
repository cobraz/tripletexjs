[tripletexjs](../README.md) › [TokenSessionService](tokensessionservice.md)

# Class: TokenSessionService

## Hierarchy

* **TokenSessionService**

## Index

### Methods

* [tokenSessionCreateCreate](tokensessionservice.md#static-tokensessioncreatecreate)
* [tokenSessionDelete](tokensessionservice.md#static-tokensessiondelete)
* [tokenSessionWhoAmIWhoAmI](tokensessionservice.md#static-tokensessionwhoamiwhoami)

## Methods

### `Static` tokenSessionCreateCreate

▸ **tokenSessionCreateCreate**(`__namedParameters`: object): *Promise‹[ResponseWrapperSessionToken](../interfaces/responsewrappersessiontoken.md)›*

Create session token.

**`result`** ResponseWrapperSessionToken successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`consumerToken` | string | Token of the API consumer |
`employeeToken` | string | The employees token |
`expirationDate` | string | Expiration date for the combined token |

**Returns:** *Promise‹[ResponseWrapperSessionToken](../interfaces/responsewrappersessiontoken.md)›*

___

### `Static` tokenSessionDelete

▸ **tokenSessionDelete**(`__namedParameters`: object): *Promise‹any›*

Delete session token.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`token` | string | The login token string to delete |

**Returns:** *Promise‹any›*

___

### `Static` tokenSessionWhoAmIWhoAmI

▸ **tokenSessionWhoAmIWhoAmI**(`__namedParameters`: object): *Promise‹[ResponseWrapperLoggedInUserInfoDTO](../interfaces/responsewrapperloggedinuserinfodto.md)›*

Find information about the current user.

**`result`** ResponseWrapperLoggedInUserInfoDTO successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperLoggedInUserInfoDTO](../interfaces/responsewrapperloggedinuserinfodto.md)›*
