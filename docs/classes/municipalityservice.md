[tripletexjs](../README.md) › [MunicipalityService](municipalityservice.md)

# Class: MunicipalityService

## Hierarchy

* **MunicipalityService**

## Index

### Methods

* [municipalitySearch](municipalityservice.md#static-municipalitysearch)

## Methods

### `Static` municipalitySearch

▸ **municipalitySearch**(`__namedParameters`: object): *Promise‹[ListResponseMunicipality](../interfaces/listresponsemunicipality.md)›*

[BETA] Get municipalities.

**`result`** ListResponseMunicipality successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`count` | number | 1000 | Number of elements to return |
`fields` | string | - | Fields filter pattern |
`from` | number | - | From index |
`includePayrollTaxZones` | boolean | true | Equals |
`sorting` | string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseMunicipality](../interfaces/listresponsemunicipality.md)›*
