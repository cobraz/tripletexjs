[tripletexjs](../README.md) › [EmployeeEmploymentEmploymentTypeService](employeeemploymentemploymenttypeservice.md)

# Class: EmployeeEmploymentEmploymentTypeService

## Hierarchy

* **EmployeeEmploymentEmploymentTypeService**

## Index

### Methods

* [employeeEmploymentEmploymentTypeMaritimeEmploymentTypeGetMaritimeEmploymentType](employeeemploymentemploymenttypeservice.md#static-employeeemploymentemploymenttypemaritimeemploymenttypegetmaritimeemploymenttype)
* [employeeEmploymentEmploymentTypeSalaryTypeGetSalaryType](employeeemploymentemploymenttypeservice.md#static-employeeemploymentemploymenttypesalarytypegetsalarytype)
* [employeeEmploymentEmploymentTypeScheduleTypeGetScheduleType](employeeemploymentemploymenttypeservice.md#static-employeeemploymentemploymenttypescheduletypegetscheduletype)
* [employeeEmploymentEmploymentTypeSearch](employeeemploymentemploymenttypeservice.md#static-employeeemploymentemploymenttypesearch)

## Methods

### `Static` employeeEmploymentEmploymentTypeMaritimeEmploymentTypeGetMaritimeEmploymentType

▸ **employeeEmploymentEmploymentTypeMaritimeEmploymentTypeGetMaritimeEmploymentType**(`__namedParameters`: object): *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

[BETA] Find all maritime employment type IDs.

**`result`** ListResponseEmploymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |
`type` | "SHIP_REGISTER" &#124; "SHIP_TYPE" &#124; "TRADE_AREA" | - | maritimeEmploymentType |

**Returns:** *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

___

### `Static` employeeEmploymentEmploymentTypeSalaryTypeGetSalaryType

▸ **employeeEmploymentEmploymentTypeSalaryTypeGetSalaryType**(`__namedParameters`: object): *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

[BETA] Find all salary type IDs.

**`result`** ListResponseEmploymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

___

### `Static` employeeEmploymentEmploymentTypeScheduleTypeGetScheduleType

▸ **employeeEmploymentEmploymentTypeScheduleTypeGetScheduleType**(`__namedParameters`: object): *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

[BETA] Find all schedule type IDs.

**`result`** ListResponseEmploymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

___

### `Static` employeeEmploymentEmploymentTypeSearch

▸ **employeeEmploymentEmploymentTypeSearch**(`__namedParameters`: object): *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*

[BETA] Find all employment type IDs.

**`result`** ListResponseEmploymentType successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseEmploymentType](../interfaces/listresponseemploymenttype.md)›*
