[tripletexjs](../README.md) › [ProjectService](projectservice.md)

# Class: ProjectService

## Hierarchy

* **ProjectService**

## Index

### Methods

* [projectDelete](projectservice.md#static-projectdelete)
* [projectDeleteList](projectservice.md#static-projectdeletelist)
* [projectForTimeSheetGetForTimeSheet](projectservice.md#static-projectfortimesheetgetfortimesheet)
* [projectGet](projectservice.md#static-projectget)
* [projectListDeleteByIds](projectservice.md#static-projectlistdeletebyids)
* [projectListPostList](projectservice.md#static-projectlistpostlist)
* [projectListPutList](projectservice.md#static-projectlistputlist)
* [projectPost](projectservice.md#static-projectpost)
* [projectPut](projectservice.md#static-projectput)
* [projectSearch](projectservice.md#static-projectsearch)

## Methods

### `Static` projectDelete

▸ **projectDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete project.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` projectDeleteList

▸ **projectDeleteList**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete multiple projects.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Project](../modules/project.md)[] | JSON representing objects to delete. Should have ID and version set. |

**Returns:** *Promise‹any›*

___

### `Static` projectForTimeSheetGetForTimeSheet

▸ **projectForTimeSheetGetForTimeSheet**(`__namedParameters`: object): *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

Find projects applicable for time sheet registration on a specific day.

**`result`** ListResponseProject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`date` | string | - | yyyy-MM-dd. Defaults to today. |
`employeeId` | number | - | Employee ID. Defaults to ID of token owner. |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

___

### `Static` projectGet

▸ **projectGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProject](../interfaces/responsewrapperproject.md)›*

Find project by ID.

**`result`** ResponseWrapperProject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProject](../interfaces/responsewrapperproject.md)›*

___

### `Static` projectListDeleteByIds

▸ **projectListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete projects.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` projectListPostList

▸ **projectListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

[BETA] Register new projects. Multiple projects for different users can be sent in the same request.

**`result`** ListResponseProject successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Project](../modules/project.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

___

### `Static` projectListPutList

▸ **projectListPutList**(`__namedParameters`: object): *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

[BETA] Update multiple projects.

**`result`** ListResponseProject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Project](../modules/project.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

___

### `Static` projectPost

▸ **projectPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProject](../interfaces/responsewrapperproject.md)›*

[BETA] Add new project.

**`result`** ResponseWrapperProject successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Project](../modules/project.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProject](../interfaces/responsewrapperproject.md)›*

___

### `Static` projectPut

▸ **projectPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProject](../interfaces/responsewrapperproject.md)›*

[BETA] Update project.

**`result`** ResponseWrapperProject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [Project](../modules/project.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProject](../interfaces/responsewrapperproject.md)›*

___

### `Static` projectSearch

▸ **projectSearch**(`__namedParameters`: object): *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*

Find projects corresponding with sent data.

**`result`** ListResponseProject successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`customerId` | string | - | Equals |
`departmentId` | string | - | List of IDs |
`employeeInProjectId` | string | - | List of IDs |
`endDateFrom` | string | - | From and including |
`endDateTo` | string | - | To and excluding |
`externalAccountsNumber` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`isClosed` | boolean | - | Equals |
`isOffer` | boolean | - | Equals |
`name` | string | - | Containing |
`number` | string | - | Equals |
`projectManagerId` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |
`startDateFrom` | string | - | From and including |
`startDateTo` | string | - | To and excluding |

**Returns:** *Promise‹[ListResponseProject](../interfaces/listresponseproject.md)›*
