[tripletexjs](../README.md) › [DeliveryAddressService](deliveryaddressservice.md)

# Class: DeliveryAddressService

## Hierarchy

* **DeliveryAddressService**

## Index

### Methods

* [deliveryAddressGet](deliveryaddressservice.md#static-deliveryaddressget)
* [deliveryAddressPut](deliveryaddressservice.md#static-deliveryaddressput)
* [deliveryAddressSearch](deliveryaddressservice.md#static-deliveryaddresssearch)

## Methods

### `Static` deliveryAddressGet

▸ **deliveryAddressGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperDeliveryAddress](../interfaces/responsewrapperdeliveryaddress.md)›*

Get address by ID.

**`result`** ResponseWrapperDeliveryAddress successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDeliveryAddress](../interfaces/responsewrapperdeliveryaddress.md)›*

___

### `Static` deliveryAddressPut

▸ **deliveryAddressPut**(`__namedParameters`: object): *Promise‹[ResponseWrapperDeliveryAddress](../interfaces/responsewrapperdeliveryaddress.md)›*

Update address.

**`result`** ResponseWrapperDeliveryAddress successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`body` | [DeliveryAddress](../interfaces/deliveryaddress.md) | Partial object describing what should be updated |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperDeliveryAddress](../interfaces/responsewrapperdeliveryaddress.md)›*

___

### `Static` deliveryAddressSearch

▸ **deliveryAddressSearch**(`__namedParameters`: object): *Promise‹[ListResponseDeliveryAddress](../interfaces/listresponsedeliveryaddress.md)›*

Find addresses corresponding with sent data.

**`result`** ListResponseDeliveryAddress successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`addressLine1` | string | - | List of IDs |
`addressLine2` | string | - | List of IDs |
`city` | string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`name` | string | - | List of IDs |
`postalCode` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseDeliveryAddress](../interfaces/listresponsedeliveryaddress.md)›*
