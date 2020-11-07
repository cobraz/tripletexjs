[tripletexjs](../README.md) › [EventService](eventservice.md)

# Class: EventService

## Hierarchy

* **EventService**

## Index

### Methods

* [eventExample](eventservice.md#static-eventexample)
* [eventGet](eventservice.md#static-eventget)

## Methods

### `Static` eventExample

▸ **eventExample**(`__namedParameters`: object): *Promise‹[ResponseWrapperEventInfoDTO](../interfaces/responsewrappereventinfodto.md)›*

[BETA] Get example webhook payload

**`result`** ResponseWrapperEventInfoDTO successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`eventType` | string | Event type, from /event endpoint |
`fields` | undefined &#124; string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperEventInfoDTO](../interfaces/responsewrappereventinfodto.md)›*

___

### `Static` eventGet

▸ **eventGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperMapStringEventInfoDescription](../interfaces/responsewrappermapstringeventinfodescription.md)›*

[BETA] Get all (WebHook) event keys.

**`result`** ResponseWrapperMapStringEventInfoDescription successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |

**Returns:** *Promise‹[ResponseWrapperMapStringEventInfoDescription](../interfaces/responsewrappermapstringeventinfodescription.md)›*
