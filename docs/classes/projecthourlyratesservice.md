[tripletexjs](../README.md) › [ProjectHourlyRatesService](projecthourlyratesservice.md)

# Class: ProjectHourlyRatesService

## Hierarchy

* **ProjectHourlyRatesService**

## Index

### Methods

* [projectHourlyRatesDelete](projecthourlyratesservice.md#static-projecthourlyratesdelete)
* [projectHourlyRatesGet](projecthourlyratesservice.md#static-projecthourlyratesget)
* [projectHourlyRatesListDeleteByIds](projecthourlyratesservice.md#static-projecthourlyrateslistdeletebyids)
* [projectHourlyRatesListPostList](projecthourlyratesservice.md#static-projecthourlyrateslistpostlist)
* [projectHourlyRatesListPutList](projecthourlyratesservice.md#static-projecthourlyrateslistputlist)
* [projectHourlyRatesPost](projecthourlyratesservice.md#static-projecthourlyratespost)
* [projectHourlyRatesPut](projecthourlyratesservice.md#static-projecthourlyratesput)
* [projectHourlyRatesSearch](projecthourlyratesservice.md#static-projecthourlyratessearch)

## Methods

### `Static` projectHourlyRatesDelete

▸ **projectHourlyRatesDelete**(`__namedParameters`: object): *Promise‹any›*

Delete Project Hourly Rate

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` projectHourlyRatesGet

▸ **projectHourlyRatesGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectHourlyRate](../interfaces/responsewrapperprojecthourlyrate.md)›*

Find project hourly rate by ID.

**`result`** ResponseWrapperProjectHourlyRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectHourlyRate](../interfaces/responsewrapperprojecthourlyrate.md)›*

___

### `Static` projectHourlyRatesListDeleteByIds

▸ **projectHourlyRatesListDeleteByIds**(`__namedParameters`: object): *Promise‹any›*

Delete project hourly rates.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`ids` | string | ID of the elements |

**Returns:** *Promise‹any›*

___

### `Static` projectHourlyRatesListPostList

▸ **projectHourlyRatesListPostList**(`__namedParameters`: object): *Promise‹[ListResponseProjectHourlyRate](../interfaces/listresponseprojecthourlyrate.md)›*

Create multiple project hourly rates.

**`result`** ListResponseProjectHourlyRate successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProjectHourlyRate](../modules/projecthourlyrate.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseProjectHourlyRate](../interfaces/listresponseprojecthourlyrate.md)›*

___

### `Static` projectHourlyRatesListPutList

▸ **projectHourlyRatesListPutList**(`__namedParameters`: object): *Promise‹[ListResponseProjectHourlyRate](../interfaces/listresponseprojecthourlyrate.md)›*

Update multiple project hourly rates.

**`result`** ListResponseProjectHourlyRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProjectHourlyRate](../modules/projecthourlyrate.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseProjectHourlyRate](../interfaces/listresponseprojecthourlyrate.md)›*

___

### `Static` projectHourlyRatesPost

▸ **projectHourlyRatesPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectHourlyRate](../interfaces/responsewrapperprojecthourlyrate.md)›*

Create a project hourly rate.

**`result`** ResponseWrapperProjectHourlyRate successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProjectHourlyRate](../modules/projecthourlyrate.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperProjectHourlyRate](../interfaces/responsewrapperprojecthourlyrate.md)›*

___

### `Static` projectHourlyRatesPut

▸ **projectHourlyRatesPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperProjectHourlyRate](../interfaces/responsewrapperprojecthourlyrate.md)›*

Update a project hourly rate.

**`result`** ResponseWrapperProjectHourlyRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [ProjectHourlyRate](../modules/projecthourlyrate.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProjectHourlyRate](../interfaces/responsewrapperprojecthourlyrate.md)›*

___

### `Static` projectHourlyRatesSearch

▸ **projectHourlyRatesSearch**(`__namedParameters`: object): *Promise‹[ListResponseProjectHourlyRate](../interfaces/listresponseprojecthourlyrate.md)›*

Find project hourly rates corresponding with sent data.

**`result`** ListResponseProjectHourlyRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`projectId` | undefined &#124; string | - | List of IDs |
`showInProjectOrder` | undefined &#124; false &#124; true | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |
`startDateFrom` | undefined &#124; string | - | From and including |
`startDateTo` | undefined &#124; string | - | To and excluding |
`type` | undefined &#124; "TYPE_PREDEFINED_HOURLY_RATES" &#124; "TYPE_PROJECT_SPECIFIC_HOURLY_RATES" &#124; "TYPE_FIXED_HOURLY_RATE" | - | Equals |

**Returns:** *Promise‹[ListResponseProjectHourlyRate](../interfaces/listresponseprojecthourlyrate.md)›*
