[tripletexjs](../README.md) › [TokenConsumerService](tokenconsumerservice.md)

# Class: TokenConsumerService

## Hierarchy

* **TokenConsumerService**

## Index

### Methods

* [tokenConsumerByTokenGetByToken](tokenconsumerservice.md#static-tokenconsumerbytokengetbytoken)

## Methods

### `Static` tokenConsumerByTokenGetByToken

▸ **tokenConsumerByTokenGetByToken**(`__namedParameters`: object): *Promise‹[ResponseWrapperConsumerToken](../interfaces/responsewrapperconsumertoken.md)›*

Get consumer token by token string.

**`result`** ResponseWrapperConsumerToken successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`token` | string | Element ID |

**Returns:** *Promise‹[ResponseWrapperConsumerToken](../interfaces/responsewrapperconsumertoken.md)›*
