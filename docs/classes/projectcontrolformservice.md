[tripletexjs](../README.md) › [ProjectControlFormService](projectcontrolformservice.md)

# Class: ProjectControlFormService

## Hierarchy

* **ProjectControlFormService**

## Index

### Methods

* [projectControlFormGet](projectcontrolformservice.md#static-projectcontrolformget)
* [projectControlFormSearch](projectcontrolformservice.md#static-projectcontrolformsearch)

## Methods

### `Static` projectControlFormGet

▸ **projectControlFormGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectControlForm](../interfaces/responsewrapperprojectcontrolform.md)›*

[BETA] Get project control form by ID.

**`result`** ResponseWrapperProjectControlForm successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectControlForm](../interfaces/responsewrapperprojectcontrolform.md)›*

___

### `Static` projectControlFormSearch

▸ **projectControlFormSearch**(`__namedParameters`: object): *Promise‹[ListResponseProjectControlForm](../interfaces/listresponseprojectcontrolform.md)›*

[BETA] Get project control forms by project ID.

**`result`** ListResponseProjectControlForm successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`projectId` | number | - | Project ID |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectControlForm](../interfaces/listresponseprojectcontrolform.md)›*
