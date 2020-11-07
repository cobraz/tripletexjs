[tripletexjs](../README.md) › [ProjectHourlyRatesProjectSpecificRatesService](projecthourlyratesprojectspecificratesservice.md)

# Class: ProjectHourlyRatesProjectSpecificRatesService

## Hierarchy

* **ProjectHourlyRatesProjectSpecificRatesService**

## Index

### Methods

* [projectHourlyRatesProjectSpecificRatesDelete](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificratesdelete)
* [projectHourlyRatesProjectSpecificRatesGet](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificratesget)
* [projectHourlyRatesProjectSpecificRatesListDeleteByIds](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificrateslistdeletebyids)
* [projectHourlyRatesProjectSpecificRatesListPostList](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificrateslistpostlist)
* [projectHourlyRatesProjectSpecificRatesListPutList](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificrateslistputlist)
* [projectHourlyRatesProjectSpecificRatesPost](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificratespost)
* [projectHourlyRatesProjectSpecificRatesPut](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificratesput)
* [projectHourlyRatesProjectSpecificRatesSearch](projecthourlyratesprojectspecificratesservice.md#static-projecthourlyratesprojectspecificratessearch)

## Methods

### `Static` projectHourlyRatesProjectSpecificRatesDelete

▸ **projectHourlyRatesProjectSpecificRatesDelete**(`__namedParameters`: object): *Promise‹any›*

Delete project specific rate

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` projectHourlyRatesProjectSpecificRatesGet

▸ **projectHourlyRatesProjectSpecificRatesGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectSpecificRate](../interfaces/responsewrapperprojectspecificrate.md)›*

Find project specific rate by ID.

**`result`** ResponseWrapperProjectSpecificRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectSpecificRate](../interfaces/responsewrapperprojectspecificrate.md)›*

___

### `Static` projectHourlyRatesProjectSpecificRatesListDeleteByIds

▸ **projectHourlyRatesProjectSpecificRatesListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

Delete project specific rates.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` projectHourlyRatesProjectSpecificRatesListPostList

▸ **projectHourlyRatesProjectSpecificRatesListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProjectSpecificRate](../interfaces/listresponseprojectspecificrate.md)›*

Create multiple new project specific rates.

**`result`** ListResponseProjectSpecificRate successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectSpecificRate](../interfaces/projectspecificrate.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProjectSpecificRate](../interfaces/listresponseprojectspecificrate.md)›*

___

### `Static` projectHourlyRatesProjectSpecificRatesListPutList

▸ **projectHourlyRatesProjectSpecificRatesListPutList**(`__namedParameters`: object): *Promise‹[ListResponseProjectSpecificRate](../interfaces/listresponseprojectspecificrate.md)›*

Update multiple project specific rates.

**`result`** ListResponseProjectSpecificRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectSpecificRate](../interfaces/projectspecificrate.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseProjectSpecificRate](../interfaces/listresponseprojectspecificrate.md)›*

___

### `Static` projectHourlyRatesProjectSpecificRatesPost

▸ **projectHourlyRatesProjectSpecificRatesPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectSpecificRate](../interfaces/responsewrapperprojectspecificrate.md)›*

Create new project specific rate.

**`result`** ResponseWrapperProjectSpecificRate successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectSpecificRate](../interfaces/projectspecificrate.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProjectSpecificRate](../interfaces/responsewrapperprojectspecificrate.md)›*

___

### `Static` projectHourlyRatesProjectSpecificRatesPut

▸ **projectHourlyRatesProjectSpecificRatesPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectSpecificRate](../interfaces/responsewrapperprojectspecificrate.md)›*

Update a project specific rate.

**`result`** ResponseWrapperProjectSpecificRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [ProjectSpecificRate](../interfaces/projectspecificrate.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectSpecificRate](../interfaces/responsewrapperprojectspecificrate.md)›*

___

### `Static` projectHourlyRatesProjectSpecificRatesSearch

▸ **projectHourlyRatesProjectSpecificRatesSearch**(`__namedParameters`: object): *Promise‹[ListResponseProjectSpecificRate](../interfaces/listresponseprojectspecificrate.md)›*

Find project specific rates corresponding with sent data.

**`result`** ListResponseProjectSpecificRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`activityId` | string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`employeeId` | string | - | List of IDs |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`projectHourlyRateId` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProjectSpecificRate](../interfaces/listresponseprojectspecificrate.md)›*
