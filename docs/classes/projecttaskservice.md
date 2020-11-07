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
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`projectId` | undefined &#124; number | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseTask](../interfaces/listresponsetask.md)›*
