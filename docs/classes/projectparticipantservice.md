[tripletexjs](../README.md) › [ProjectParticipantService](projectparticipantservice.md)

# Class: ProjectParticipantService

## Hierarchy

* **ProjectParticipantService**

## Index

### Methods

* [projectParticipantGet](projectparticipantservice.md#static-projectparticipantget)
* [projectParticipantListDeleteByIds](projectparticipantservice.md#static-projectparticipantlistdeletebyids)
* [projectParticipantListPostList](projectparticipantservice.md#static-projectparticipantlistpostlist)
* [projectParticipantPost](projectparticipantservice.md#static-projectparticipantpost)
* [projectParticipantPut](projectparticipantservice.md#static-projectparticipantput)

## Methods

### `Static` projectParticipantGet

▸ **projectParticipantGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectParticipant](../interfaces/responsewrapperprojectparticipant.md)›*

[BETA] Find project participant by ID.

**`result`** ResponseWrapperProjectParticipant successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectParticipant](../interfaces/responsewrapperprojectparticipant.md)›*

___

### `Static` projectParticipantListDeleteByIds

▸ **projectParticipantListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete project participants.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` projectParticipantListPostList

▸ **projectParticipantListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProjectParticipant](../interfaces/listresponseprojectparticipant.md)›*

[BETA] Add new project participant. Multiple project participants can be sent in the same request.

**`result`** ListResponseProjectParticipant successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectParticipant](../interfaces/projectparticipant.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProjectParticipant](../interfaces/listresponseprojectparticipant.md)›*

___

### `Static` projectParticipantPost

▸ **projectParticipantPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectParticipant](../interfaces/responsewrapperprojectparticipant.md)›*

[BETA] Add new project participant.

**`result`** ResponseWrapperProjectParticipant successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectParticipant](../interfaces/projectparticipant.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProjectParticipant](../interfaces/responsewrapperprojectparticipant.md)›*

___

### `Static` projectParticipantPut

▸ **projectParticipantPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectParticipant](../interfaces/responsewrapperprojectparticipant.md)›*

[BETA] Update project participant.

**`result`** ResponseWrapperProjectParticipant successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectParticipant](../interfaces/projectparticipant.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectParticipant](../interfaces/responsewrapperprojectparticipant.md)›*
