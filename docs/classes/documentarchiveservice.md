[tripletexjs](../README.md) › [DocumentArchiveService](documentarchiveservice.md)

# Class: DocumentArchiveService

## Hierarchy

* **DocumentArchiveService**

## Index

### Methods

* [documentArchiveAccountAccountPost](documentarchiveservice.md#static-documentarchiveaccountaccountpost)
* [documentArchiveAccountGetAccount](documentarchiveservice.md#static-documentarchiveaccountgetaccount)
* [documentArchiveCustomerCustomerPost](documentarchiveservice.md#static-documentarchivecustomercustomerpost)
* [documentArchiveCustomerGetCustomer](documentarchiveservice.md#static-documentarchivecustomergetcustomer)
* [documentArchiveDelete](documentarchiveservice.md#static-documentarchivedelete)
* [documentArchiveEmployeeEmployeePost](documentarchiveservice.md#static-documentarchiveemployeeemployeepost)
* [documentArchiveEmployeeGetEmployee](documentarchiveservice.md#static-documentarchiveemployeegetemployee)
* [documentArchiveProductGetProduct](documentarchiveservice.md#static-documentarchiveproductgetproduct)
* [documentArchiveProductProductPost](documentarchiveservice.md#static-documentarchiveproductproductpost)
* [documentArchiveProjectGetProject](documentarchiveservice.md#static-documentarchiveprojectgetproject)
* [documentArchiveProjectProjectPost](documentarchiveservice.md#static-documentarchiveprojectprojectpost)
* [documentArchiveProspectGetProspect](documentarchiveservice.md#static-documentarchiveprospectgetprospect)
* [documentArchiveProspectProspectPost](documentarchiveservice.md#static-documentarchiveprospectprospectpost)
* [documentArchivePut](documentarchiveservice.md#static-documentarchiveput)
* [documentArchiveReceptionReceptionPost](documentarchiveservice.md#static-documentarchivereceptionreceptionpost)
* [documentArchiveSupplierGetSupplier](documentarchiveservice.md#static-documentarchivesuppliergetsupplier)
* [documentArchiveSupplierSupplierPost](documentarchiveservice.md#static-documentarchivesuppliersupplierpost)

## Methods

### `Static` documentArchiveAccountAccountPost

▸ **documentArchiveAccountAccountPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Account Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveAccountGetAccount

▸ **documentArchiveAccountGetAccount**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with account object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveCustomerCustomerPost

▸ **documentArchiveCustomerCustomerPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Customer Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveCustomerGetCustomer

▸ **documentArchiveCustomerGetCustomer**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with customer object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveDelete

▸ **documentArchiveDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete document archive.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` documentArchiveEmployeeEmployeePost

▸ **documentArchiveEmployeeEmployeePost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Employee Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveEmployeeGetEmployee

▸ **documentArchiveEmployeeGetEmployee**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with employee object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveProductGetProduct

▸ **documentArchiveProductGetProduct**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with product object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveProductProductPost

▸ **documentArchiveProductProductPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Product Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveProjectGetProject

▸ **documentArchiveProjectGetProject**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with project object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveProjectProjectPost

▸ **documentArchiveProjectProjectPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Project Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveProspectGetProspect

▸ **documentArchiveProspectGetProspect**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with prospect object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveProspectProspectPost

▸ **documentArchiveProspectProspectPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Prospect Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchivePut

▸ **documentArchivePut**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Update document archive.

**`result`** ResponseWrapperDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [DocumentArchive](../interfaces/documentarchive.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveReceptionReceptionPost

▸ **documentArchiveReceptionReceptionPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload a file to the document archive reception. Send as multipart form.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

___

### `Static` documentArchiveSupplierGetSupplier

▸ **documentArchiveSupplierGetSupplier**(`__namedParameters`: object): *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

[BETA] Find documents archived associated with supplier object type.

**`result`** ListResponseDocumentArchive successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | number | - | Element ID |
`periodDateFrom` | string | - | From and including |
`periodDateTo` | string | - | To and excluding |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDocumentArchive](../interfaces/listresponsedocumentarchive.md)›*

___

### `Static` documentArchiveSupplierSupplierPost

▸ **documentArchiveSupplierSupplierPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*

[BETA] Upload file to Supplier Document Archive.

**`result`** ResponseWrapperDocumentArchive successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The file |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDocumentArchive](../interfaces/responsewrapperdocumentarchive.md)›*
