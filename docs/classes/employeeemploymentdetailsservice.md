[tripletexjs](../README.md) › [EmployeeEmploymentDetailsService](employeeemploymentdetailsservice.md)

# Class: EmployeeEmploymentDetailsService

## Hierarchy

* **EmployeeEmploymentDetailsService**

## Index

### Methods

* [employeeEmploymentDetailsGet](employeeemploymentdetailsservice.md#static-employeeemploymentdetailsget)
* [employeeEmploymentDetailsPost](employeeemploymentdetailsservice.md#static-employeeemploymentdetailspost)
* [employeeEmploymentDetailsPut](employeeemploymentdetailsservice.md#static-employeeemploymentdetailsput)
* [employeeEmploymentDetailsSearch](employeeemploymentdetailsservice.md#static-employeeemploymentdetailssearch)

## Methods

### `Static` employeeEmploymentDetailsGet

▸ **employeeEmploymentDetailsGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmploymentDetails](../interfaces/responsewrapperemploymentdetails.md)›*

[BETA] Find employment details by ID.

**`result`** ResponseWrapperEmploymentDetails successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEmploymentDetails](../interfaces/responsewrapperemploymentdetails.md)›*

___

### `Static` employeeEmploymentDetailsPost

▸ **employeeEmploymentDetailsPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmploymentDetails](../interfaces/responsewrapperemploymentdetails.md)›*

[BETA] Create employment details.

**`result`** ResponseWrapperEmploymentDetails successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [EmploymentDetails](../modules/employmentdetails.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperEmploymentDetails](../interfaces/responsewrapperemploymentdetails.md)›*

___

### `Static` employeeEmploymentDetailsPut

▸ **employeeEmploymentDetailsPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperEmploymentDetails](../interfaces/responsewrapperemploymentdetails.md)›*

[BETA] Update employment details.

**`result`** ResponseWrapperEmploymentDetails successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [EmploymentDetails](../modules/employmentdetails.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperEmploymentDetails](../interfaces/responsewrapperemploymentdetails.md)›*

___

### `Static` employeeEmploymentDetailsSearch

▸ **employeeEmploymentDetailsSearch**(`__namedParameters`: object): *Promise‹[ListResponseEmploymentDetails](../interfaces/listresponseemploymentdetails.md)›*

[BETA] Find all employmentdetails for employment.

**`result`** ListResponseEmploymentDetails successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`employmentId` | undefined &#124; string | - | List of IDs |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEmploymentDetails](../interfaces/listresponseemploymentdetails.md)›*
