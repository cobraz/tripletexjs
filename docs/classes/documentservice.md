[tripletexjs](../README.md) › [DocumentService](documentservice.md)

# Class: DocumentService

## Hierarchy

* **DocumentService**

## Index

### Methods

* [documentContentDownloadContent](documentservice.md#static-documentcontentdownloadcontent)
* [documentGet](documentservice.md#static-documentget)

## Methods

### `Static` documentContentDownloadContent

▸ **documentContentDownloadContent**(`__namedParameters`: object): *Promise‹string›*

[BETA] Get content of document given by ID.

**`result`** string successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of document to download content from. |

**Returns:** *Promise‹string›*

___

### `Static` documentGet

▸ **documentGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocument](../interfaces/responsewrapperdocument.md)›*

[BETA] Get document by ID.

**`result`** ResponseWrapperDocument successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocument](../interfaces/responsewrapperdocument.md)›*
