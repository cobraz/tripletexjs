[tripletexjs](../README.md) › [CrmProspectService](crmprospectservice.md)

# Class: CrmProspectService

## Hierarchy

* **CrmProspectService**

## Index

### Methods

* [crmProspectGet](crmprospectservice.md#static-crmprospectget)
* [crmProspectSearch](crmprospectservice.md#static-crmprospectsearch)

## Methods

### `Static` crmProspectGet

▸ **crmProspectGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperProspect](../interfaces/responsewrapperprospect.md)›*

Get prospect by ID.

**`result`** ResponseWrapperProspect successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperProspect](../interfaces/responsewrapperprospect.md)›*

___

### `Static` crmProspectSearch

▸ **crmProspectSearch**(`__namedParameters`: object): *Promise‹[ListResponseProspect](../interfaces/listresponseprospect.md)›*

Find prospects corresponding with sent data.

**`result`** ListResponseProspect successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`closedDateFrom` | undefined &#124; string | - | From and including |
`closedDateTo` | undefined &#124; string | - | To and excluding |
`closedReason` | undefined &#124; string | - | Equals |
`competitor` | undefined &#124; string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`createdDateFrom` | undefined &#124; string | - | From and including |
`createdDateTo` | undefined &#124; string | - | To and excluding |
`customerId` | undefined &#124; string | - | Equals |
`description` | undefined &#124; string | - | Containing |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`isClosed` | undefined &#124; false &#124; true | - | Equals |
`name` | undefined &#124; string | - | Containing |
`projectId` | undefined &#124; string | - | Equals |
`projectOfferId` | undefined &#124; string | - | Equals |
`prospectType` | undefined &#124; string | - | Equals |
`salesEmployeeId` | undefined &#124; string | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProspect](../interfaces/listresponseprospect.md)›*
