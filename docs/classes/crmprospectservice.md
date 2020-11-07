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
`fields` | string | Fields filter pattern |
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
`closedDateFrom` | string | - | From and including |
`closedDateTo` | string | - | To and excluding |
`closedReason` | string | - | Equals |
`competitor` | string | - | Containing |
`count` | number | 1000 | Number of elements to return |
`createdDateFrom` | string | - | From and including |
`createdDateTo` | string | - | To and excluding |
`customerId` | string | - | Equals |
`description` | string | - | Containing |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`isClosed` | boolean | - | Equals |
`name` | string | - | Containing |
`projectId` | string | - | Equals |
`projectOfferId` | string | - | Equals |
`prospectType` | string | - | Equals |
`salesEmployeeId` | string | - | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseProspect](../interfaces/listresponseprospect.md)›*
