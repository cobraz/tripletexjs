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
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`includePayrollTaxZones` | boolean | true | Equals |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseMunicipality](../interfaces/listresponsemunicipality.md)›*
