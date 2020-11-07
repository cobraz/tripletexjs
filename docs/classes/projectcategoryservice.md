[tripletexjs](../README.md) › [ProjectCategoryService](projectcategoryservice.md)

# Class: ProjectCategoryService

## Hierarchy

* **ProjectCategoryService**

## Index

### Methods

* [projectCategoryGet](projectcategoryservice.md#static-projectcategoryget)
* [projectCategoryPost](projectcategoryservice.md#static-projectcategorypost)
* [projectCategoryPut](projectcategoryservice.md#static-projectcategoryput)
* [projectCategorySearch](projectcategoryservice.md#static-projectcategorysearch)

## Methods

### `Static` projectCategoryGet

▸ **projectCategoryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectCategory](../interfaces/responsewrapperprojectcategory.md)›*

Find project category by ID.

**`result`** ResponseWrapperProjectCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectCategory](../interfaces/responsewrapperprojectcategory.md)›*

___

### `Static` projectCategoryPost

▸ **projectCategoryPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectCategory](../interfaces/responsewrapperprojectcategory.md)›*

Add new project category.

**`result`** ResponseWrapperProjectCategory successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProjectCategory](../interfaces/projectcategory.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProjectCategory](../interfaces/responsewrapperprojectcategory.md)›*

___

### `Static` projectCategoryPut

▸ **projectCategoryPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectCategory](../interfaces/responsewrapperprojectcategory.md)›*

Update project category.

**`result`** ResponseWrapperProjectCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProjectCategory](../interfaces/projectcategory.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectCategory](../interfaces/responsewrapperprojectcategory.md)›*

___

### `Static` projectCategorySearch

▸ **projectCategorySearch**(`__namedParameters`: object): *Promise‹[ListResponseProjectCategory](../interfaces/listresponseprojectcategory.md)›*

Find project categories corresponding with sent data.

**`result`** ListResponseProjectCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`description` | undefined &#124; string | - | Containing |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`name` | undefined &#124; string | - | Containing |
`number` | undefined &#124; string | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectCategory](../interfaces/listresponseprojectcategory.md)›*
