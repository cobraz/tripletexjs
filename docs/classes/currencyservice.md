[tripletexjs](../README.md) › [CurrencyService](currencyservice.md)

# Class: CurrencyService

## Hierarchy

* **CurrencyService**

## Index

### Methods

* [currencyGet](currencyservice.md#static-currencyget)
* [currencyRateGetRate](currencyservice.md#static-currencyrategetrate)
* [currencySearch](currencyservice.md#static-currencysearch)

## Methods

### `Static` currencyGet

▸ **currencyGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperCurrency](../interfaces/responsewrappercurrency.md)›*

Get currency by ID.

**`result`** ResponseWrapperCurrency successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperCurrency](../interfaces/responsewrappercurrency.md)›*

___

### `Static` currencyRateGetRate

▸ **currencyRateGetRate**(`__namedParameters`: object): *Promise‹[ResponseWrapperCurrencyExchangeRate](../interfaces/responsewrappercurrencyexchangerate.md)›*

Find currency exchange rate corresponding with sent data.

**`result`** ResponseWrapperCurrencyExchangeRate successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`date` | string | Format is yyyy-MM-dd |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Currency id |

**Returns:** *Promise‹[ResponseWrapperCurrencyExchangeRate](../interfaces/responsewrappercurrencyexchangerate.md)›*

___

### `Static` currencySearch

▸ **currencySearch**(`__namedParameters`: object): *Promise‹[ListResponseCurrency](../interfaces/listresponsecurrency.md)›*

Find currencies corresponding with sent data.

**`result`** ListResponseCurrency successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`code` | undefined &#124; string | - | Currency codes |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseCurrency](../interfaces/listresponsecurrency.md)›*
