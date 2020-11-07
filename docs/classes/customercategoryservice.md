[tripletexjs](../README.md) › [CustomerCategoryService](customercategoryservice.md)

# Class: CustomerCategoryService

## Hierarchy

* **CustomerCategoryService**

## Index

### Methods

* [customerCategoryGet](customercategoryservice.md#static-customercategoryget)
* [customerCategoryPost](customercategoryservice.md#static-customercategorypost)
* [customerCategoryPut](customercategoryservice.md#static-customercategoryput)
* [customerCategorySearch](customercategoryservice.md#static-customercategorysearch)

## Methods

### `Static` customerCategoryGet

▸ **customerCategoryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperCustomerCategory](../interfaces/responsewrappercustomercategory.md)›*

Find customer/supplier category by ID.

**`result`** ResponseWrapperCustomerCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCustomerCategory](../interfaces/responsewrappercustomercategory.md)›*

___

### `Static` customerCategoryPost

▸ **customerCategoryPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperCustomerCategory](../interfaces/responsewrappercustomercategory.md)›*

Add new customer/supplier category.

**`result`** ResponseWrapperCustomerCategory successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [CustomerCategory](../interfaces/customercategory.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperCustomerCategory](../interfaces/responsewrappercustomercategory.md)›*

___

### `Static` customerCategoryPut

▸ **customerCategoryPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperCustomerCategory](../interfaces/responsewrappercustomercategory.md)›*

Update customer/supplier category.

**`result`** ResponseWrapperCustomerCategory successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [CustomerCategory](../interfaces/customercategory.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCustomerCategory](../interfaces/responsewrappercustomercategory.md)›*

___

### `Static` customerCategorySearch

▸ **customerCategorySearch**(`__namedParameters`: object): *Promise‹[ListResponseCustomerCategory](../interfaces/listresponsecustomercategory.md)›*

Find customer/supplier categories corresponding with sent data.

**`result`** ListResponseCustomerCategory successful operation

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
`type` | undefined &#124; string | - | List of IDs |

**Returns:** *Promise‹[ListResponseCustomerCategory](../interfaces/listresponsecustomercategory.md)›*
