[tripletexjs](../README.md) › [CountryService](countryservice.md)

# Class: CountryService

## Hierarchy

* **CountryService**

## Index

### Methods

* [countryGet](countryservice.md#static-countryget)
* [countrySearch](countryservice.md#static-countrysearch)

## Methods

### `Static` countryGet

▸ **countryGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperCountry](../interfaces/responsewrappercountry.md)›*

Get country by ID.

**`result`** ResponseWrapperCountry successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCountry](../interfaces/responsewrappercountry.md)›*

___

### `Static` countrySearch

▸ **countrySearch**(`__namedParameters`: object): *Promise‹[ListResponseCountry](../interfaces/listresponsecountry.md)›*

Find countries corresponding with sent data.

**`result`** ListResponseCountry successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`code` | string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`id` | string | - | List of IDs |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseCountry](../interfaces/listresponsecountry.md)›*
