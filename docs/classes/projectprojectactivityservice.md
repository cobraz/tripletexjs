[tripletexjs](../README.md) › [ProjectProjectActivityService](projectprojectactivityservice.md)

# Class: ProjectProjectActivityService

## Hierarchy

* **ProjectProjectActivityService**

## Index

### Methods

* [projectProjectActivityDelete](projectprojectactivityservice.md#static-projectprojectactivitydelete)
* [projectProjectActivityGet](projectprojectactivityservice.md#static-projectprojectactivityget)
* [projectProjectActivityListDeleteByIds](projectprojectactivityservice.md#static-projectprojectactivitylistdeletebyids)
* [projectProjectActivityPost](projectprojectactivityservice.md#static-projectprojectactivitypost)

## Methods

### `Static` projectProjectActivityDelete

▸ **projectProjectActivityDelete**(`__namedParameters`: object): *Promise‹any›*

Delete project activity

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` projectProjectActivityGet

▸ **projectProjectActivityGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectActivity](../interfaces/responsewrapperprojectactivity.md)›*

Find project activity by id

**`result`** ResponseWrapperProjectActivity successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectActivity](../interfaces/responsewrapperprojectactivity.md)›*

___

### `Static` projectProjectActivityListDeleteByIds

▸ **projectProjectActivityListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

Delete project activities

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` projectProjectActivityPost

▸ **projectProjectActivityPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectActivity](../interfaces/responsewrapperprojectactivity.md)›*

Add project activity.

**`result`** ResponseWrapperProjectActivity successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectActivity](../interfaces/projectactivity.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProjectActivity](../interfaces/responsewrapperprojectactivity.md)›*
