[tripletexjs](../README.md) › [Subscription](subscription.md)

# Namespace: Subscription

## Index

### Enumerations

* [status](../enums/subscription.status.md)

### Properties

* [authHeaderName](subscription.md#optional-authheadername)
* [authHeaderValue](subscription.md#optional-authheadervalue)
* [changes](subscription.md#optional-readonly-changes)
* [event](subscription.md#event)
* [fields](subscription.md#optional-fields)
* [id](subscription.md#optional-id)
* [targetUrl](subscription.md#targeturl)
* [url](subscription.md#optional-readonly-url)
* [version](subscription.md#optional-version)

## Properties

### `Optional` authHeaderName

• **authHeaderName**? : *undefined | string*

Custom authentication header name

___

### `Optional` authHeaderValue

• **authHeaderValue**? : *undefined | string*

Custom authentication header value (write only)

___

### `Optional` `Readonly` changes

• **changes**? : *Array‹[Change](change.md)›*

___

###  event

• **event**: *string*

Event name (from /v2/event) you wish to subscribe to. Form should be: *subject.verb*.

___

### `Optional` fields

• **fields**? : *undefined | string*

The fields in the object delivered with the notification callback, nested as in other API calls.

___

### `Optional` id

• **id**? : *undefined | number*

___

###  targetUrl

• **targetUrl**: *string*

The callback URL used for subscriptions (including authentication tokens). Must be absolute and use HTTPS. Basic authentication is supported.

___

### `Optional` `Readonly` url

• **url**? : *undefined | string*

___

### `Optional` version

• **version**? : *undefined | number*
