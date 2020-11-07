[tripletexjs](../README.md) › [CustomerService](customerservice.md)

# Class: CustomerService

## Hierarchy

* **CustomerService**

## Index

### Methods

* [customerDelete](customerservice.md#static-customerdelete)
* [customerGet](customerservice.md#static-customerget)
* [customerListPostList](customerservice.md#static-customerlistpostlist)
* [customerListPutList](customerservice.md#static-customerlistputlist)
* [customerPost](customerservice.md#static-customerpost)
* [customerPut](customerservice.md#static-customerput)
* [customerSearch](customerservice.md#static-customersearch)

## Methods

### `Static` customerDelete

▸ **customerDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete customer by ID

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` customerGet

▸ **customerGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperCustomer](../interfaces/responsewrappercustomer.md)›*

Get customer by ID.

**`result`** ResponseWrapperCustomer successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCustomer](../interfaces/responsewrappercustomer.md)›*

___

### `Static` customerListPostList

▸ **customerListPostList**(`__namedParameters`: object): *Promise‹[ListResponseCustomer](../interfaces/listresponsecustomer.md)›*

[BETA] Create multiple customers. Related supplier addresses may also be created.

**`result`** ListResponseCustomer successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Customer](../modules/customer.md)[] | JSON representing a list of new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ListResponseCustomer](../interfaces/listresponsecustomer.md)›*

___

### `Static` customerListPutList

▸ **customerListPutList**(`__namedParameters`: object): *Promise‹[ListResponseCustomer](../interfaces/listresponsecustomer.md)›*

[BETA] Update multiple customers. Addresses can also be updated.

**`result`** ListResponseCustomer successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Customer](../modules/customer.md)[] | JSON representing updates to object. Should have ID and version set. |

**Returns:** *Promise‹[ListResponseCustomer](../interfaces/listresponsecustomer.md)›*

___

### `Static` customerPost

▸ **customerPost**(`__namedParameters`: object): *Promise‹[ResponseWrapperCustomer](../interfaces/responsewrappercustomer.md)›*

Create customer. Related customer addresses may also be created.

**`result`** ResponseWrapperCustomer successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Customer](../modules/customer.md) | JSON representing the new object to be created. Should not have ID and version set. |

**Returns:** *Promise‹[ResponseWrapperCustomer](../interfaces/responsewrappercustomer.md)›*

___

### `Static` customerPut

▸ **customerPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperCustomer](../interfaces/responsewrappercustomer.md)›*

Update customer.

**`result`** ResponseWrapperCustomer successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | undefined &#124; [Customer](../modules/customer.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCustomer](../interfaces/responsewrappercustomer.md)›*

___

### `Static` customerSearch

▸ **customerSearch**(`__namedParameters`: object): *Promise‹[ListResponseCustomer](../interfaces/listresponsecustomer.md)›*

Find customers corresponding with sent data.

**`result`** ListResponseCustomer successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountManagerId` | undefined &#124; string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`customerAccountNumber` | undefined &#124; string | - | List of IDs |
`email` | undefined &#124; string | - | Equals |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`invoiceEmail` | undefined &#124; string | - | Equals |
`isInactive` | boolean | false | Equals |
`organizationNumber` | undefined &#124; string | - | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseCustomer](../interfaces/listresponsecustomer.md)›*
