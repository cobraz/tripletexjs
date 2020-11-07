[tripletexjs](../README.md) › [ProjectTaskService](projecttaskservice.md)

# Class: ProjectTaskService

## Hierarchy

* **ProjectTaskService**

## Index

### Methods

* [projectTaskSearch](projecttaskservice.md#static-projecttasksearch)

## Methods

### `Static` projectTaskSearch

▸ **projectTaskSearch**(`__namedParameters`: object): *Promise‹[ListResponseTask](../interfaces/listresponsetask.md)›*

Find all tasks for project.

**`result`** ListResponseTask successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`projectId` | number | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTask](../interfaces/listresponsetask.md)›*
