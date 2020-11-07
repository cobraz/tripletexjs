[tripletexjs](../README.md) › [ContactService](contactservice.md)

# Class: ContactService

## Hierarchy

* **ContactService**

## Index

### Methods

* [contactGet](contactservice.md#static-contactget)
* [contactPost](contactservice.md#static-contactpost)
* [contactPut](contactservice.md#static-contactput)
* [contactSearch](contactservice.md#static-contactsearch)

## Methods

### `Static` contactGet

▸ **contactGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperContact](../interfaces/responsewrappercontact.md)›*

Get contact by ID.

**`result`** ResponseWrapperContact successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperContact](../interfaces/responsewrappercontact.md)›*

___

### `Static` contactPost

▸ **contactPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperContact](../interfaces/responsewrappercontact.md)›*

Create contact.

**`result`** ResponseWrapperContact successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Contact](../interfaces/contact.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperContact](../interfaces/responsewrappercontact.md)›*

___

### `Static` contactPut

▸ **contactPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperContact](../interfaces/responsewrappercontact.md)›*

[BETA] Update contact.

**`result`** ResponseWrapperContact successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Contact](../interfaces/contact.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperContact](../interfaces/responsewrappercontact.md)›*

___

### `Static` contactSearch

▸ **contactSearch**(`__namedParameters`: object): *Promise‹[ListResponseContact](../interfaces/listresponsecontact.md)›*

Find contacts corresponding with sent data.

**`result`** ListResponseContact successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`customerId` | undefined &#124; string | - | List of IDs |
`email` | undefined &#124; string | - | Containing |
`fields` | undefined &#124; string | - | Fields filter pattern |
`firstName` | undefined &#124; string | - | Containing |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`lastName` | undefined &#124; string | - | Containing |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseContact](../interfaces/listresponsecontact.md)›*
