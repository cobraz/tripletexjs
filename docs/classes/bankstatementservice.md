[tripletexjs](../README.md) › [BankStatementService](bankstatementservice.md)

# Class: BankStatementService

## Hierarchy

* **BankStatementService**

## Index

### Methods

* [bankStatementDelete](bankstatementservice.md#static-bankstatementdelete)
* [bankStatementGet](bankstatementservice.md#static-bankstatementget)
* [bankStatementImportImportBankStatement](bankstatementservice.md#static-bankstatementimportimportbankstatement)
* [bankStatementSearch](bankstatementservice.md#static-bankstatementsearch)

## Methods

### `Static` bankStatementDelete

▸ **bankStatementDelete**(`__namedParameters`: object): *Promise‹any›*

[BETA] Delete bank statement by ID.

**`result`** any successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`id` | number | Element ID |

**Returns:** *Promise‹any›*

___

### `Static` bankStatementGet

▸ **bankStatementGet**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankStatement](../interfaces/responsewrapperbankstatement.md)›*

[BETA] Get bank statement.

**`result`** ResponseWrapperBankStatement successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fields` | undefined &#124; string | Fields filter pattern |
`id` | number | Element ID |

**Returns:** *Promise‹[ResponseWrapperBankStatement](../interfaces/responsewrapperbankstatement.md)›*

___

### `Static` bankStatementImportImportBankStatement

▸ **bankStatementImportImportBankStatement**(`__namedParameters`: object): *Promise‹[ResponseWrapperBankStatement](../interfaces/responsewrapperbankstatement.md)›*

[BETA] Upload bank statement file.

**`result`** ResponseWrapperBankStatement successfully created

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`accountId` | number | Account ID |
`bankId` | number | Bank ID |
`externalId` | undefined &#124; string | External ID |
`file` | Buffer‹› &#124; ArrayBuffer &#124; ArrayBufferView | The bank statement file |
`fileFormat` | "DNB_CSV" &#124; "EIKA_TELEPAY" &#124; "SPAREBANK1_TELEPAY" &#124; "VISMA_ACCOUNT_STATEMENT" &#124; "HANDELSBANKEN_TELEPAY" &#124; "SPAREBANKEN_VEST_TELEPAY" &#124; "NORDEA_CSV" &#124; "TRANSFERWISE" &#124; "SPAREBANKEN_SOR_TELEPAY" &#124; "SPAREBANKEN_OST_TELEPAY" &#124; "DANSKE_BANK_CSV" &#124; "CULTURA_BANK_TELEPAY" | File format |
`fromDate` | string | Format is yyyy-MM-dd (from and incl.). |
`toDate` | string | Format is yyyy-MM-dd (to and excl.). |

**Returns:** *Promise‹[ResponseWrapperBankStatement](../interfaces/responsewrapperbankstatement.md)›*

___

### `Static` bankStatementSearch

▸ **bankStatementSearch**(`__namedParameters`: object): *Promise‹[ListResponseBankStatement](../interfaces/listresponsebankstatement.md)›*

[BETA] Find bank statement corresponding with sent data.

**`result`** ListResponseBankStatement successful operation

**`throws`** ApiError

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`accountId` | undefined &#124; string | - | List of IDs |
`count` | number | 1000 | Number of elements to return |
`fields` | undefined &#124; string | - | Fields filter pattern |
`fileFormat` | undefined &#124; "DNB_CSV" &#124; "EIKA_TELEPAY" &#124; "SPAREBANK1_TELEPAY" &#124; "VISMA_ACCOUNT_STATEMENT" &#124; "HANDELSBANKEN_TELEPAY" &#124; "SPAREBANKEN_VEST_TELEPAY" &#124; "NORDEA_CSV" &#124; "TRANSFERWISE" &#124; "SPAREBANKEN_SOR_TELEPAY" &#124; "SPAREBANKEN_OST_TELEPAY" &#124; "DANSKE_BANK_CSV" &#124; "CULTURA_BANK_TELEPAY" | - | File format |
`from` | undefined &#124; number | - | From index |
`id` | undefined &#124; string | - | List of IDs |
`sorting` | undefined &#124; string | - | Sorting pattern |

**Returns:** *Promise‹[ListResponseBankStatement](../interfaces/listresponsebankstatement.md)›*
